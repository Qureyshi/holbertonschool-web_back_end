#!/usr/bin/env python3
"""
Coroutine
"""
import asyncio
import random
import typing


async def async_generator() -> typing.Generator[float, None, None]:
    """
    Functions yields the list of float numbers
    """
    for i in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
