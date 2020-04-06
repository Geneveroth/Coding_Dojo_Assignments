import random
def randInt(min=0, max=100):
    if min>max or max<0:
        return False
    
    num = random.random()*(max-min) +min
    return round(num)