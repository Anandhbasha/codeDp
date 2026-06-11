#include <stdio.h>

int main(){
    // ops
    // aritmetic
    // +,-,*,%,/,++,--
    int a =10;
    int b=5;
    //++a ->pre increment
    //a++ ->post increment
    printf("%d\n",a++);
    // a=11
    int sum = a+b;
    printf("%d",sum);
    // comparison
    // >,<,<=,>=,!=.==
    // logical
    // && || !
    // assigment
    // =,+=,-=,*+,%=
    // ternary operator
    int max;
    max = (a>b)?a:b;
    // condition ? :
    printf("%d",max);
    return 0;
}