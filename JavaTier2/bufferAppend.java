import java.io.*;
public class bufferAppend {
    public static void main(String[] args) throws Exception{
        BufferedWriter ba = new BufferedWriter(new FileWriter("new.txt",true));
        ba.newLine();
        ba.write("This Append Method of Bw");
        ba.newLine();
        ba.write("All work are done here");
        ba.close();
    }
}
