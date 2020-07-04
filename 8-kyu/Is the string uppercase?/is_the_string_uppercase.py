"""
Task
Create a method is_uppercase() to see whether the string is ALL CAPS. For example:
is_uppercase("c") == False
is_uppercase("C") == True
is_uppercase("hello I AM DONALD") == False
is_uppercase("HELLO I AM DONALD") == True
is_uppercase("ACSKLDFJSgSKLDFJSKLDFJ") == False
is_uppercase("ACSKLDFJSGSKLDFJSKLDFJ") == True
"""

#Solution:

def is_uppercase(inp):
    if inp.upper() == inp:
        return True
    else:
        return False
