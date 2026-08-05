import java.io.*;
public class displayFile {
    public static void main(String[] args) {
        File f = new File("new.txt");
        if(f.exists()){
            System.out.println("File Name is:"+ f.getName());
            System.out.println("File Path is:"+ f.getAbsolutePath());
            System.out.println("File Readble:"+ f.canRead());
            System.out.println("File Writeable:"+ f.canWrite());
            System.out.println("File Size:"+ f.length());
        }
    }
}
