public class StringManipulatorTest{
    public static void main (String[] args){
        StringManipulator manipulator = new StringManipulator();
        String str = manipulator.trimAndConcat("    Hello     ","     World    ");
        System.out.println(str); // HelloWorld 
        
        Integer a = manipulator.getIndexOrNull("Coding", "o");
        System.out.println(a); // 1
    
        Integer ax = manipulator.getIndexOrNull("hello", "llo");
        System.out.println(ax); // 2
        
        String newWord = manipulator.concatSubstring("Hello", 1, 2, "world");
        System.out.println(newWord); // eworld
     }
}