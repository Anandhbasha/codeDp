#include<iostream>
#include<fstream>
using namespace std;
int main(){
    ifstream file("data.txt");
    string s;
    getline(file,s);
    cout<<s;
}