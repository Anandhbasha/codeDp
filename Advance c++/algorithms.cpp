#include<iostream>
#include<algorithm>
using namespace std;

int main(){
    // int a[] = {5,2,1,3};
    // sort(a,a+4);
    // // sort(start,end)
    // // a+a+n
    // for(int i:a){
    //     cout << i<<" ";
    // }
    char ch[] = {'a','e','h','b'};
    sort(ch,ch+4);
    for(int i= 0;i<4;i++){
        cout<<ch[i]<<" ";
    }
}

// 5->1000
// 2->1004
// 1->1008
// 3->1012