package com.zookeeper;

public class Bat extends Mammal{
	public Bat (int energyLevel){
	super(energyLevel);
	}
	public Bat fly() {
		this.energyLevel-=50;
		System.out.println("The Bat takes off, reducing its energy to "+this.energyLevel);
		return this;
	}
	public Bat eatHumans() {
		this.energyLevel+=25;
		System.out.println("The Bat noms on some bros, increasing its energy to "+this.energyLevel);
		return this;
	}
	public Bat attackTown() {
		this.energyLevel-=100;
		System.out.println("The Bat blows up a town, decreasing its energy to "+this.energyLevel);
		return this;
	}
}

