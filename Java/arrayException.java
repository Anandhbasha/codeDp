public class arrayException {
    public static void main(String[] args){
        try{
            int arr[] = {10,20,30,40};
            System.out.println(arr[5]);
        }catch(ArrayIndexOutOfBoundsException e){
            System.out.println("Invalid Index");
        }
        System.out.println("Array Executed");
    }
}
