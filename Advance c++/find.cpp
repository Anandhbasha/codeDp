#include<iostream>
#include<algorithm>
using namespace std;
int main(){
    int arr[] = {10,8,7,4,6};
    // auto ->
    auto it = find(arr,arr+5,11);
    // int *it = find(arr,arr+5,11)
    // int 
    // 0:5,11->0,1,2,3,4
    if(it!=arr+5){
        cout << "Found";
    }
}