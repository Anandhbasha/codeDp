import java.util.*;

class NewStudents{

    String Name;
    int id;
    int age;
    NewStudents(int age,int id,String Name){
        this.id = id;
        this.age= age;
        this.Name = Name;

    }
}
class AgeSort implements Comparator<NewStudents>{
    public int compare(NewStudents a,NewStudents b){
        return a.age-b.age;
    }
}
public class comparatorDemo {
    public static void main(String[] args) {
        ArrayList<NewStudents> n = new ArrayList<>();
        n.add(new NewStudents(25,101,"Just"));
        n.add(new NewStudents(20,105,"Rudra"));
        n.add(new NewStudents(23,102,"bala"));
        n.add(new NewStudents(2,104,"parveen"));

        Collections.sort(n,new AgeSort());
        System.out.println("Sort by Age");
        for(NewStudents s: n){
            System.out.println(s.age+" "+s.Name+ " " + s.id);
        }
    }
}
