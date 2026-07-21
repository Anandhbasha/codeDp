#include<iostream>
#include<algorithm>
using namespace std;

int main(){
    // int a[] = {1,2,3,4};
    // reverse(a,a+4);
    // for(int i:a){
    //     cout << i<<" ";
    // }
    string name = "Santhosh";
    reverse(name.begin(),name.end());
    cout<< name;
}