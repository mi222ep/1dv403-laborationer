"use strict";

window.onload = function() {


	var birthday = function(date) {

		var birthDate = new Date(date);
		var nowDate = new Date();
		
		
		var difference = Math.floor((nowDate.getTime() - birthDate.getTime()) / 1000 / 60 / 60 / 24);
		
		if (difference < 0){
			
			var futureBirthday = birthDate;
			futureBirthday.setFullYear(nowDate.getFullYear() - 1);
			
			difference = Math.floor((nowDate.getTime() - futureBirthday.getTime()) / 1000 / 60 / 60 / 24);
		}

		return difference;



	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e) {
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove("error");

		try {
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer) {
				case 0:
					message = "Grattis på födelsedagen!";
					break;
				case 1:
					message = "Du fyller år imorgon!";
					break;
				default:
					message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		}
		catch (error) {
			p.classList.add("error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}

	});



};