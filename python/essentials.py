

"""
Sample Parameterized Decorator
"""

def param_decor(n):

    def wrapper(func):

        def inner_function():
            func(n)
        
        return inner_function

    return wrapper


"""
Usecase:
@param_decor(d)
def aFunction():
    pass
"""