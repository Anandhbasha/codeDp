import java.util.*;

public class hashMapDemo {
    public static void main(String[] args) {
    HashMap<Integer,String> students = new HashMap<>();
    students.put(101, "Kala");
    students.put(102, "Ravi");
    students.put(103, "Nilan");
    System.out.println(students);
    System.out.println(students.get(102));
    students.remove(102);
     System.out.println(students.containsKey(102));
     System.out.println(students.containsValue("Raja"));
     System.out.println(students.size());
    //  students.clear();
    System.out.println(students.keySet());
    System.out.println(students.values());
    System.out.println(students.entrySet());
    students.replace(101,"Ajay");
    System.out.println(students);
    students.putIfAbsent(101, "Bharathi");
    students.putIfAbsent(102, "Mithra");
    System.out.println(students);
    students.forEach((key,value)-> System.out.println(key+" "+value));
    students.replaceAll((k,v)->v.toUpperCase());
    System.out.println(students);
    for(Integer key : students.keySet()){
        System.out.println(key+" "+students.get(key));
    }

}
}
// key unique
// value duplicate allowed
// Fast
