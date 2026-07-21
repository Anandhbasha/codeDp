#include <iostream>
#include <map>
using namespace std;

int main(){
    map <int,string> m;
    m[1] = "Arul";
    m[2] = "Kala";

    for(auto x:m){
        cout<< x.first<<" "<<x.second << endl;
    }
}