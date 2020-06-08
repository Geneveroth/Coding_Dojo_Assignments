package com.zookeeper;

public class Gorilla extends Mammal{
	public Gorilla (int energyLevel) {
		super (energyLevel);
	}
	public Gorilla throwSomething() {
		this.energyLevel-=5;
		System.out.println("The Gorilla throws something and has "+this.energyLevel+" energy left.");
		return this;
	}
	public Gorilla eatBananas() {
		this.energyLevel+=10;
		System.out.println("The Gorilla eats a banana, has "+this.energyLevel+" energy now, and is totes stoked.");
		return this;
	}
	public Gorilla climb() {
		this.energyLevel-=10;
		System.out.print("The Gorilla climbs a tree and has "+this.energyLevel+" energy left.");
		return this;
	}
}
