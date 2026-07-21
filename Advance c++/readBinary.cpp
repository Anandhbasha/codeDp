#include<iostream>
#include <fstream>
using namespace std;

class Student{
    public:
        int id;
};

int main(){
    Student s ;
    ifstream file("data.dat",ios::binary);
    file.read((char*)&s,sizeof(s));
    cout <<s.id;
}