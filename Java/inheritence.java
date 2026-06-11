class Teacher{
    String subject = "CS";
    void teach(){
        System.out.println("The are Teaching Student");
    }
}
class CsTeacher extends Teacher{
    void cs(){
        System.out.println("Teaching Maths");
    }
}
public class inheritence {
    public static void main(String[] args){
        CsTeacher t = new CsTeacher();
        t.subject = "Maths";
        t.cs();
        t.teach();
    }
    // single inheritence    
    // Multilevel inheritence
    // Hyarachical inheritence
    // Hybrid inheritence
    // multiple inhertence
    


}
