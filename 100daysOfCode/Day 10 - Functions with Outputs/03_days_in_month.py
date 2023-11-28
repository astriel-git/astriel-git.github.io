def is_leap():
    if year % 4 == 0:
        if year % 100 == 0:
            if year % 400 == 0:
                return True
            else:
                return False
        else:
            return True
    else:
        return False

def days_in_month(year, month):
    year = is_leap()

    month_days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    # My solution
    # if month == 2 and year == True:
    #     position = month - 1
    #     month_days[1] = 29
    #     return month_days[position]
    # else:
    #     position = month - 1
    #     return month_days[position]
    
    # Teacher's Solution
    if month > 12 or month < 1:
        return "Invalid Month"
    if is_leap(year) and month == 2:
        return 29
    return month_days[month - 1]



# ---------------------------------------------------------------
year = int(input("Enter a year: "))
month = int(input("Enter a month: "))
days = days_in_month(year, month)
print(days)