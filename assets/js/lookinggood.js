function newCompliment()
{

	var greetings = ["Hello", "Hi", "Hi there!", "Hola", "'ey up!", "Hello there", "S'up?"]
	var compliments = [
	"You're looking good today", 
	"Did you change your hair?", 
	"Looking fabulous my dear!", 
	"Have you been working out?",
	"What you do / Still betters what is done. When you speak, sweet, / I'd have you do it ever;  <br />(The Winter's Tale (4.4.135-138))",
	"I might call you / A thing divine, for nothing natural / I ever saw so noble. <br /> Miranda, The Tempest (1.2.418-20)",]

	var greeting_to_user = greetings[Math.floor(Math.random()*greetings.length)]
	var compliment_for_users = compliments[Math.floor(Math.random()*compliments.length)]


	$("#greeting").html(greeting_to_user);
	$("#compliment").html(compliment_for_users);

}

$(document).ready(newCompliment);