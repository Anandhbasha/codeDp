interface Singing{
    void Sing();
}
interface Cricket{
    void batting();
}

class newPersons implements Singing,Cricket{
    public void Sing(){
        System.out.println("A person Sings Song");
    }
    public void batting(){
        System.out.println("A person Play Cricket nicely");
    }
}

public class multiple {
    public static void main(String[] args){
        newPersons n = new newPersons();
        n.Sing();
        n.batting();
    }
}
