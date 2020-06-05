public class PythagoreanTest{//create new class PythagoreanTest
    public static void main (String[] args){//create a main method
        Pythagorean test=new Pythagorean();//im creating a new instance of the Pythagorean class and naming it test
        double answer=test.calculateHypotenuse(2,4);//creating a new double variable called answer and setting it equal to the result of calling the calculateHypotenuse method (from the Pythagorean class) on the new instance of Pythagorean that we named test
        System.out.println(answer); //print out the result
    }
} 