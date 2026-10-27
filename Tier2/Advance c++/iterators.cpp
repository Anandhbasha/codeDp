#include <iostream>
#include <vector>
using namespace std;
int main(){
    vector <int> v = {10,2,30};
    vector <int>::iterator it;
    for(it = v.begin();it!=v.end();it++){
        cout<<*it<<" ";
    }
}