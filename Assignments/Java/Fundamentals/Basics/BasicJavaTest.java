public class BasicJavaTest{
    public static void main (String[] args){
        BasicJava basic=new BasicJava();
        basic.printTo255();

        basic.printOdd255();

        basic.printSum255();

        int[] testArr1={1,2,3,14,5,6};
        basic.printArray(testArr1);

        int [] testArr2={-3,-6,-2,-99,-4};
        basic.printMax(testArr2);

        int [] testArr3={1,2,3,4,5};
        basic.printAvg(testArr3);

        basic.arrOdd();

        int [] testArr4={1, 3, 5, 7, 0, 8};
        int num=3;
        basic.greaterThan(testArr4,num);

        int[] testArr5={1,5,10,-2};
        basic.squareVals(testArr5);

        int[] testArr6={1,5,10,-2};
        basic.elimNeg(testArr6);

        int [] testArr7={1,5,-10,-2};
        basic.minMaxAvg(testArr7);

        int [] testArr8={1,5,10,7,4,-2};
        basic.shiftArr(testArr8);
    }
}