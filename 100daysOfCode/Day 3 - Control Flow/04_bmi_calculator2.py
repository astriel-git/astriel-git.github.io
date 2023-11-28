#Write a program that asks a person their height, and their weight. Then calculates their BMI and prints it back to them.

height = float(input("Write down your height in meters:\n"))
weight = float(input("Great! Now, what about your weight in kg?:\n"))

bmi = weight / height ** 2

if bmi < 18.5:
    print("Your BMI is: %0.1f. You're Underweight" %bmi)
elif bmi < 25:
    print("Your BMI is: %0.1f. You have Normal Weight" %bmi)
elif bmi < 30:
    print("Your BMI is: %0.1f. You're Overweight" %bmi)
elif bmi <35:
    print("Your BMI is: %0.1f. You're Obese" %bmi)
else:
    print("Your BMI is: %0.1f. You're Clinically Obese" %bmi)