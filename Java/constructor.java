class Students{
    int age;
    String name;
    Students(int x,String y){
        age = x;
        name = y;
        System.out.println("Constructor Program is running");
    }
    void display(){
        System.out.println("The Student name is:"+name+"His Age is:"+age);
    }
}
public class constructor {
    public static void main(String[] args){
        Students s1 = new Students(20,"Bala");
        s1.display();
    }
}


// scope of varaible
// local varaible
// instance
// static variable

