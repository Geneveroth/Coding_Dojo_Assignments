package com.objectmaster;

public class Wizard extends Human{
	public Wizard (String name) {
		super(name);
		this.intelligence=8;
		this.health=50;
	}
	public Wizard heal(Human ally) {
		ally.health+=this.intelligence;
		if(this.name==ally.name) {
			System.out.println(this.name+" heals themself for "+this.intelligence+" points of damage.");
			System.out.println(this.name+" now has "+this.health+" health.");
			return this;
		}
		else {
		System.out.println(this.name+" heals "+ally.name+" for "+this.intelligence+" points of damage.");
		System.out.println(ally.name+" now has "+ally.health+" health.");
		}
		return this;
	}
	public Wizard fireball(Human enemy) {
		enemy.health-=this.intelligence*3;
		System.out.println(this.name+" hits "+enemy.name+" with a fireball for "+this.intelligence*3+" points of damage.");
		return this;
	}
}
