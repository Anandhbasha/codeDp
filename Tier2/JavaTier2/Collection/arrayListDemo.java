// Dynamic array 
// Allow duplicate
// Maintain the insertion order
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
public class arrayListDemo{
    public static void main(String[] args) {
        ArrayList <String> userNames = new ArrayList<>();
        // ArrayList <String> userNames = new ArrayList<>(List.of("Pavin","Rajan","Kavin"));
        Collections.addAll(userNames,"Pavin","Rajan","Kavin");
        userNames.add("Ranjith");
        userNames.add("Parthi");
        userNames.add("Praveen");
        System.out.println(userNames);
        userNames.remove("Pavin");
        System.out.println(userNames);
        userNames.set(0, "Tamil");
        System.out.println(userNames);
        System.out.println(userNames.get(1));
        System.out.println(userNames.size());
        System.out.println(userNames.contains("Tamils"));
        // userNames.clear();
        // System.out.println(userNames);

        for(String s:userNames){
            System.out.println(s);
        }
    }
}