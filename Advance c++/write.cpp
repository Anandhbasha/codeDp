#include<iostream>
#include <cstdio>
using namespace std;
int main(){
    FILE *fp;
    fp = fopen("data.txt","w");
    if(fp==NULL){
        cout << "File Cannot be Opened";
    }
    cout<<fp<<"Hello C++ Programming";
    fclose(fp);
}