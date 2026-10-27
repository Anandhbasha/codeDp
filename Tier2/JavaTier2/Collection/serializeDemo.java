import java.io.*;

class Person implements Serializable{
    int id;
    String name;
    Person(int id,String name){
        this.id = id;
        this.name = name;
    }
}
public class serializeDemo {
    public static void main(String[] args) throws Exception{
        Person p = new Person(101,"Anandh");
        FileOutputStream fos = new FileOutputStream("person.ser");
        ObjectOutputStream oos = new ObjectOutputStream(fos);
        oos.writeObject(p);
        oos.close();
        System.out.println("Object Serialized");
    }
}
