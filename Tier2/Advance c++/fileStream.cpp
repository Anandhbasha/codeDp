#include<iostream>
#include<fstream>
using namespace std;
// file streaming write
int main(){
    ofstream file("data.txt");
    file<<"Hello C++";
    file.close();
}