class teachs{
    String name;
    teachs(String name){
        this.name = name;
    }
}
class Department{
    teachs te;
    Department(teachs te){
        this.te = te;
    }    
    void display(){
        System.out.println(te.name);
    }
}
public class Aggregation {
    public static void main(String[] args){
        teachs t1 = new teachs("Kumar");
        Department d = new Department(t1);
        d.display();
    }
}
