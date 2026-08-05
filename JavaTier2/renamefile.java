import java.io.*;
public class renamefile {
    public static void main(String[] args) {
        File of = new File("new.txt");
        File nf = new File("data.txt");

        if(of.renameTo(nf)){
            System.out.println("File is Renamed");
        }
        else{
            System.out.println("Rename Failed");
        }
    }
}
