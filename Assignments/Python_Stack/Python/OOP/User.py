#Create a file with the User class, including the __init__ and make_deposit methods
#  Add a make_withdrawal method to the User class
#  Add a display_user_balance method to the User class
#  Create 3 instances of the User class
#  Have the first user make 3 deposits and 1 withdrawal and then display their balance
#  Have the second user make 2 deposits and 2 withdrawals and then display their balance
#  Have the third user make 1 deposits and 3 withdrawals and then display their balance
#  BONUS: Add a transfer_money method; have the first user transfer money to the third user and then print both users' balances

class User:
    def __init__(self , name , balance):
        self.name = name
        self.balance = balance
#use this to make a deposit
    def make_deposit(self, deposit):
        self.balance = self.balance + deposit
#use this to decrease balance
    def make_withdrawal(self, withdraw):
        self.balance = self.balance - withdraw
#use this to display balance
    def display_user_balance(self):
        print(self.balance)
#use this to transfer balance
    def transfer_balance(self,transfer):
        self.balance = self.balance + transfer
jorge = User("Jorge Hernandez", 300.00)
sam = User("Sam Black", 400.00)
marty = User("Marty Chavez", 500.00)

jorge.make_deposit(100)
jorge.make_deposit(100)
jorge.make_deposit(100)
jorge.make_withdrawal(100)
print(jorge.display_user_balance())

sam.make_deposit(100)
sam.make_deposit(100)
sam.make_withdrawal(100)
sam.make_withdrawal(300)
print(sam.display_user_balance())

marty.make_deposit(100)
marty.make_withdrawal(100)
marty.make_withdrawal(100)
marty.make_withdrawal(100)
print(marty.display_user_balance())