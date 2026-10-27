import java.io.*;
public class bufferfiles {
    public static void main(String[] args) throws Exception {
        BufferedWriter bw = new BufferedWriter(new FileWriter("new.txt"));
        bw.write("Hello Welcome");
        bw.newLine();
        bw.write("This Buffer Method");
        bw.close();
        System.out.println("Data Written Sucessfully");
    }
}



// without buffer -> File->Hard Disk -> Hard Disk
// Withbuffer - > Ram (Buffer) -> Hard disk