function newCompliment(){
	var greetings = ["Hello,", "Hi", "Hi There!", "Hola,", "'Ey Up!","Aloha,", "Bonjour,", "Hey You,", "Cheer Up,", "You There!", "Congratulations"]
	var compliments = ["You're looking good today", "Did you change your hair?", "Looking fabulous my dear!", "Have you been working out?", "You give the best hugs", "You deserve a chocolate", "You can be my wingman any time", "You're a good person", "You always have the best ideas", "Your presence brings good karma"]
	var urls = [["http://farm5.staticflickr.com/4079/4876706955_71586607dc_b.jpg","Leo Reynolds","http://www.flickr.com/photos/lwr/4876706955/"],
				["http://farm5.staticflickr.com/4046/4359683945_c45080e9c1_o.jpg","Wendi Gratz", "http://www.flickr.com/photos/shinyhappyworld/4359683945/"],
				["http://farm6.staticflickr.com/5292/5454097130_cc1e073f53_b.jpg","Ivana Vasilj", "http://www.flickr.com/photos/ivanavasilj/5454097130/"],
				["http://farm2.staticflickr.com/1421/1234672907_2ad2c747fe_b.jpg","20 characters ...", "http://www.flickr.com/photos/bioman/1234672907/"],
				["http://farm4.staticflickr.com/3487/3723728506_22f6d1584a_b.jpg","Krabiman", "http://www.flickr.com/photos/krabiman/3723728506/"],
				["http://farm4.staticflickr.com/3094/2562106102_0c96e6cfd3_b.jpg","mathias-erhart", "http://www.flickr.com/photos/mathias-erhart/2562106102/"],
				["http://farm4.staticflickr.com/3345/3432388878_2f277ae62c_b.jpg","Bowman!","http://www.flickr.com/photos/cardinalartisan/3432388878/"],
				["http://farm7.staticflickr.com/6179/6157898436_1c09106104_b.jpg","Oatsandsugar","http://www.flickr.com/photos/oatsandsugar/6157898436/"]]

	var greeting_to_user 		= greetings[Math.floor(Math.random()*greetings.length)]
	var compliment_for_users 	= compliments[Math.floor(Math.random()*compliments.length)]
	var image_to_inspire 		= urls[Math.floor(Math.random()*urls.length)]

	$("#greeting").html(greeting_to_user);
	$("#compliment").html(compliment_for_users);

	$('html').css('background', 'url('+image_to_inspire[0]+') no-repeat center center fixed');
	$('html').css('background-size', 'cover');
	$('html').css('-o-background-size', 'cover');
	$('html').css('-ms-background-size', 'cover');
	$("#byWho").html(image_to_inspire[1]);
	$("#imageCredit a").attr("href", image_to_inspire[2]);
}


$(document).ready(newCompliment);


