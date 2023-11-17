import random

word_list = ["ardavark", "baboon", "camel"]

chosen_word = word_list[random.randint(0, len(word_list) - 1)]

guess = input("Choose ONE Random Letter\n").lower()

for n in range(len(chosen_word)):
    if guess in chosen_word[n]:
        print("Right")
    else:
        print("Wrong")
