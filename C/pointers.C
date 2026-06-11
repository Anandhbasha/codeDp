#include <stdio.h>
#include <stdlib.h>
int main(){
    // Declare the Pointer variable 
    int *ptr;
    //allocate memory for 5 integers useing malloc
    ptr = (int*) malloc(5*sizeof(int));
    // 
    //malloc  run time memory create
    ptr[0] = 10;
    ptr[1] = 20;
    printf("%p",*ptr);
    return 0;
    
}

// x=10
// address of variable =110

// *p = &x
// & -> address of the variable
// * value store the address