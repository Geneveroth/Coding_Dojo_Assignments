package com.objectmaster;
public class Samurai extends Human{
	private int count=0;
	public Samurai (String name) {
		super(name);
		this.name=name;
		this.health=200;
		this.count++;
	}
	public Samurai deathBlow(Human enemy) {
		enemy.health=0;
		this.health/=2;
		System.out.println(this.name+" executes "+enemy.name+" with a deathblow! "+this.name+" takes "+this.health/2+" points of damage as a result.");
		System.out.println(this.name+" has "+this.health+" points of health remining.");
		System.out.println(enemy.name+" has died.");
		return this;
	}
	public Samurai Medidate() {
		this.health+=this.health/2;
		System.out.println(this.name+" meditates, recovering half of their health.");
		System.out.println(this.name+" has "+this.health+" points of health.");
		return this;
	}
	public Samurai howMany() {
		System.out.println("There are "+count+" Samurai.");
		return this;
	}

}
