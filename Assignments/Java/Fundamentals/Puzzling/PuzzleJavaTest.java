import java.util.*;
public class PuzzleJavaTest{
    public static void main (String[] args){
        PuzzleJava puzzle= new PuzzleJava();

        int[] testArr1={3,5,1,2,7,9,8,13,25,32};
        int[] testResult1= puzzle.puzzleOne(testArr1);
        System.out.println(Arrays.toString(testResult1));// this is how i would see my return value

        String[] testArr2={"Nancy", "Jinichi", "Fujibayashi", "Momochi", "Ishikawa"};
        String[] testResult2=puzzle.puzzleTwo(testArr2);
        System.out.println(Arrays.toString(testResult2));

        puzzle.puzzleThree();

        int[] testResult3=puzzle.puzzleFour();
        System.out.println(Arrays.toString(testResult3));     

        int[] testResult4=puzzle.puzzleFive();
        System.out.println(Arrays.toString(testResult4));
   
        puzzle.puzzleSix();

        puzzle.puzzleSeven();
       
   }
}