#Logical Operators
# AND, OR, NOT

print("Welcome to the roller coaster!")
height = int(input("What is your height in cm?"))
bill = 0

if height >= 120:
    print("You can ride the roller coaster!")
    age = int(input("How old are you?"))
    if age < 12:
        bill = 5
        print("Child tickets are $5")
    elif age <= 18:
        bill = 7
        print("Youth tickets are $7")
    elif age >=45 and age <= 55:
        print("Midlife Crisis Tickets are Free")
    else:
        bill = 12
        print("Adult tickets are $12")

    wants_photo = input("Would you like a photo? Y or N?")
    if wants_photo == "Y":
        bill += 3
    
    print(f"Your final bill comes down to: ${bill}")

else:
    print("Sorry, you have to grow taller before you can ride...")
