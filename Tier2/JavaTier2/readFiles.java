import java.io.FileReader;
public class readFiles {
    public static void main(String[] args) throws Exception {
            FileReader fr = new FileReader("Student.txt");
            int ch;
            while((ch=fr.read())!=-1){
                System.out.println((char)ch);
            }
            fr.close();
    }   
}


// while((ch=fr.read())!=-1){
// fr.read()-> ASCII->65
// 65=-1->
// A
// n->110
// EOF- -> -1 (End of file)= -1