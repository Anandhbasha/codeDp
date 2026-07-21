#include<iostream>
#include <thread>
using namespace std;
void task1(){
    for(int i=0;i<=5;i++){
        cout<<"Download " <<i << endl;
        this_thread::sleep_for(chrono::seconds(2));
    }
}
void task2(){
    for(int i=0;i<=5;i++){
        cout<<"Music " <<i << endl;
        this_thread::sleep_for(chrono::seconds(2));
    }
}
int main(){
    thread t1(task1);
    thread t2(task2);
    t1.join();
    t2.join();
}