import java.util.ArrayList;
public class BasicJava{
    public void printTo255(){
        for(int i=0; i<256; i++){
            System.out.println(i);
        }
    }    
    public void printOdd255(){
        for (int i=0; i<256; i++){
            if (i%2==0){
                i++;
            }
            System.out.println(i);
        }
    }
    public void printSum255(){
        int result=0;
        for(int i=0; i<256; i++){
            result+=i;
            System.out.println(result);
        }
    }
    public void printArray(int[] array){
        for(int i=0; i<array.length; i++){
            System.out.println(array[i]);
        }
    }
    public void printMax(int [] array){
        int max=0;
        for(int i=0; i<array.length; i++){
            if(array[i]<0){
                if(max==0 || array[i]>max){
                    max=array[i];
                }
            }
            else if(array[i]>max){
                max=array[i];
                continue;
            }
        }
        System.out.println(max);
    }
    public void printAvg(int [] arr){
        int result=0;
        for (int i=0; i<arr.length; i++){
            result+=arr[i];
            }
        int avg=result/arr.length;
        System.out.println(avg);
        }
    public void arrOdd(){
        ArrayList<Integer> newArr = new ArrayList<Integer>();
        for(int i = 1; i <= 255; i+=2){
            newArr.add(i);
        }
        System.out.println(newArr);
    }
    public void greaterThan(int [] arr, int num){
        int counter=0;
        for(int i=0; i<arr.length; i++){
            if (arr[i]>num){
                counter++;
            }
        }
        System.out.println(counter);
    }
    public void squareVals(int [] arr){
        ArrayList<Integer> newArr=new ArrayList<Integer>();
        for(int i=0; i<arr.length; i++){
            newArr.add(arr[i]*arr[i]);
        }
        System.out.println(newArr);
    }
    public void elimNeg(int [] arr){
        ArrayList<Integer> newArr=new ArrayList<Integer>();
        for(int i=0; i<arr.length; i++){
            if(arr[i]<0){
                newArr.add(0);
            }
            else newArr.add(arr[i]);
        }
        System.out.println(newArr);
    }
    public void minMaxAvg(int [] arr){
        int max=0;
        int min=0;
        int result=0;
        ArrayList<Integer> newArr = new ArrayList<Integer>();
        for(int i=0; i<arr.length; i++){
            result+=arr[i];
             if(arr[i]>max){
                max=arr[i];
                continue;
            }
            else if (arr[i]<min){
                min=arr[i];
                continue;
            }
        } 
            newArr.add(max);
            newArr.add(min);
            int avg=result/arr.length;
            newArr.add(avg);
            System.out.println(newArr);
    }
    public void shiftArr(int [] arr){
        ArrayList<Integer> newArr= new ArrayList<Integer>();
        for(int i=0; i<arr.length-1;i++){
            if(i<arr.length){
                newArr.add(arr[i+1]);
            }
        }
        newArr.add(0);
        System.out.println(newArr);
    }
}