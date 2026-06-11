class Mythread extends Thread{
    public void run(){
        for(int i= 1;i<=5;i++){
            System.out.println(i);
            try{
                Thread.sleep(1000);
            }catch(Exception e){
                System.out.println(e);
            }
        }
    }
}

// 1,2,3,4,5
// 1,2,3,4,5

public class multitreads {
    public static void main(String[] args){
        Mythread t1 = new Mythread();
        Mythread t2 = new Mythread();
        t1.start();
        t2.start();

    }
}
