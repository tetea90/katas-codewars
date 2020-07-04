"""
What could be easier than comparing integer numbers? However, the given piece of code doesn't recognize some of the special numbers for a reason to be found. Your task is to find the bug and eliminate it.
"""

#Solution:

def what_is(x):
    if x is 42:
        return 'everything'
    elif x == 1764:
        return 'everything squared'
    else:
        print(x)
        return 'nothing'
