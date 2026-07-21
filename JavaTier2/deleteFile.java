import java.io.File;
public class deleteFile {
    public static void main(String[] args) {
        File f =new File("student.txt");
        if(f.delete()){
            System.out.println("File is Deleted");
        }
        else{
            System.out.println("Not found");
        }
    }
}
