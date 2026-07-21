// #include <iostream>
// using namespace std;

// class Student{
//     public:
//     string name;
//     Student(string n){
//         name = n;
//     }
//     Student(Student &s){
//         name = s.name;
//     }
// };

// int main(){
//     Student s1("Arul");
//     Student s2 =s1;
//     cout << s2.name;
//     cout << s1.name;
// }


#include<iostream>
using namespace std;
class Mark{
    public:
    int marks;
    Mark(int mx){
        marks = mx;
        // marks = 90
    }
    Mark (const Mark &m){
        // m.marks = 0; //value reassign
        marks = m.marks;
        // 90
    }
};
int main(){
    Mark m1(90);
    Mark m2 = m1;
    cout<<m2.marks;
}