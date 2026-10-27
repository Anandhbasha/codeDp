// #include<iostream>
// using namespace std;
// int add(int a,float b){
//     return a+b;
// }

// int main(){
//     cout << add(10,10.5);
// }

#include<iostream>
using namespace std;

template<typename T>
T add(T a,T b){
    return a+b;
}

int main(){
    cout<<"Integer addtion"<< add(10,20) << endl;
    cout << "Float Addtion" << add(5.5,4.28) << endl;
    cout << "Double Addition" << add(10.25,7.85) << endl;
}
