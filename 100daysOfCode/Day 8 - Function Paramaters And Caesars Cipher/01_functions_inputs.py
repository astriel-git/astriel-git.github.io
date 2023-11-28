# Simple Function
def greet():
    print("Hello")
    print("Mr.")
    print("Rocco")

# Function that allows for inputs
def greet(name):
    print(f"Hello {name}")
    print(f"Mr.{name} have you seen my cat?")
    print(f"Ooh, Mr.{name} you're such a kidder")

greet("Butts")
greet("Asses")

# Parameter = The name of the data being passed in, in our example it's "name"

# Argument = The actual data we're assigning to the parameter, in our case "Butts" and "Asses"