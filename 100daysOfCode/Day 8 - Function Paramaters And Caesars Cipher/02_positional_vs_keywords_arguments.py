# Functions with more than 1 input
# Example of Positional Arguments
def greet_with(name, location):
    print(f"Hello {name}, we arrived at {location}")

greet_with("Mr.Dong", "The Cheeks")

# Example of Keyword Arguments
def greet_with_again(name, location):
    print(f"Hello {name}, we arrived at {location}")

greet_with_again(location="The Cheeks", name="Mr.Dong")