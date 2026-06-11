#include <stdio.h>
// void greet(){
//     printf("Hello GoodEve Everyone\n");
// }

// int main(){
//     greet();
//     greet();
//     greet();
//     greet();
//     greet();
//     return 0;
// }

int add(int a,int b){
    return a+b;
}
int main(){
    int res;
   res = add(51,55);
   printf("Sum = %d",res);
    return 0;
}