#include<iostream>
#include<fstream>
using namespace std;
int main(){
    ofstream file("data.txt",ios::app);
    file <<"\n Today is C++ Last Class";
    file.close();
    cout << "Data Append Sucessfully";
}