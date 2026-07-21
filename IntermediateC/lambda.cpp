#include <iostream>
using namespace std;
auto add = [](int a,int b){
        return a+b;
    };
int main(){
    
    cout<<add(10,20);
}