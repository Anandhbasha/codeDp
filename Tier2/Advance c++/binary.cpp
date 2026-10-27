#include<iostream>
#include <fstream>
using namespace std;

class Student{
    public:
        int id;
};

int main(){
    Student s = {101};
    ofstream file("data.dat",ios::binary);
    file.write((char*)&s,sizeof(s));
    // char datatye *&s->1byte
}