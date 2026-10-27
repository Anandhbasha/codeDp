#include <iostream>
#include <thread>
using namespace std;

void display(){
    for(int i=0;i<=5;i++){
        cout<<"Hello " <<i << endl;
    }
}

int main(){
    thread t(display) ;
    t.join();
    cout << "Main Thread";
}