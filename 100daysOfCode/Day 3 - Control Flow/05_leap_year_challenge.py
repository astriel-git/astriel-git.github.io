print("Welcome to the Leap Year Calculator")
year = int(input("Type down an year here:\n"))

if year % 4 == 0:
    if year % 100 == 0:
        if year % 400 == 0:
            print("It's a Leap Year 2")
        else:
            ("Not a Leap Year 2")
    else:
        print("It's a leap year 1")
else:
    print("Not a Leap Year 1")