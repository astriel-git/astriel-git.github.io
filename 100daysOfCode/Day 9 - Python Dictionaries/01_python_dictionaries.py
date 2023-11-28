programming_dictionary = {
    "Bug": "An error in program that prevents the program from running as expected.", 
    "Function": "A piece of code that you can easiy call over and over again.",
 }

# Retrieving items from dictionary:
# print(programming_dictionary["Bug"])

# Adding new items to dictionary:
programming_dictionary["Loop"] = "The action of doing something over and over again"
# print(programming_dictionary)

# Creating an empty dictionary for later use
empty_dictionary = {}

# Wipe an existing dictionary
# programming_dictionary = {}

#Editing an item in a dictionary
programming_dictionary["Bug"] = "A moth in your computer"

# Loop though a dictionary
for key in programming_dictionary:
    print(key)
    print(programming_dictionary[key])
