import java.util.*;
public class PuzzleJava{
    public int[] puzzleOne(int [] arr){
        int sum=0;
        ArrayList<Integer> newArr =new ArrayList<Integer>();
        for(int i=0; i<arr.length; i++){
            sum+=arr[i];
            if(arr[i]>10){
                newArr.add(arr[i]);
            }
        }
        System.out.println(sum);
        int[] output=new int[newArr.size()];//size counts array lists. making array of int primitives named output with length = size of arraylist
        for(int i=0; i<output.length; i++){
            output[i]=newArr.get(i).intValue();//pull value out of array list, make sure its an int, put it into output at correct location
        }
            System.out.println(Arrays.toString(output));//stringifies array based on method from pre-defined Arrays class. just for printing to console
            return output;
    }
    public String[] puzzleTwo(String[] arr){
        ArrayList<String> newArrShuffled=new ArrayList<String>();
        ArrayList<String> arrGreaterThan5=new ArrayList<String>();
        for (int i=0; i<arr.length; i++){
            newArrShuffled.add(arr[i]);
            if(arr[i].length()>5){
                arrGreaterThan5.add(arr[i]);
            }
        }
        Collections.shuffle(newArrShuffled);
        System.out.println(newArrShuffled);
        String[] output=new String[arrGreaterThan5.size()];
        for(int i=0; i<output.length; i++){
            output [i]=arrGreaterThan5.get(i);
        }
        return (output);
    }
    public void puzzleThree(){
        ArrayList<String> newArr=new ArrayList<String>();
        for(char letter='a'; letter<='z'; letter++){
            newArr.add(Character.toString(letter));
        }
        Collections.shuffle(newArr);
        String first=newArr.get(0);
        System.out.println(newArr);
        System.out.println("First letter is : "+first);
        System.out.println("Last letter is : "+newArr.get(25));
        if("aeiou".indexOf(first)>0){
            System.out.println("The first letter is  vowel");
        }
    }
    public int[] puzzleFour(){
        ArrayList<Integer> newArr= new ArrayList<Integer>();
        int i=0;
        int min=55;
        int max=100;
		Random r = new Random();
        while(i<10){
		    int num=r.nextInt((max - min)) + min;
            newArr.add(num);
            i++;
        }
        int[] output=new int[newArr.size()];
        for(int j=0; j<output.length; j++){
            output[j]=newArr.get(j).intValue();
        }
        return output;
	}
    public int[] puzzleFive(){
        ArrayList<Integer> newArr= new ArrayList<Integer>();
        int i=0;
        int min=55;
        int max=100;
		Random r = new Random();
        while(i<10){
		    int num=r.nextInt((max - min)) + min;
            newArr.add(num);
            i++;
        }
        int[] output=new int[newArr.size()];
        for(int j=0; j<output.length; j++){
            output[j]=newArr.get(j).intValue();
        }
        Arrays.sort(output); 
        System.out.println("The lowest value is "+ output[0]);
        System.out.println("The highest value is "+ output[output.length-1]);
        return output;
	}
    public void puzzleSix() {
        Random r = new Random();
        StringBuilder newString = new StringBuilder();
        String letters = "abcdefghijklmnopqrstuvwxyz";
        for (int i = 0; i < 5; i++) {
            newString.append(letters.charAt(r.nextInt(letters.length())));
        }
        String randString = newString.toString();
        System.out.println(randString);
    }
    public void puzzleSeven() {
        ArrayList<String> newArr = new ArrayList<String>();
        Random rand = new Random();
        StringBuilder randString = new StringBuilder();
        String alpha = "abcdefghijklmnopqrstuvwxyz";
        for (int i = 0; i < 10; i++) {
            for (int j = 0; j < 5; j++) {
                randString.append(alpha.charAt(rand.nextInt(alpha.length())));
            }
            String finalString = randString.toString();
            newArr.add(finalString);
            randString.setLength(0);
        }
        System.out.println(newArr);
    }
}