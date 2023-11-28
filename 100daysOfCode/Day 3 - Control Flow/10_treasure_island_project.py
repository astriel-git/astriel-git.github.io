print('''
*******************************************************************************
          |                   |                  |                     |
 _________|________________.=""_;=.______________|_____________________|_______
|                   |  ,-"_,=""     `"=.|                  |
|___________________|__"=._o`"-._        `"=.______________|___________________
          |                `"=._o`"=._      _`"=._                     |
 _________|_____________________:=._o "=._."_.-="'"=.__________________|_______
|                   |    __.--" , ; `"=._o." ,-"""-._ ".   |
|___________________|_._"  ,. .` ` `` ,  `"-._"-._   ". '__|___________________
          |           |o`"=._` , "` `; .". ,  "-._"-._; ;              |
 _________|___________| ;`-.o`"=._; ." ` '`."\` . "-._ /_______________|_______
|                   | |o;    `"-.o`"=._``  '` " ,__.--o;   |
|___________________|_| ;     (#) `-.o `"=.`_.--"_o.-; ;___|___________________
____/______/______/___|o;._    "      `".o|o_.--"    ;o;____/______/______/____
/______/______/______/_"=._o--._        ; | ;        ; ;/______/______/______/_
____/______/______/______/__"=._o--._   ;o|o;     _._;o;____/______/______/____
/______/______/______/______/____"=._o._; | ;_.--"o.--"_/______/______/______/_
____/______/______/______/______/_____"=.o|o_.--""___/______/______/______/____
/______/______/______/______/______/______/______/______/______/______/[LucasP]
*******************************************************************************
''')
name = input("Ahoy matey, what be your name!?\n")
print(f"Welcome to Treasure Island {name}!")
print("Your objective in this game is to find the hidden treasure!!")
print("Answer the questions as you'd like, and good luck finding the One Piece, oops, wrong series, I meant the TREASURE!!!\n")
input("Type START to begin your adventure!!\n")

print('''
  ,-------------.                             
 / Hey, this is a\             
(robbery, give all|   
 \ your GOLD NOW!/ ,-.     |   
  `------------+" /___\   _|_        ,--. ,-.
                \ |o,o|   ,S      ,-<  o v    "-.   
     _           ,-\-/-. / '     ( ~       O    /   
     \\_        / ,   . V /       \ ( ) ~    )   \  
    =", `-------------------------( (      (   )  ) 
   ~=/     ~  ~   ~~  ~   ~  ~~ ~ <   o   ~  o   /  
   -=>   ~ ~   ~ ~  ~~ ~  ~ ~ ~ ~~(O  ~   o  \ ~ )  
     `, _,-------------------------\       ,    /  
     =""                           """""""" """"
''')
bandit = input(f"In front of you there is a bandit, he's asking for all your money. What do you do {name}? ATTACK, RUN AWAY, TALK\n")

if bandit == "ATTACK":
    input("You did it, you beat that fool, now let's keep on going. Type GO\n")
    print('''
             ,--._______,-. 
       ,','  ,    .  ,_`-. 
      / /  ,' , _` ``. |  )       `-.. 
     (,';'""`/ '"`-._ ` \/ ______    \\ 
       : ,o.-`- ,o.  )\` -'      `---.)) 
       : , d8b ^-.   '|   `.      `    `. 
       |/ __:_     `. |  ,  `       `    \ 
       | ( ,-.`-.    ;'  ;   `       :    ; 
       | |  ,   `.      /     ;      :    \ 
       ;-'`:::._,`.__),'             :     ; 
      / ,  `-   `--                  ;     | 
     /  \                   `       ,      | 
    (    `     :              :    ,\      | 
     \   `.    :     :        :  ,'  \    : 
      \    `|-- `     \ ,'    ,-'     :-.-'; 
      :     |`--.______;     |        :    : 
       :    /           |    |         |   \ 
       |    ;           ;    ;        /     ; 
     _/--' |   -hrr-   :`-- /         \_:_:_| 
   ,',','  |           |___ \ 
   `^._,--'           / , , .) 
                      `-._,-' 
''')
    print("You walk further in the woods. After hours of walking you reach Peydey the Bulldog, he is the guardian of this forest")
    peydey = input(f"Peydey says, Hello {name}, I've been waiting for you for 1000 years.\nWhat do you seek? TREASURE or WISDOM?\n")
    if peydey == "TREASURE":
        print('''
                        ____
                        /\  __\_
                       /  \/ \___\
                       \     /___/
                    /\_/     \    \
                   /          \____\
               ___/\       _  /    /
              / \/  \     /_\/____/
              \     /     \___\
              /     \_/\  /   /
             /          \/___/
             \  _       /   /
              \/_|     /___/
                 /     \___\
                 \  /\_/___/
                  \/___/
''')
        print("Hell yeah boy, of COURSE, who the hell would come to this God forsaken forest if not to find some treasure!")
        print("But if treasure is what you seek, you must answer my riddle")
        peydey_yes = input("Are you ready? YES or NO")
        if peydey_yes == "YES":
            answer = input("What came out from ONE hole and goes in to TWO holes?\n")
            if answer == "FART":
                print('''
           ,,,,,
           \ e e\
           C  _\/    |\\,
            )\_)    \_ /
          _/|/_     _//
        ,'\ ~ /'-,_/  \
       /   \_/    /   /
      ,  |     \_._,-"
     (  <     _'
     |   \     \
     ', -',-~.-'
     _/  )     |
      |//   |  '
        '   )  |
        |   |  |
     ._.,   -  |.,_ //
  _\-'  )___|__|_    '-._
  b'ger  /____\__\
''')
                print(f"Your prize is this guy, and this guy is me, congratulations {name}")
                
        else:
            print('''
               ...
             ;::::;
           ;::::; :;
         ;:::::'   :;
        ;:::::;     ;.
       ,:::::'       ;           OOO
       ::::::;       ;          OOOOO
       ;:::::;       ;         OOOOOOOO
      ,;::::::;     ;'         / OOOOOOO
    ;:::::::::`. ,,,;.        /  / DOOOOOO
  .';:::::::::::::::::;,     /  /     DOOOO
 ,::::::;::::::;;;;::::;,   /  /        DOOO
;`::::::`'::::::;;;::::: ,#/  /          DOOO
:`:::::::`;::::::;;::: ;::#  /            DOOO
::`:::::::`;:::::::: ;::::# /              DOO
`:`:::::::`;:::::: ;::::::#/               DOO
 :::`:::::::`;; ;:::::::::##                OO
 ::::`:::::::`;::::::::;:::#                OO
 `:::::`::::::::::::;'`:;::#                O
  `:::::`::::::::;' /  / `:#
   ::::::`:::::;'  /  /   `#
''')
            print("You died again for being lazy, why did you say NO? Jesus...")
    else:
        print('''
...
               ...
             ;::::;
           ;::::; :;
         ;:::::'   :;
        ;:::::;     ;.
       ,:::::'       ;           OOO
       ::::::;       ;          OOOOO
       ;:::::;       ;         OOOOOOOO
      ,;::::::;     ;'         / OOOOOOO
    ;:::::::::`. ,,,;.        /  / DOOOOOO
  .';:::::::::::::::::;,     /  /     DOOOO
 ,::::::;::::::;;;;::::;,   /  /        DOOO
;`::::::`'::::::;;;::::: ,#/  /          DOOO
:`:::::::`;::::::;;::: ;::#  /            DOOO
::`:::::::`;:::::::: ;::::# /              DOO
`:`:::::::`;:::::: ;::::::#/               DOO
 :::`:::::::`;; ;:::::::::##                OO
 ::::`:::::::`;::::::::;:::#                OO
 `:::::`::::::::::::;'`:;::#                O
  `:::::`::::::::;' /  / `:#
   ::::::`:::::;'  /  /   `#
''')
        print("Peydey didn't like you very much. He mauled you just like a baby, TRY AGAIN!")


elif bandit == "RUN AWAY":
    print('''
               ...
             ;::::;
           ;::::; :;
         ;:::::'   :;
        ;:::::;     ;.
       ,:::::'       ;           OOO
       ::::::;       ;          OOOOO
       ;:::::;       ;         OOOOOOOO
      ,;::::::;     ;'         / OOOOOOO
    ;:::::::::`. ,,,;.        /  / DOOOOOO
  .';:::::::::::::::::;,     /  /     DOOOO
 ,::::::;::::::;;;;::::;,   /  /        DOOO
;`::::::`'::::::;;;::::: ,#/  /          DOOO
:`:::::::`;::::::;;::: ;::#  /            DOOO
::`:::::::`;:::::::: ;::::# /              DOO
`:`:::::::`;:::::: ;::::::#/               DOO
 :::`:::::::`;; ;:::::::::##                OO
 ::::`:::::::`;::::::::;:::#                OO
 `:::::`::::::::::::;'`:;::#                O
  `:::::`::::::::;' /  / `:#
   ::::::`:::::;'  /  /   `#
''')
    print("You ran away as fast and as hard as you could, but the guy had a bow and arrow. Now you're DEAD! Try again, and pro-tip, don't be such a coward!!")
elif bandit == "TALK":
    print('''
               ...
             ;::::;
           ;::::; :;
         ;:::::'   :;
        ;:::::;     ;.
       ,:::::'       ;           OOO
       ::::::;       ;          OOOOO
       ;:::::;       ;         OOOOOOOO
      ,;::::::;     ;'         / OOOOOOO
    ;:::::::::`. ,,,;.        /  / DOOOOOO
  .';:::::::::::::::::;,     /  /     DOOOO
 ,::::::;::::::;;;;::::;,   /  /        DOOO
;`::::::`'::::::;;;::::: ,#/  /          DOOO
:`:::::::`;::::::;;::: ;::#  /            DOOO
::`:::::::`;:::::::: ;::::# /              DOO
`:`:::::::`;:::::: ;::::::#/               DOO
 :::`:::::::`;; ;:::::::::##                OO
 ::::`:::::::`;::::::::;:::#                OO
 `:::::`::::::::::::;'`:;::#                O
  `:::::`::::::::;' /  / `:#
   ::::::`:::::;'  /  /   `#
''')
    print("You tried talking to the guy, but these types are only keen on GOLD, there's no sense trying to talk sense into bandits. TRY AGAIN!!!")
else:
    print('''
               ...
             ;::::;
           ;::::; :;
         ;:::::'   :;
        ;:::::;     ;.
       ,:::::'       ;           OOO
       ::::::;       ;          OOOOO
       ;:::::;       ;         OOOOOOOO
      ,;::::::;     ;'         / OOOOOOO
    ;:::::::::`. ,,,;.        /  / DOOOOOO
  .';:::::::::::::::::;,     /  /     DOOOO
 ,::::::;::::::;;;;::::;,   /  /        DOOO
;`::::::`'::::::;;;::::: ,#/  /          DOOO
:`:::::::`;::::::;;::: ;::#  /            DOOO
::`:::::::`;:::::::: ;::::# /              DOO
`:`:::::::`;:::::: ;::::::#/               DOO
 :::`:::::::`;; ;:::::::::##                OO
 ::::`:::::::`;::::::::;:::#                OO
 `:::::`::::::::::::;'`:;::#                O
  `:::::`::::::::;' /  / `:#
   ::::::`:::::;'  /  /   `#
''')
    print("What the hell are you typing fool, you died for tryping wrong, start over and pay more attention next time!!")



