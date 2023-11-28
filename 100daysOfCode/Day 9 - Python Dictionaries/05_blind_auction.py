from art import logo

print(logo)
print("Welcome to The Blind Auction Partner!")

bids = {}
bidding_finished = False

def find_highest_bidder(bidding_record):
    highest_bid = 0
    # bidding_record = {"Angela": 123, "John": 456}
    for bidder in bidding_record:
        bid_amount = bidding_record[bidder]
        if bid_amount >= highest_bid:
            highest_bid = bid_amount
            winner = bidder
    print(f"The winner is {winner} with a bid of ${highest_bid}")

while not bidding_finished:
    name = input("What's your name son? \n")
    price = int(input("What's your bid? $"))
    bids[name] = price
    should_continue = input("Anymore bidders? YES or NO.\n").lower()

    if should_continue == "no":
        bidding_finished = True
        find_highest_bidder(bids)
        print("Thank you for user Blind Auction™️. See you soon!\n")
