import java.util.*;
class Students implements Comparable<Students>{
    int id;
    String name;
    Students(int id,String name){
        this.id = id;
        this.name =  name;
    }
    public int compareTo(Students s){
        return this.id - s.id;
    }
    // compateTo -> it will sort method ->
}
public class comparableDemo {
    public static void main(String[] args){
        ArrayList<Students> n = new ArrayList<>();
        n.add(new Students(103,"Just"));
        n.add(new Students(102,"Rudra"));
        n.add(new Students(101,"Vicky"));
        n.add(new Students(106,"Manoj"));

        Collections.sort(n);
        System.out.println("Sort by Id");

        for(Students s : n){
            System.out.println(s.id+" "+s.name);
        }
    }
}


// sorting
// comparable ->Default sorting->Single sorting

// 101 - 103-> -2

// comparator -> multiple sorting