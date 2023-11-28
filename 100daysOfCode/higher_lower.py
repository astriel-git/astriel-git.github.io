# Import the logo and vs arts from the art file
from art import logo
from art import vs
# import the data file
from game_data import data

# import random
import random

WINNING = True

# Show the logo when the program starts
print(logo)

def play_game():
# Get the competitors data from the data file
    competitor_a = random.choice(data)
    competitor_b = random.choice(data)
    followers_a = competitor_a["follower_count"]
    followers_b = competitor_b["follower_count"]

    # print X, a Y, from Z vs. Y, an X from Z, and the vs logo


    # Behind the scenes keep score of how many times the player answered correctly
    score = 0

    # Compare who between A and B has the most followers
    # If the player is right, substitute person A with person B, turing person B into person A effectivley, and in B's position add a new random celebrity from the list
    # When they get the answer wrong, tell them they were wrong, their score, and thank them for plating the game
    winning = True
    while winning:
        print(f"Compare A: {competitor_a["name"]}, a {competitor_a["description"]}, from {competitor_a["country"]}")
        print(followers_a)
        print(vs)
        print(f"Compare B: {competitor_b["name"]}, a {competitor_b["description"]}, from {competitor_b["country"]}")
        print(followers_b)

        # Query the user "Who has more followers? Type 'A' or 'B': 
        choice = input("Who has more follower? 'A' or 'B'?: ").lower()
    
        if choice == "a" and followers_a > followers_b:
            score += 1
            print(f"\n{competitor_a['name']} has more followers!")
            print("Continue")
            competitor_b = random.choice(data)
            followers_b = competitor_b["follower_count"]
        elif choice == "a" and followers_a < followers_b:
            print(f"\n{competitor_b['name']} has more followers!")
            print(f"You LOST! Your final score is: {score}")
            print("Thank you for playing!")
            winning = False
        elif choice == "b" and followers_a < followers_b:
            score += 1
            print(f"\n{competitor_b['name']} has more followers!")
            print("Continue")
            competitor_a = competitor_b
            followers_a = competitor_b["follower_count"]
            competitor_b = random.choice(data)
            followers_b = competitor_b["follower_count"]
        else:
            print(f"\n{competitor_a['name']} has more followers!")
            print(f"You LOST! Your final score is: {score}")
            print("Thank you for playing!")
            winning = False
    
    
play_game()






