// #include <stdio.h>
// int main(){
//     FILE *fp;
//     char ch[100];
//     fp = fopen("new.txt","w");
//     fgets(ch,sizeof(ch),stdin);
//     fputs(ch,fp);
//     printf("data added Succesfully");
// }


#include <stdio.h> 
#include <stdlib.h> 
int main(){ 
    char *pe; 
    pe=(char*)malloc(20*sizeof(char)); 
    printf("enter the name"); 
    fgets(pe,20,stdin); 
    printf("the name is %s",pe); 
    free(pe); 
}

