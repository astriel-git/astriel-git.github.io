print("Welcome to the Tip Calculator")
total = float(input("What was the total bill?\n"))
percentage = int(input("What percentage tip would you like to give? 10%, 12%, or 15%?\n"))
people = int(input("How many people to split the bill?\n"))

tip_percentage = percentage / 100
total_tip = tip_percentage * total
final_bill = total + total_tip
bill_per_person = final_bill / people
final_final_bill = round(bill_per_person, 2)

print(f"Each person should pay: {final_final_bill}")