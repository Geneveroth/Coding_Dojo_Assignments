package com.objectmaster;

public class Ninja extends Human{
	public Ninja (String name) {
		super(name);
		this.name=name;
		this.stealth=10;
	}
	public Ninja steal(Human enemy) {
		enemy.health-=this.stealth;
		this.health+=this.stealth;
		System.out.println(this.name+" steals "+this.stealth+" points of health from "+enemy.name+".");
		System.out.println(this.name+" has "+this.health+" points of health.");
		return this;
	}
	public Ninja runAway() {
		this.health-=10;
		System.out.println(this.name+" evades combat, but takes 10 points of damage.");
		System.out.println(this.name+" has "+this.health+" points of health remaining.");
		return this;
	}

}
