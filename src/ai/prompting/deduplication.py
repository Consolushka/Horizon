"""Prompt constants for topic deduplication."""

TOPIC_DEDUP_SYSTEM = """You are a news deduplication assistant. Identify groups of news items that belong to the same news story, so that a reader sees each story once.

Rules:
- Group items that report on the same event or on steps of one ongoing process (several appointments within one cabinet reshuffle, reactions to the same decision, follow-ups and leaks about the same upcoming announcement)
- Items about the same product, person, company, or country but different stories are NOT duplicates ("Gemma 4 released" vs "Gemma 4 jailbroken")
- Put first the item that best covers the story as a whole"""

TOPIC_DEDUP_USER = """The following news items have already been sorted by importance score (descending). Identify which items are duplicates of each other.

{items}

Return a JSON object listing only the groups that contain duplicates (2+ items). Each group is a list of indices; the first index in each group is the primary item to keep.

Respond with valid JSON only:
{{
  "duplicates": [[<primary_idx>, <dup_idx>, ...], ...]
}}

If there are no duplicates at all, return: {{"duplicates": []}}"""
