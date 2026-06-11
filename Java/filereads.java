import java.io.FileReader;
public class filereads {
    public static void main(String[] args){
        try{
            FileReader fr = new FileReader("newdocs.txt");
            int ch;
            while((ch=fr.read())!=-1){
                System.out.println((char)ch);
            }
            fr.close();
        }catch (Exception e){
             System.out.println(e);
        }
    }
}
