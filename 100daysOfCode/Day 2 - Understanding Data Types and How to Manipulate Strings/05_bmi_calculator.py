#Write a program that asks a person their height, and their weight. Then calculates their BMI and prints it back to them.

height = float(input("Write down your height:\n"))
weight = float(input("Great! Now, what about your weight?:\n"))

bmi = weight / (height ** 2)
int_bmi = int(bmi)

print("Your BMI is:", int_bmi)
