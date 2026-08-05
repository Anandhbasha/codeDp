import java.io.*;
public class copyBuff {
    public static void main(String [] args) throws Exception{
        BufferedReader br = new BufferedReader(new FileReader("data.txt"));
        BufferedWriter bw = new BufferedWriter(new FileWriter("copy.txt"));
        String line;
        while((line=br.readLine())!=null){
            bw.write(line);
            bw.newLine();
        }
        br.close();
        bw.close();
        System.out.println("File Copied Succeasfully");
    }
}
