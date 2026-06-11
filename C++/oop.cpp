#include <iostream>
#include <string>
using namespace std;


class Car{
    public:
    string carName = "Dzire";
    string carColor = "red";
    int noofWheels = 4;
    int Milage = 30;

    void acc(){
        cout <<"Car Moves"<<endl;
    }
    void breaks(){
        cout <<"Car Stops"<<endl;
    }
};
int main(){
    Car c1;
    cout <<c1.carName<<endl;
    cout << c1.carColor <<endl;
    cout <<c1.noofWheels <<endl;
    cout <<c1.Milage <<endl;
    c1.acc();
    c1.breaks();
    c1.carColor ="Silver";
    c1.Milage = 25;
    cout <<c1.Milage <<endl;
    cout << c1.carColor <<endl;
    Car c2;
    c2.carColor ="Black";
    c2.Milage = 35;
    cout <<c2.Milage <<endl;
    cout << c2.carColor <<endl;
    cout << c2.carName <<endl;

}