#!/usr/bin/env python3
"""Module that contains function - asynchronous
coroutine that waits for a random delay between 0
and max_delay seconds and returns it."""
import asyncio
import random

async def wait_random(max_delay=10):
    """asynchronous coroutine that waits for a random
    delay between 0 and max_delay seconds and returns it."""
    delay = random.uniform(0, max_delay)  # Generate a random float between 0 and max_delay
    await asyncio.sleep(delay)  # Asynchronously wait for the delay
    return delay

