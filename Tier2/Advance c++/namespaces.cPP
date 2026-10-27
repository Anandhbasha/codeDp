#include <iostream>
using namespace std;

namespace institute{
    string name = "CodeDp";
}
namespace students{
    string name = "Arun";
}

using namespace students;
int main(){
    cout << institute::name<< endl;
    // cout << students::name<< endl;
    // :: Scope resolution operator
    cout << name;
}