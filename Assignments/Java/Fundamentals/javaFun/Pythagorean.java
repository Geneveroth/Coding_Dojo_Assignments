public class Pythagorean{//create a new class called Pythagorean
    public double calculateHypotenuse(int legA, int legB) {//creating a new function that will return a double and takes 2 ints as args
        return Math.sqrt(Math.pow(legA,2)+Math.pow(legB,2));//return the actual logic answer
    }
}