#include <stdio.h>
#include <stdlib.h>
int main(){
    int *p;
    p = (int *)malloc(5*sizeof(int));
    for(int i=0;i<5;i++){
        p[i] = i+1;
    }
    p = (int *)realloc(p,8*sizeof(int));
    for(int i =5;i<8;i++){
        p[i] = i+1;
    }
    // 5->2 connection no more
    printf("Array:\n");
    for(int i=0;i<8;i++){
        printf("%d",p[i]);
    }
    free(p);
}

// 5->8