"use strict";

window.onload = function(){

	// I denna funktion ska du skriva koden för att hantera "spelet"
	var convertString = function(str){
		
		var checkUppLow= str.split('');
		
		for (var i = 0; i < checkUppLow.length; i++) { 
			
			var character = checkUppLow[i];
			
			if(character == character.toUpperCase()){
				
				checkUppLow[i] = character.toLowerCase();
			}
			else{
				checkUppLow[i] = character.toUpperCase();
			}
       }
       
       var changedCase = checkUppLow.join('');
		
		var res = changedCase.replace(/a/gi, "#");
		return res;
		
		
	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = convertString(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			p.innerHTML = answer;		// Skriver ut texten från arrayen som skapats i funktionen.	
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};