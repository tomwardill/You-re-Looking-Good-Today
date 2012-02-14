function newCompliment()
{

	var greetings = ["Hello", "Hi", "Hi there!", "Hola", "'ey up!"]
	var compliments = ["You're looking good today", "Did you change your hair?", "Looking fabulous my dear!", "Have you been working out?"]

	var greeting_to_user = greetings[Math.floor(Math.random()*greetings.length)]
	var compliment_for_users = compliments[Math.floor(Math.random()*compliments.length)]


	$("#greeting").html(greeting_to_user);
	$("#compliment").html(compliment_for_users);

}

$(document).ready(newCompliment);