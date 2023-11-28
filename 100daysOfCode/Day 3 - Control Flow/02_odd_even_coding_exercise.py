#Write a code that'll tell us whether a given number is odd or even

print("Welcome to the ODD / EVEN teller!!")
number = int(input("Choose your NUMBER fren!:\n"))

has_remainder = int(number % 2)

if has_remainder == 0:
    print("EVEN")
else: 
    print("ODD")