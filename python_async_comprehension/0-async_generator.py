# 0-async_generator.py

import asyncio
import random

async def async_generator():
    """
    An asynchronous generator that yields 10 random floating-point numbers
    between 0 and 10, with a 1-second delay between each yield.
    """
    for _ in range(10):
        # Asynchronously wait for 1 second
        await asyncio.sleep(1)
        
        # Generate a random floating-point number between 0 and 10
        random_number = random.uniform(0, 10)
        
        # Yield the generated random number
        yield random_number

