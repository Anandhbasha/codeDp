#include <iostream>
#include<memory>
using namespace std;

int main(){
    unique_ptr<int> p = make_unique<int>(50);
    cout<<*p;
}

// int a-> memory create ->wont remove

// /unique_ptr=> automatically create memory and delete memory