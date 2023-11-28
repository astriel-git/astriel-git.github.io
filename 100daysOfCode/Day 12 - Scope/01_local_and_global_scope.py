# enemies = 1

# def increase_enemies():
#     enemies = 2
#     print(f"enemies inside function: {enemies}")

# increase_enemies()
# print(f"enemies outside function {enemies}")

# # Local Scope

# def drink_potion():
#     potion_strength = 2
#     print(potion_strength)

# drink_potion()
# print(potion_strength)

# Global Scope
# player_health = 10

# def game():
#     def drink_potion():
#         potion_strength = 2
#         print(player_health)

#     drink_potion()

# print(player_health)

# There is no such thing as block scope in Python
# game_level = 3
# def create_enemy():
#     enemies = ["Skeleton", "Zombie", "Alien"]
#     if game_level < 5:
#         new_enemy = enemies[0]

# print(new_enemy)

# MODIFYING GLOBAL SCOPE

# This function actually modifies the "enemies" value that's outside of the function, but how could we achieve this same result without modifying the global scope from within the function?
# enemies = 1

# def increase_enemies():
#     global enemies
#     enemies += 1
#     print(f"enemies inside function: {enemies}")

# increase_enemies()
# print(f"enemies outside function {enemies}")


# instead of modifying the enemies we can return it as the output of the function
# Now the function can be put anywhere else in the code, as long as we know this is how we increase enemies, all we need to do is call this function!
# enemies = 1

# def increase_enemies():
#     print(f"enemies inside function: {enemies}")
#     return enemies + 1

# enemies = increase_enemies()
# print(f"enemies outside function {enemies}")

# Global Constants
# Global constants are variables we define and never plan on changing again, so there's no problem in using them from global scopes.

PI = 3.14159
URL = "https://google.com"
TWITTER_HANDLE = "@potato"



