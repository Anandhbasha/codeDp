import java.io.File;
import java.util.Scanner;
public class readScanner {
    public static void main(String[] args) {
        try{
            File file = new File("Student.txt");
            Scanner sc = new Scanner(file);
            while(sc.hasNext()){
                System.out.println(sc.next());
            }
            sc.close();
        }catch(Exception e){
            System.out.println(e);
        }
    }
    
}
