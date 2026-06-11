//if
//syntax
// if(){
    // code
// }
#include<stdio.h>
int main(){
    int day;
    printf("The the day to take Leave:");
    scanf("%d",&day);
    switch(day){
        case 0:
            printf("The Day is Sunday");
            break;
        case 1:
            printf("The Day is Monday");
            break;
        case 2:
            printf("The Day is Tuesday");
            break;
        case 3:
            printf("The Day is Wednesday");
            break;
        case 4:
            printf("The Day is Thursday");
            break;
        case 5:
            printf("The Day is Friday");
            break;
        default:
            printf("The Day is Saturday");
    }
    return 0;
}
//if else
//else if
// nested if
// switch