row1 = ["🤞", "🤞", "🤞"]
row2 = ["🤞", "🤞", "🤞"]
row3 = ["🤞", "🤞", "🤞"]
treasureMap = [row1, row2, row3]
print(f"{row1}\n{row2}\n{row3}")
position = input("Where do you want to put the trasure? Pick a row and a column from 1 to 3 for each\n")

column = int(position[0])
row = int(position[1])

treasureMap[row - 1][column - 1] = "👌"


print(f"{row1}\n{row2}\n{row3}")

