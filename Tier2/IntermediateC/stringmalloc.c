#include <stdio.h>
#include<stdlib.h>
int main(){
    char *name;
    name = (char *) malloc(20*sizeof(char));
    printf("Enter the name:");
    // scanf("%19s",name);
    fgets(name,20,stdin);
    printf("Name is:%s",name);
    free(name);
}