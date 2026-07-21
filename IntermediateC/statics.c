#include <stdio.h>

void test(){
    static int a =0;
    a++;
    printf("The a value is:%d",a);
}
int main(){
    test();
    test();
    test();
    test();
    test();
    test();
}