import math
class BankAccount:
    def __init__(self, name, int_rate, balance=0): 
        self.name=name
        self.int_rate = int_rate
        self.balance = balance
    
    def deposit(self, amount):
        self.balance+=amount
        return self

    def withdraw(self, amount):
        if self.balance<=0:
            print("Insufficient funds: Charging $5 fee.")
            self.balance-5
        else:
            self.balance-=amount
        return self

    def display_account_info(self):
        print((self.name),"has a balance of ", round(self.balance*self.int_rate,2))
        
        return self

    def yield_interest(self):
        if self.balance>0:
            self.int_rate=1+(self.int_rate/100)
            print(f"Interest Accrued: ",round(((self.balance*self.int_rate)-self.balance),2))
        else:
            print("Balance too low to accrue interest.")
        return self


account_1 = BankAccount("Sam", .1, 100)
account_2 = BankAccount("Bob", .2, 200)

account_1.deposit(50).deposit(50).deposit(50).withdraw(100).yield_interest().display_account_info()
account_2.deposit(100).deposit(50).withdraw(150).withdraw(400).yield_interest().display_account_info()
