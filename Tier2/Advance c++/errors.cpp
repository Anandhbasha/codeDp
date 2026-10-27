#include <iostream>
using namespace std;

int main(){
    int a,b;
    cout<< "Enter the number:";
    cin >>a >>b;
    try{
        if(b==0){
            throw b;
        }
        cout << "Ans:" <<a/b;
    }
    catch(int){
        cout << "Cannot devide by zero";  
    }
}