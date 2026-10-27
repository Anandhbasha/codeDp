import java.io.FileWriter;
public class fileWrites {
    public static void main(String[] args) {
       try{
            FileWriter fw = new FileWriter("Student.txt");
            fw.write("Anandhakumar\n");
            fw.write("Age:33");
            fw.close();
            System.out.println("Data Added sucessfully");
       }catch(Exception e){
            System.out.println(e);
       }
    }
}
