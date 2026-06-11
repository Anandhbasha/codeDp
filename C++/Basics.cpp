#include <iostream>
// #include <string>
// this header file used to input output stream
using namespace std;

int main(){
    int age;

    cout << "Enter the Age:";
    cin >>age;
    if (age>=18){
        cout<<"He is Eligible to vote";
    }else{
        cout<< "He is not Eligible to vote";
    }

}
