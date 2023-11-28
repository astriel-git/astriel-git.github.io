n = int(input("Check this number: "))
def prime_checker(number):
    is_prime = True
    for i in range(2, number):
        if number % i == 0:
            is_prime = False
    if is_prime:
        print("It's a prime number.")
    else:
        print("It's not a prime number")
        
    
prime_checker(number=n)



# Number to be checked for prime



# Check if the number is greater than 1

# If the number is less than 1, its also not a prime number.