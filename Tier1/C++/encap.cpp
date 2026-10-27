#include <iostream>
using namespace std;
#include <string>

class Mobile{
    // Create mobile blue print
    private:
    string password;
    public:
    void setPassword(string pass){
        password = pass;
    }
    void unlock(string pass){
        if(pass == password){
            cout << "Mobile Unlocked" << endl;
        }
        else{
            cout << "Wrong Password" << endl;
        }
    }
};

int main(){
    Mobile m1;
    m1.setPassword("password123");
    m1.unlock("password123");
    m1.unlock("wrongpassword");
}