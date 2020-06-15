package com.objectmaster;

public class Human {
	protected String name;
	protected int strength=3;
	protected int stealth=3;
	protected int intelligence=3;
	protected int health=100;
	
	public Human(String name) {
		this.name=name;
	}
	public Human attack(Human enemy) {
		enemy.health-=this.strength;
		System.out.println(this.name+" hits "+enemy.name+" for "+this.strength+" points of damage. "+enemy.name+" has "+enemy.health+" health remaining.");
		return this;
	}
}