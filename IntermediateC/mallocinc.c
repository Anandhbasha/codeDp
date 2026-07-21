#include <stdio.h>
#include <stdlib.h>

int main(){
    int n;
    printf("Enter number of elements");
    scanf("%d",&n);
    int *ptr = (int *)malloc(n*sizeof(int));     // pointer variable created// int * ->// n*sizeof(int)-> 5*4bytes = 20    
    if(ptr==NULL){
        printf("Memory allocation Failed");
        return 1;
    }
    printf("Enter the numbers:\n",n);
    for(int i=0;i<n;i++){
        scanf("%d",&ptr[i]);
    }
    printf("Numbers is\n");

    for(int i=0;i<n;i++){
        printf("%p\n",&ptr[i]);
    }
    free(ptr);
}


// 5-> ptr[0]-? ptr[1]-? ptr[2]-? ptr[3]-?