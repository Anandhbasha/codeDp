import java.io.FileWriter;
public class fileHandling {
    public static void main(String[] args){
        try{
            FileWriter fw = new FileWriter("newdocs.txt");
            fw.write("Today is Java last Class of Basic");
            fw.close();
            System.out.println("data Inserted Scucessfully");
        }catch(Exception e){
            System.out.println(e);
        }
    }
}
