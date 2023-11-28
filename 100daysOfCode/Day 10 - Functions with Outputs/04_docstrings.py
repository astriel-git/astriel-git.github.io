def format_name(f_name, l_name):
    """Take a first and last name and format it to return the title case version of the name"""
    if f_name == "" or l_name == "":
        return "You didn't provide valid inputs"

    for_f_name = f_name.title()
    for_l_name = l_name.title()
    return f"For fucks sakes {for_f_name} {for_l_name}"

new_variable = format_name(input("What is your first name?"), input("What is your last name?"))
print(new_variable)