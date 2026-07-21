#include <iostream>
using namespace std;

class Student{
    private:
        int mark;
    public:
        Student(){
            mark = 90;
        }
    friend void display(Student);
};
void display(Student s){
    cout << "mark =" <<s.mark;
}
int main(){
    Student s;
    display(s);
}

