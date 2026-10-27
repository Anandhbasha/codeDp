# # sqrt
# from math import *
# # val = int(input("Enter the value to find SQRT:"))
# # print(sqrt(val))
# # factorial
# # 5->5*4*3*2*1 = 120
# print(factorial(5))
# # pow
# print(pow(2,3))
# print(pi)
# print(e)
# # ceil
# print(ceil(5.8))
# print(ceil(5.1))
# print(ceil(5.0))
# print(ceil(-5.9))
# # floor
# print(floor(5.9))
# # gcd
# # gratest common divisor
# print(gcd(24,36))
# # 2,4,6,12
# # fabs
# print(fabs(-52))
# print(abs(-52))
# # sin
# print(sin(radians(50)))

# # height
# lad = 10
# angle =40
# height = lad*sin(radians(40))
# print(height)

# base = lad*cos(radians(40))
# print(base)

# print(radians(90))
# # cos
# # log
# print(log(11))
# print(log(8,2))
# print(log(8,e))
# # x,base
# # sample
# import random
# numbers = range(1,50)
# print(numbers)
# print(random.sample(numbers,6))

# cards = [1,2,3,4,5,6]
# random.shuffle(cards)
# print(cards)

# print(random.uniform(1,10))

# color = ["red","blue","orange","black","yellow"]
# print(random.choice(color))

# names = ["A","B","C","D","E"]
# print(random.choices(names,k=3))
# print(random.sample(names,3))


# dice = random.randint(1,6)
# print("dice:",dice)


# import random 
# ch = int(input("1.Rock\n2.Paper\n3.Sissor\nEnter your choice:")) 
# choices = ["1.Rock", "2.Paper", "3.Sissor"] 
# AIchoice = random.choice(choices) 
# print("you chooses " + choices[ch-1]) 
# print("CPU chooses " + AIchoice) 
# c = choices[ch-1] 
# if c == AIchoice: 
#     print("Draw") 
# elif c == choices[0] and AIchoice == choices[1]: 
#     print("AI Wins") 
# elif c == choices[1] and AIchoice == choices[2]: 
#     print("AI Wins") 
# elif c == choices[2] and AIchoice == choices[0]: 
#     print("AI Wins")
# else: print("You WOn")



# import random 
# options=["rock","paper","scissor"] 
# comp=random.choice(options) 
# user=input("Enter your choice : ") 
# print("comp:",comp) 
# print("use:",user) 
# if(comp == user):
#     print(" IT'S A TIE") 
# elif(user == "rock" and comp == "scissor" ) or (user == "scissor" and comp == "paper" )or(user=="paper" and comp == "scissor" ):
#     print("YOU WIN") 
# else: print("LOSER GO OUT")


# collection
import collections
# array or string

# arr = [10,10,10,20,20,30,20,30]
# text = "Programming"
# print(collections.Counter(arr))
# print(collections.Counter(text))

# votes = ["DMK","ADMK","TVK","NTK","BJP","VCK","DMK","ADMK","TVK","DMK","ADMK","TVK","TVK","TVK","TVK","TVK"]
# print(collections.Counter(votes))

# d = collections.deque([10,20,30])
# d.append(40)
# d.appendleft(5)
# print(d)
# d.pop()
# d.popleft()
# print(d)


# students = collections.defaultdict(int)
# students["Math"]+=10
# print(students)

# Stud = collections.namedtuple("Stud",["name","age"])
# s = Stud("Anandh",33)
# print(s.name)
# print(s.age)

import itertools

for i in itertools.count(10):
    print(i)
    if i==15:
        break


#cycle
options=["rock","paper","scissor"]
c = itertools.cycle(options)

for i in range(6):
    print(next(c))


for i in itertools.repeat("Python",6):
    print(i)

# permautaions
items = ["A","B","C"]
print(list(itertools.permutations(items,2)))
print(list(itertools.combinations(items,2)))

text = "ABC"
print(list(itertools.permutations(text)))


# product
print(list(itertools.product([1,2],["A","B"])))