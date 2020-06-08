
public class ProjectTest {

	public static void main(String[] args) {
		Project test1 = new Project();
		Project test2 = new Project("Sam");
		Project test3 = new Project("Sam", "The Best");
		Project test4 = new Project("Sam", "The Best", 5.3);
		
		String elevator1=test1.elevatorPitch();
		String elevator2=test2.elevatorPitch();
		String elevator3=test3.elevatorPitch();
		String elevator4=test4.elevatorPitch();
		
		System.out.println(elevator1);
		System.out.println(elevator2);
		System.out.println(elevator3);
		System.out.println(elevator4);

	}

}
