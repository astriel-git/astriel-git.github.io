import random

print("Welcome to Rock Paper Scissors!!")
plyHand = int(input("What do you Choose? Rock = 0, Paper = 1, Scissors = 2"))

cpuHand = random.randint(0, 2)

if plyHand == 0:
    print('''
    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)
          ''')
elif plyHand == 1:
    print('''
     _______
---'    ____)____
           ______)
          _______)
         _______)
---.__________)
          ''')
elif plyHand == 2:
    print('''
    _______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)
          ''')
else:
    print('''
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣶⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢴⣄⡀⠀⠀⠀⠀⠀⠀⠀⢈⣧⣷⡤⠄⠀⠀⠀⠀⠀⠀⢠⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⡿⠛⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⣄⠀⠀⠀⠀⠀⠀⠀⠀⣽⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⣷⡀⠀⠀⠀⠀⠀⠀⠀
⠰⠤⣶⡷⢢⡀⠀⠀⠀⢸⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢈⣿⡅⠀⠀⠀⢀⣴⡿⠟⠛⠋⠀⠀⠀⠀⢀⣄⠀⠀⠀⠀⢹⡇⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠉⠉⠁⠀⠀⠀⠈⣿⣧⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⡿⠋⠀⠀⠀⠀⢹⣿⠁⠀⠀⠀⠀⠀⠀⠀⢸⣿⠀⠀⠀⢀⣼⡇⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡄⠀⠀⠀⠀⠀⠘⣿⣆⠀⠀⠀⠀⠀⠀⣴⣿⠏⠀⠀⣰⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠘⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⢿⡄⠂⠀⠀⠀⠀⢈⣿⡇⠀⠀⠀⠀⠸⣿⡀⠀⠀⠸⣿⠤⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣀⠞⠀⠀⠀⠀⠸⣿⠀⠀⠀⠀⠀⠀⠀⠑⣄⡀⠀⠀⠀⠀⢻⠀⠀⠀⠀⢴⡟⠋⠀⠀⠀⠀⠀⠀⠹⣿⣜⠁⠀⠙⠷⣄⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠈⣿⠀⠀⠀⠀⠀⣸⡟⠀⠀⠀⠀⠀⠀⠀⠀⢠⣉⡀⠀⠐⠒⠚⠁⠠⠄⠀⢸⣦⠄⠀⠀⠐⠀⠀⠀⠀⠈⢿⡆⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢠⡿⠀⠀⠀⢀⣼⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⠉⣿⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⡄⠀⠀⠀⠀⠀⠀⢀⣴⡟⠁⠀⠀⠀⠀⠀⢀⣀⣀⣦⠀⠀⡄
⠀⠀⠀⠀⢀⡟⠁⠀⠀⠀⢸⠃⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⠏⠀⢿⡄⠀⠀⠀⠀⠀⠀⠀⠀⣸⠇⠀⠀⠀⠀⠀⣴⡟⠁⠀⠀⠀⠀⠀⠀⠀⠘⠶⠖⠛⠈⠉⠀
⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⣹⠀⠀⠀⠀⠀⠀⢀⣤⡾⠟⠁⠀⠀⠈⠻⢶⣤⣀⣀⠀⠀⠀⠊⠁⠀⠀⠀⠀⠀⠀⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠸⡀⠀⠀⠀⠀⠸⡇⠀⠀⠀⠀⢀⣿⠋⠀⠀⠀⠀⢄⣰⠲⡤⡀⠌⠛⢷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠉⠀⠀⠀⠀⢸⡏⠐⡂⠐⠀⠀⠀⠈⠙⠒⠲⠤⠤⠾⠟⠛⢻⢷⣦⣀⠀⠀⠀⠀⠀⠀⠈⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣷⡀⠃⠀⠀⡄⠀⠀⠀⠀⢤⠂⠀⠐⠀⢧⡈⠀⢯⡻⣷⡀⠀⠀⠀⠀⠀⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣽⣷⣄⠀⠀⠃⠳⠸⡄⠄⠀⠀⠀⠀⠀⢀⣀⢀⠀⣅⢸⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⡾⠟⠉⠀⣨⠙⠛⠶⠤⣀⣀⠀⠀⠀⠀⠰⠤⢣⢸⡘⣌⡆⠘⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡿⣫⡀⠀⢠⠖⡇⠀⠀⡀⠀⠀⠀⠀⠀⢀⣀⠀⠀⠠⠤⣅⣈⣠⣴⢾⣿⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⠑⣿⣡⠤⡏⣠⢯⠀⠊⠁⡀⠀⠀⠀⠀⠈⠉⡟⠛⠐⠰⠀⠀⠇⢷⡀⠟⠛⠻⣶⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣼⡵⠃⢰⠃⢀⡞⢠⠀⠀⠇⠀⠀⠀⠀⣰⠶⠃⠀⠀⠀⠀⠀⠀⠀⠹⣄⠀⢄⠲⠙⢿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣠⣶⡿⠟⠉⠀⠀⠁⠀⠈⠀⠈⠀⢠⡶⣆⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡆⠸⣤⡘⠈⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣠⣾⠟⣥⢰⠆⢠⣄⠀⠀⠀⢀⡀⠀⠀⠘⠁⠙⠀⠀⠁⠀⠀⠀⠀⠀⢀⠀⢤⠘⡆⠸⣄⢳⠀⣇⣹⣶⣿⣧⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣰⣿⠃⠰⠃⠚⠀⠈⠁⠽⠄⠀⠀⠉⠙⠒⠦⠤⣄⣀⣀⣀⣀⣀⣀⣀⢀⣘⣂⣘⣃⣷⣤⣽⡾⠿⠟⠛⣉⢈⠙⣿⣧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢀⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠀⠀⠀⠀⠀⠀⠈⣍⣉⢉⠉⠛⠛⠛⠛⠋⠉⠉⠉⠀⠀⠀⠀⠀⠹⡌⠂⠁⢻⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢸⣿⠀⢷⣆⡀⠀⠀⠀⠀⠀⠀⠀⠀⠉⢠⠀⠀⠀⠀⠀⠀⠈⠛⠎⠃⠀⠀⠀⠀⢠⠀⣄⠀⡦⠀⢰⠀⠀⡀⢀⠰⡶⡄⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠸⣿⡀⠘⢸⢹⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠄⠀⠀⠀⠀⢠⡀⣤⢰⡆⣸⠀⣿⠀⠷⠀⠈⡀⣌⢿⠈⡇⠇⠁⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠻⣷⡄⠘⠼⢸⠁⡇⢰⠀⡄⠀⠀⠀⡴⠀⠀⠰⠃⠀⠀⠀⠀⠀⠀⠟⠓⠺⠃⢙⠀⢁⡀⣤⢇⠀⢣⢸⡸⡆⠟⢀⣼⡿⠁⡴⠀⣄⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢀⣠⣿⣿⣄⠀⡄⣤⡀⠈⡄⢀⡀⠀⠀⠃⠸⠰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⡇⠘⠂⠛⠸⠄⠘⠋⠁⣠⣤⣾⠟⢡⠞⢁⡴⠋⢰⡄⠀⠀⠀
⠀⠀⠀⠶⣫⠵⠋⣩⢿⣷⣝⣁⡇⢀⠇⢸⠀⡆⢠⡀⢰⠀⡀⠀⠀⠀⢠⡀⡄⣦⠠⡄⠒⠒⠀⠀⠀⠀⠀⢀⣠⣤⣶⡿⢟⡿⢁⡴⠋⣠⠞⠁⣠⠞⠁⠀⠀⠀
⠀⠀⠐⣋⣡⠖⠋⠁⣠⠼⠛⠿⢿⣶⣶⣬⣄⣃⣈⣀⣈⣀⠀⠀⠀⠀⠀⢀⣈⣙⣀⣀⣀⣤⣤⣶⣶⣾⠿⠿⢛⡿⠁⡴⠋⣠⠎⢀⡾⠃⢀⣴⠃⠀⠴⠀⠀⠀
⠀⠀⠰⠋⠀⢠⠴⠋⠁⠀⣀⡴⠋⠁⣨⠟⠉⣻⠿⠛⣻⠟⠛⣿⠿⠟⢻⠟⠛⢛⡿⠛⣻⠟⠉⠀⣰⠃⢀⡼⠋⠀⠘⠁⠼⠃⠠⠏⠀⠀⠘⠁⠀⠀⠀
          ''')
    print("You lose, because you didn't play a Hand")

print("Computer Chose:")

if cpuHand == 0:
    print('''
    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)
          ''')
    if plyHand == 0:
        print('''
        ,;;;;;,
       ,;;;;;;;;,
       ;;;'____ ;
       ;;;( |||\;
       `/'((|||||
    ___<  C))||||
  ,'    \__(((||),
  |    \  _)))))))\,_
 /|    |/"\`\`""""' |)
;  \    \  ) \_____/_|
|  |\    \     _.,-' |
|  ' \    \.,-'   _./ |
(  _,-\      _.-''  |  ;
 "'|___\__.-'       ;  )
    |----|   _.--,;'   ;
   ,'  , | (     __.,-'
   | ,' ,'  `""''   `.
   |    ;            )
   `,   (            )
    |   (           ,'
    |   |           (
    |   |           |
    |   |           |
    |   |___________|
    |   |      |    |
              ''')
        print("It's a Draw")
    elif plyHand == 1:
        print('''

            '._==_==_=_.'
            .-\:      /-.
           | (|:.     |) |
            '-|:.     |-'
              \::.    /
               '::. .'
                 ) (
               _.' '._
              `"""""""`
              ''')
        print("You Win!!")
    else:
        print('''
       _  __________=__
        \ @([____]_____()
       _/\|-[____]
      /     /(( )
     /____|'----'
     \____/  
              ''')
        print("You Lose!!")
elif cpuHand == 1:
    print('''
     _______
---'    ____)____
           ______)
          _______)
         _______)
---.__________)
          ''')
    if plyHand == 0:
        print('''
       _  __________=__
        \ @([____]_____()
       _/\|-[____]
      /     /(( )
     /____|'----'
     \____/  
              ''')
        print("You Lose!!")
    elif plyHand == 1:
        print('''
        ,;;;;;,
       ,;;;;;;;;,
       ;;;'____ ;
       ;;;( |||\;
       `/'((|||||
    ___<  C))||||
  ,'    \__(((||),
  |    \  _)))))))\,_
 /|    |/"\`\`""""' |)
;  \    \  ) \_____/_|
|  |\    \     _.,-' |
|  ' \    \.,-'   _./ |
(  _,-\      _.-''  |  ;
 "'|___\__.-'       ;  )
    |----|   _.--,;'   ;
   ,'  , | (     __.,-'
   | ,' ,'  `""''   `.
   |    ;            )
   `,   (            )
    |   (           ,'
    |   |           (
    |   |           |
    |   |           |
    |   |___________|
    |   |      |    |
              ''')
        print("It's a Draw")
    else:
        print('''

            '._==_==_=_.'
            .-\:      /-.
           | (|:.     |) |
            '-|:.     |-'
              \::.    /
               '::. .'
                 ) (
               _.' '._
              `"""""""`
              ''')
        print("You Win!!")
elif cpuHand == 2:
    print('''
    _______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)
          ''')
    if plyHand == 0:
        print('''

            '._==_==_=_.'
            .-\:      /-.
           | (|:.     |) |
            '-|:.     |-'
              \::.    /
               '::. .'
                 ) (
               _.' '._
              `"""""""`
              ''')
        print("You Win!!")
    elif plyHand == 1:
        print('''
       _  __________=__
        \ @([____]_____()
       _/\|-[____]
      /     /(( )
     /____|'----'
     \____/  
''')
        print("You Lose!!")
    elif plyHand == 2:
        print('''
        ,;;;;;,
       ,;;;;;;;;,
       ;;;'____ ;
       ;;;( |||\;
       `/'((|||||
    ___<  C))||||
  ,'    \__(((||),
  |    \  _)))))))\,_
 /|    |/"\`\`""""' |)
;  \    \  ) \_____/_|
|  |\    \     _.,-' |
|  ' \    \.,-'   _./ |
(  _,-\      _.-''  |  ;
 "'|___\__.-'       ;  )
    |----|   _.--,;'   ;
   ,'  , | (     __.,-'
   | ,' ,'  `""''   `.
   |    ;            )
   `,   (            )
    |   (           ,'
    |   |           (
    |   |           |
    |   |           |
    |   |___________|
    |   |      |    |
              ''')
        print("It's a Draw")


