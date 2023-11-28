#Calculate the average height of students
print("Welcome to the Height Calculator")
student_heights = input("Input the height of all of your students here:\n").split(" ")

for x in range(0, len(student_heights)):
    student_heights[x] = int(student_heights[x])

print(student_heights)

total = 0
div = 0
for x in student_heights:
    total += student_heights[div]
    div += 1

print(round(total / div))

