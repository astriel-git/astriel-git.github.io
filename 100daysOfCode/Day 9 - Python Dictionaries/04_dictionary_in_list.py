travel_log = [
    {
        "country": "France",
        "visits": 12,
        "cities": ["Paris", "Lille", "Dijon"]
    },
    {
        "country": "Germany",
        "visits": 5,
        "cities": ["Berlin", "Hamburg", "Stuttgart"]
    }
]

# Write the function that will allow new countries
# to be added to the travel_log. 👇


# Teacher's Way of Doing it:
# def add_new_country(country_visited, times_visited, cities_visited):
#     new_country = {}
#     new_country["country"] = country_visited
#     new_country["visits"] = times_visited
#     new_country["cities"] = cities_visited

#     travel_log.append(new_country)



# def add_new_country(country, visits, cities):
#     new_country = {
#         "country": country,
#         "visits": visits,
#         "cities": cities,
#     }
#     travel_log.append(new_country)

# # #Do not change the code below:
# add_new_country("Russia", 2, ["Mosow", "Saint Petersburg", "Vladivostok"])




max_visits = max(entry["visits"] for entry in travel_log)
print(max_visits)