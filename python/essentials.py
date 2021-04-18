def param_decor(n):
    """
    Sample Parameterized Decorator
    """
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
