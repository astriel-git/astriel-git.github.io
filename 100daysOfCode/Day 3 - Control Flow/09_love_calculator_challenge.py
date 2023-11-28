print("Welcome to the Love Calculator")
name1 = input("What is your name?\n")
name2 = input("What is their name?\n")

names_lower = name1.lower() + name2.lower()

t = names_lower.count("t")
r = names_lower.count("r")
u = names_lower.count("u")
e = names_lower.count("e")

l = names_lower.count("l")
o = names_lower.count("o")
v = names_lower.count("v")
e = names_lower.count("e")

true = t + r + u + e
love = l + o + v + e

true_love_str = str(love) + str(love)
true_love_int = int(true_love_str)

if true_love_int < 10 or true_love_int > 90:
    print(f"Your Score is {true_love_int}, you go together like coke and mentos")
elif true_love_int >= 40 and true_love_int <= 50:
    print(f"Your score is {true_love_int}, you should reconsider things...")
else:
    print(f"Your score is {true_love_int}")