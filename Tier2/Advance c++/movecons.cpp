// Transfer ownership instead of copying

#include <iostream>
using namespace std;

class Tier2{
    public:
        int *ptr;
        Tier2 (int x){
            ptr = new int(x);
        }
        // new int -> allocates memory only
        // new int (10)-> allocates memory and initilization with 10
        Tier2(Tier2 &&time){
            ptr = time.ptr;
            time.ptr = nullptr;
        }
};

int main(){
    Tier2 t1(4);
    Tier2 t2(move(t1));
    cout <<*t2.ptr;
}