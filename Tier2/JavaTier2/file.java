import java.io.File;
// import java.io.IOException;

// public class file{
//     public static void main(String[] args) throws IOException {
//         File f = new File("student.txt");
//         if(f.createNewFile()){
//             System.out.println("File Created");
//         }else{
//             System.out.println("Already exists");
//         }
//     }   
// }


public class file{
    public static void main(String[] args)  {
        try{
            File f = new File("student.txt");
        if(f.createNewFile()){
            System.out.println("File Created");
        }else{
            System.out.println("Already exists");
        }
        }catch(Exception e){
            System.out.println(e);
        }
    }   
}