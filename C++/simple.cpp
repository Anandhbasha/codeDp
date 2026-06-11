#include <iostream>
using namespace std;

class Loan{
    public:
    void applyloand(){
        checkcredit();
        checkDocument();
        cout<<"Loan applied successfully"<<endl;
    }
    private:
    void checkcredit(){
        cout<<"Credit checked successfully"<<endl;
    }
    void checkDocument(){
        cout<<"Verifying documents successfully"<<endl;
    }
};

int main(){
    Loan l;
    l.applyloand();
    return 0;
}