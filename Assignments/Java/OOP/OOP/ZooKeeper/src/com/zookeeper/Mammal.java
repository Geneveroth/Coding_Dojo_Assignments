package com.zookeeper;

public class Mammal {
	protected int energyLevel=100;
	public Mammal(int energyLevel) {
		this.energyLevel=energyLevel;
	}
	public int displayEnergy() {
		System.out.println("This animal's energy level is "+energyLevel);
		return energyLevel;
	}
}
