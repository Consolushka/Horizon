"""Tests for the Anthropic client."""

from __future__ import annotations

import asyncio
from types import SimpleNamespace
from unittest.mock import AsyncMock

import httpx
from anthropic import BadRequestError

from src.ai.client import AnthropicClient
from src.models import AIConfig, AIProvider


def _temperature_error() -> BadRequestError:
    request = httpx.Request("POST", "https://api.anthropic.com/v1/messages")
    return BadRequestError(
        "temperature is not supported for this model",
        response=httpx.Response(400, request=request),
        body=None,
    )


def test_drops_temperature_after_rejection_and_reads_text_block(monkeypatch):
    monkeypatch.setenv("ANTHROPIC_API_KEY", "test-key")
    client = AnthropicClient(
        AIConfig(provider=AIProvider.ANTHROPIC, model="claude-haiku-5-5", api_key_env="ANTHROPIC_API_KEY")
    )
    reply = SimpleNamespace(
        content=[SimpleNamespace(type="thinking", thinking=""), SimpleNamespace(type="text", text="ok")],
        usage=None,
    )
    create = AsyncMock(side_effect=[_temperature_error(), reply, reply])
    client.client.messages.create = create

    assert asyncio.run(client.complete("sys", "hi", temperature=0)) == "ok"
    assert asyncio.run(client.complete("sys", "hi", temperature=0)) == "ok"

    sent = [call.kwargs for call in create.call_args_list]
    assert "temperature" in sent[0]
    assert "temperature" not in sent[1]
    assert "temperature" not in sent[2]
