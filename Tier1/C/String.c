#include <stdio.h>
#include <string.h>
int main(){
    // Declare userName,password
    char userName [20];
    char Password [20];
    // Declare correctuserName,correctPassword
    char correct_user = "admin";
    char correct_Password = "1234";
    //correctuserName="admin"
    // correctPassword = "1234"
    // input username
    printf("Enter the userName:");
    scanf("%s",userName);
    // input password
    printf("Enter the Password:");
    scanf("%s",Password);
    // if password length <8    
     // length is below 8
    if(strlen(Password)<8){
        printf("Password must be at least 8 char");
    }else{
        if(strcmp(userName,correct_user)==0 && strcmp(Password,correct_Password)==0){
            printf("Login succesfully");
        }
        else{
            printf("Invalid user");
        }
    }
       
    // else
        //if
            //  userName=correctuserName
            //Password =correctPassword
            //login succesfully
        // else
        // invalid user



    return 0;

}