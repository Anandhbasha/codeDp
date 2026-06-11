#include <iostream>
using namespace std;
#include <string>
class Father{
    protected:
    string property = "House";
};
class Son: public Father{
    public:
    void displayPropeerty(){
                cout << "This is my property: " << property << endl;
    }
};
int main(){
    Son s1;
    s1.displayPropeerty();
}