#include <stdio.h>
int main(){
    int arr[] = {10,20,30,4,50,60};
    int *p = arr+5;
    // arr+5 = 60
    for(int i=0;i<5;i++){
        printf("%d\n",*p);
        // 60
        // 50
        // 4
        // 30
        *p--;
    }
}