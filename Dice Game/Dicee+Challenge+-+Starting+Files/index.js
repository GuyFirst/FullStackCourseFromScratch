
	var randomNumber = Math.floor((Math.random() * 6)) + 1;

	var randomDiceImage = "dice" + randomNumber + ".png";

    var randomImageSource = "images/" + randomDiceImage; 

	document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

