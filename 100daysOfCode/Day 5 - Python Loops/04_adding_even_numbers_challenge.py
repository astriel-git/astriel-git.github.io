total = 0

for n in range(2, 101, 2):
    total += n

print(total)

# Another Solution

total2 = 0
for number in range(1, 101):
    if number % 2 == 0:
        total2 += number
print(total2)