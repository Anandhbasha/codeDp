#include <stdio.h>
int main(){
    int arr [] = {20,40,60,80};
    int *a = arr;
    // *a = 20
    printf("The array value is:%d\n",*a);
    printf("The First Index memory is:%p\n",a);
    printf("The First Index memory is:%p\n",&arr[0]);
    *a++;
    printf("The array value is:%d\n",*a);
    printf("The First Index memory is:%p\n",a);
    printf("The First Index memory is:%p",&arr[1]);
    // int arr[4][5]={{3,45,6,67,4},{53,5313,234,644,32}}; 
    // for(int x=0;x<2;x++){ 
    //     for(int y=0;y<5;y++){ 
    //         printf("%d",arr[x][y]);
    //     } 
    // }
}


