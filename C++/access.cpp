// Access specifiers
// Private
// public
// protedted

#include <iostream>
using namespace std;

class BankAccount{
    private:
        float balance = 500;
    public:
    void showBalance(){
        cout << balance << endl;
    }
    void deposit(float amount){
        if(amount>0){
            balance+=amount;
        }else{
            cout << "Enter the correct amount ";
        }
    }
    void withdraw(float amount){
        if(balance>amount){
            balance-=amount;
        }else{
            cout << "Invalid amount ";
        }
    }
};

int main(){
    BankAccount acc1;
    acc1.showBalance();
    acc1.deposit(2000);
    acc1.withdraw(500);
    acc1.showBalance();
}