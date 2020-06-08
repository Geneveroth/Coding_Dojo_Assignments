package com.objectmaster;

public class HumanTest {

	public static void main(String[] args) {
		Wizard w =new Wizard("Gandalf");
		Samurai s=new Samurai("Yoshimitsu");
		Samurai t=new Samurai("Heihachi");
		Ninja n=new Ninja("Scorpion");
		Human b =new Human ("Bob");
		
		w.fireball(s);
		s.attack(w);
		w.heal(w);
		w.heal(b);
		s.deathBlow(w);
		
		n.steal(b);
		n.runAway();
		
		s.Medidate();
		s.howMany();
		
	}

}
