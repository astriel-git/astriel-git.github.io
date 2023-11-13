#Coding Challenge:
#In this challenge you'll build a calculator that'll output how many days, weeks, and months you have left in your life until you hit the age of 90.
#The output of this code should look like this:
#You have x days, y weeks, and z months left.

current_age = int(input("How old are you?\n"))

years_remaining = 90 - current_age
months = years_remaining * 12
weeks = years_remaining * 52
days = years_remaining * 365

print(f"Your have {days} days, {weeks} weeks, {months} months left.")



