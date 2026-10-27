class Person{
    void Speak(){
        System.out.println("Person is Speaking");
    }
}
class Teachers extends Person{
    void teach(){
        System.out.println("Teaching Students");
    }
}
class MathsTeacher extends Teachers{
    void mathsTeach(){
        System.out.println("Teaching for Students in maths ");
    }
}
class ScienceTeacher extends Teachers{
        void scienceTeach(){
        System.out.println("Teaching for Students in Science ");
    }
}
public class Hybrid {
    public static void main(String[] args) {
        
    }
}
