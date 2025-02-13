// De app/website waar ik data vandaan wil halen
const baseURL = 'https://fdnd.directus.app/';

// De data die ik wil hebben van de website
const endpointMe = 'items/person/209';

// Samenvoeging om de URL te krijgen
const urlMe = baseURL + endpointMe;

// console.log(urlMe);

// Haal de data op uit de URL, wanneer je klaar bent pak data van persoon 209
getData(urlMe).then( data209 => {
	// console.log(data209.data.name);
	// console.log(data209.data.birthdate);

	// Haal de naam uit de data set van persoon 209
	let myName = data209.data.name;
	let birthDay = data209.data.birthdate;
	let myBio = data209.data.bio;
	let myImage = data209.data.avatar;
	let myWebsite = data209.data.website;

	// Selecteer de h1 met de naam "h1" en vergang de tekst met "myName"
	let h1 = document.querySelector('h1');
	h1.textContent = myName;

	// Selecteer de p met de naam "verjaardag" en vergang de tekst met "birthDay"
	let biografie = document.querySelector('p:first-of-type');
	biografie.textContent = myBio;

	let verjaardag = document.querySelector('p:nth-of-type(2)');
	verjaardag.textContent = birthDay;

	let website = document.querySelector('a:first-of-type');
	website.textContent = myWebsite;

    let myImg = document.createElement("img");
    myImg.src = myImage;
    myImg.alt = myName;
    console.log(myImg);
    
    h1.appendChild(myImg);
});

// Functie om data op te halen
async /*9*/ function getData(URL) {
	return ( //8
		fetch(URL) //1
		.then ( //2
			response /*3*/ => response.json() //4
		)
		.then ( //5
			jsonData /*6*/ => {return jsonData} //7
		)
	);
}

document.addEventListener("DOMContentLoaded", function() {
    const hoed = document.querySelector(".hoed");
    const microfoon = document.querySelector(".microfoon");

    // Create an audio element
    const audio = new Audio("iBelieve.wav"); 
	console.log(audio);

    hoed.addEventListener("click", function() {
        hoed.classList.toggle("omhoog"); 
    });

    microfoon.addEventListener("click", function() {
        microfoon.classList.toggle("actief"); 

        if (microfoon.classList.contains("actief")) {
            audio.play(); 
        } else {
            audio.pause(); 
            audio.currentTime = 0; 
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const sun = document.querySelector(".sun");
    const book = document.querySelector(".book");
    let clickedOnce = false;

    // Als je klikt op de zon, valt het boek
    sun.addEventListener("click", function () {
        book.classList.add("falling");
		book.classList.remove("loading");
    });

	// Als de animatie klaar is, verwijder de class "falling"
	book.addEventListener("animationend", function () {
		book.classList.remove("falling");
	});
});



