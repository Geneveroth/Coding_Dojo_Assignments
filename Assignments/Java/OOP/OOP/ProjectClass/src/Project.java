
public class Project {
	private String name;
	private String description;
	private double initialCost;
	public String elevatorPitch() {
		return name+"("+initialCost+")"+" : "+ description;
	}
	public Project() {
		this.name="undefined";
		this.description="undefined";
	}
	public Project (String name) {
		this.name=name;
		this.description="undefined";
	}
	public Project (String name, String description) {
		this.name=name;
		this.description=description;	
	}
	public Project (String name, String description, double initialCost) {
		this.name=name;
		this.initialCost=initialCost;
		this.description=description;	
	}
	public String getName() {
		return this.name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return this.description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public double getInitialCost() {
		return initialCost;
	}
	public void setInitialCost(double initialCost) {
		this.initialCost = initialCost;
	}

}
