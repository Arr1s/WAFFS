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

	// Selecteer de h1 met de naam "h1" en vergang de tekst met "myName"
	let h1 = document.querySelector('h1');
	h1.textContent = myName;

	// Selecteer de p met de naam "verjaardag" en vergang de tekst met "birthDay"
	let verjaardag = document.querySelector('p');
	verjaardag.textContent = birthDay;

    let myImg = document.createElement("img");
    myImg.src = myImage;
    myImg.alt = myName;
    // console.log(myImg);
    
    let mySection = document.querySelector('section:nth-of-type(1)');
    mySection.appendChild(myImg);
});

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


