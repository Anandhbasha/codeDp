import java.io.*;

public class BufferRead {
    public static void main(String[] args)throws Exception {
        BufferedReader br = new BufferedReader(new FileReader("new.txt"));
        String line;
        while ((line=br.readLine())!=null) {
            System.out.println(line);
        }
        br.close();
    }
}
