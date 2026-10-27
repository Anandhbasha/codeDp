#include <stdio.h>
#include <stdlib.h>
int main(){
    int *ptr;
    ptr = (int *)calloc(5,sizeof(int));
    
    // 5*4 ->20bytes
    printf("Default Value:\n");
    for(int i=0;i<5;i++){
        printf("%d\n",ptr[i]);
    }
    free(ptr);
    int *p = (int *)malloc(5*sizeof(int));
    printf("Default Value Malloc:\n");
    for(int i=0;i<5;i++){
        printf("%d\n",p[i]);
    }
}