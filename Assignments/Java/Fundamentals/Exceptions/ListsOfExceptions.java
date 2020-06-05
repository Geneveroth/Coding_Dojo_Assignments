import java.util.*;
public class ListsOfExceptions {
    public static void exceptionsList() {
        ArrayList<Object> myList = new ArrayList<Object>();
        myList.add("666");
        myList.add("Black");
        myList.add(5);
        myList.add("Pizza");

        try {
            for(int i = 0; i < myList.size(); i++){
                Integer castedValue = (Integer) myList.get(i);
            } 
        } catch(ClassCastException e) {
            System.out.println("Catch Error.");
        }


    }
}
