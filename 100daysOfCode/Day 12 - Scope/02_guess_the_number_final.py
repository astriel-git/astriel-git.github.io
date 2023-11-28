import random
from art import logo

EASY_LEVEL_TURNS = 10
HARD_LEVEL_TURNS = 5

def check_answer(guess, answer, turns):
    """Checks answer against guess. Returns the number of turns remaining"""
    if guess > answer:
        print("Too High")
        return turns -1
    elif guess < answer:
        print("Too Low")
        return turns -1
    else:
        print(f"You got it! The answer was {answer}")

def set_difficulty():
    level = input("Choose a difficult between 'easy' and 'hard': ")
    if level == "easy":
        return EASY_LEVEL_TURNS
    else:
        return HARD_LEVEL_TURNS

def game():
    print(logo)
    print("Welcome to the Number Guessing Game!")
    print("I'm thinking of a number between 1 and 100")
    answer = int(random.randint(1, 100))
    print(f"The computer's choice is {answer} by the way")
    turns = set_difficulty()
    

    guess = 0
    while guess != answer:
        print(f"You have {turns} attempts remaining to guess the number.")
        guess = int(input("Make a guess: "))
        turns  = check_answer(guess, answer, turns)
        if turns == 0:
            print("You've run out of guesses, you lose.")
            return
        elif guess != answer:
            print("Guess again")

game()













# def guess():
#     user_guess = int(input("Make a guess: "))
#     if user_guess > computers_choice:
#         print("Too high")
#     elif user_guess < computers_choice:
#         print("Too low")
#     else:
#         return True
#     return False

# print("Welcome to the Number Guessing Game!")
# print("I'm thinking of a number between 1 and 100")

# difficulty = input("Choose a difficult between 'easy' and 'hard': ")
# attempts = 0
# if difficulty == "hard":
#     attempts = 5
# else:
#     attempts = 10

# computers_choice = int(random.randint(0, 100))
# 

# while attempts > 0:
#     if guess():
#         print("You win")
#         break
#     attempts -= 1
#     print(f"You have {attempts} {'attempt' if attempts == 1 else 'attempts'} remaining to guess the number.")
#     if attempts == 0:
#         print("You lose")
