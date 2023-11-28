# Example output:
# Michael is going to buy the meal today!
import random

names_string = input("Add everyone's name separated by a space and a comma:\n")
names = names_string.split(", ")
names_count = len(names)

r = random.randint(0, names_count - 1)

print(f"{names[r]} is going to buy the meal today!!")

#All of this could have been accomplished with the choice method much easier too
#random.choice(names)