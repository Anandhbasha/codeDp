class calculator{
    void add(int a,int b){
        System.out.println(a+b);
    }
    void add(int a,int b,int c){
        System.out.println(a+b+c);
    }
    void add(int a,int b,int c, int d){
        System.out.println(a+b+c+d);
    }
}
public class overloading {
    public static void main(String[] args) {
        calculator calc = new calculator();
        calc.add(10,20);
        calc.add(10,20,30);
        calc.add(10,20,30,40);
    }
    
}
