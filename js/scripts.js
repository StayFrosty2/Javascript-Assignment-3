// base url;
const baseURL = "https://pokeapi.co/api/v2/";
let url;

// Element References
const footer = document.querySelector("footer");
const search = document.querySelector("#search");
const submitbtn = document.querySelector("#submitbtn");

// Pokemon Stuff References
const pname = document.querySelector("#name");
const sprite = document.querySelector("#sprite");
const type1 = document.querySelector("#type1");
const type2 = document.querySelector("#type2");
const ability = document.querySelector("#ability");
const hp = document.querySelector("#hp");
const atk = document.querySelector("#atk");
const def = document.querySelector("#def");
const spatk = document.querySelector("#spatk");
const spdef = document.querySelector("#spdef");
const spd = document.querySelector("#spd");


// Function to dynamically add my name and student id to the document (taken from assignment 2 as it's the same code)
function createFooter() {
    let p = document.createElement("p");
    let studentName = "Cameron Yon-Vachon";
    let studentId = "200641927";
    p.textContent = `Page created by: ${studentName} | ${studentId}`;
    footer.appendChild(p);

    let p2 = document.createElement("p");
    let a = document.createElement("a");

    p2.textContent = `This site uses PokeAPI, available at: `;
    a.textContent = `https://pokeapi.co/`;
    a.href = `https://pokeapi.co/`;

    p2.appendChild(a);
    footer.appendChild(p2);
}

// Call the create footer function
createFooter();

// event listener for the form to grab the submit
submitbtn.addEventListener("click", function (event) {
    fetchResults(event);
});
function fetchResults(event) {
    // prevent default
    event.preventDefault();

    // assemble the url
    console.log(search.value);
    console.log(search.value.toLowerCase());
    url = `${baseURL}pokemon/${search.value.toLowerCase()}`;
    fetch(url).then(response => {return response.json();}).then(json => displayResults(json));
}

function displayResults(json) {
    console.log(json);
    let id = json.id;
    console.log(id);
    console.log(json.name);
    pname.textContent = `Pokedex #${id}: ${json.name.charAt(0).toUpperCase() + json.name.slice(1)}`;
    sprite.src = json.sprites.front_default;
    sprite.alt = `${json.name}`;

    let typeOne = json.types[0].type.name;
    type1.textContent = typeOne.charAt(0).toUpperCase() + typeOne.slice(1);

    if(json.types.length > 1) {
        let typeTwo = json.types[1].type.name;
        type2.textContent = typeTwo.charAt(0).toUpperCase() + typeTwo.slice(1);
    }
    else {
        type2.textContent = ``;
    }
}