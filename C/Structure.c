#include <stdio.h>
struct  Student{
    char name[20];
    int age;
    float mark;
};
int main(){
    struct Student s[5];
    for(int i=0;i<5;i++){
        // i need to get 2 student information
        printf("Enter the name:");
        scanf("%s",s[i].name);
        printf("Enter the age:");
        scanf("%d",&s[i].age);
        printf("Enter the Mark:");
        scanf("%f",&s[i].mark);
    }
    for(int i=0;i<5;i++){
        printf("%s - %d - %.2f\n",s[i].name,s[i].age,s[i].mark);
    }

    return 0;
    
}
