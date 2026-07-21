#include <stdio.h>
int main(){
    char name [] =  "Arjun";
    // name[0] ='A'
    // name[1] ='r'
    // name[2] ='j'
    // name[3] ='u'
    // name[4] ='n'
    // name[5] ='\0'->null character
    // scanf-> Arjun\0Sara
    // fgets
    char *p = name;
    while(*p!='\0'){
        printf("%c\n",*p);
        *p++;
    }
}