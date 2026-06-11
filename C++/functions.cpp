#include <iostream>
#include <string>
using namespace std;

void prints(int a,int b){
    cout << a+b <<endl;
}
// it never return value 
// acc function name
int main(){
    prints(60,70);
    prints(70,70);
    prints(80,70);
    prints(90,70);
    prints(68,72);
}