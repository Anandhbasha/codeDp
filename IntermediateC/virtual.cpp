#include <iostream>
using namespace std;

class Animal{
    public:
        virtual void Sound(){
            cout<<"Animal Sounds"<< endl;
        }
};
class Dog: public Animal{
    public:
        void Sound(){
            cout << "Dog Barking";
        }
};
int main(){
    Animal *a;
    Dog d;
    a = &d;
    a->Sound();
}