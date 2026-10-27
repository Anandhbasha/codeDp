#include<iostream>
#include<set>
using namespace std;

int main(){
    set<int> s = {30,30,20,40,50,60,10,20};
    for(int x:s)
        cout<<x<<" ";
}