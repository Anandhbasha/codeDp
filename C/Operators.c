// // Arithmetic
// // +,-,*,/,%
// #include <stdio.h>

// // int main(){
// //     int a = 10;
// //     int b=5;
// //     printf("Addtion = %d\n",a+b); //Addtion = 15
// //     printf("Substraction = %d\n",a-b); //Substraction = 5
// //     printf("Multiplication = %d\n",a*b);//Multiplication = 50
// //     printf("Division = %d\n",a/b); //Division = 2
// //     printf("modulus = %d\n",a%b); // modulus =0
// //     return 0; 
// // }
// // comparison or relational 
// // int main(){
// //     //>Greater than
// //     //< less than
// //     //>= Greater or Equal
// //     //<= less than or equal
// //     //== Equal
// //     //!= not equal
// //     int a =10;
// //     int b=5;
// //     printf("%d\n",a>b); //1
// //     printf("%d\n",a<b);//0
// //     printf("%d\n",a>=10); //1
// //     printf("%d\n",a<=10); //1
// //     printf("%d\n",a==b); //0
// //     printf("%d\n",a!=b); //1
// //     return 0;
// // }
// // logical
// // && -> And
// // #include <string.h>
// // //||->OR
// // //!
// // int main(){
// //     int age = 17;
// //     char state[] = "KL";
// //     printf("%d",age>=18 && strcmp(state,"TN")==0);

// //     // strcmp(state,"TN") -> 
// //     //"TN",TN ->0
// //     //string > string2 -> postive 1
// //     //string < string2 -> -1
// //      // true true
// //     printf("%d",age>=18 || strcmp(state,"TN")==0);
// //     // true false
// //     // true -> 1
   

// //     return 0;
// // }
// //assigment
// int main(){
//     int a = 10;
//     a+=10;
//     //a= a+10
//     printf("%d",a);
//     return 0;
// }


// //(10+2)*4/10+(6%2)*(3*3)+10-5
// //12*4/10+0*9+10-5
// //48/10+0+10-5
// //4.8+10-5
// // 9.8


// //swap two values without using third variable
// //use operator



#include <stdio.h>

int main(){
    int a = 29;
    int b=10;

    a=a+b;
    //29+10=39
    //a =39
    b=a-b;
    //39-10
    //29
    a=a-b;
    printf("a= %d\n",a);
    printf("b= %d\n",b);
    return 0;
}