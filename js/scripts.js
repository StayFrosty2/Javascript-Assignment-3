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
const cry = document.querySelector("#cry");
const abilities = document.querySelector("#abilities");
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
    pname.textContent = `Pokedex #${id}: ${json.name}`;
    sprite.src = json.sprites.front_default;
    sprite.alt = `${json.name}`;

    let typeOne = json.types[0].type.name;
    type1.textContent = typeOne;

    if(json.types.length > 1) {
        let typeTwo = json.types[1].type.name;
        type2.textContent = typeTwo;
    }
    else {
        type2.textContent = ``;
    }

    cry.src = json.cries.latest;

    while(abilities.firstChild) {
        abilities.removeChild(abilities.firstChild);
    }

    const abiH3 = document.createElement("h3");
    abiH3.textContent = `List of Abilities:`;
    abilities.appendChild(abiH3);

    const abilityList = document.createElement("ul");

    for(let i = 0; i < json.abilities.length; i++) {
        const ability = document.createElement("li");
        let abiTxt;
        abiTxt = json.abilities[i].ability.name;
        if(json.abilities[i].is_hidden === true) {
            abiTxt += ` (Hidden Ability)`;
        }
        ability.textContent = abiTxt;
        abilityList.appendChild(ability);
    }
    
    abilities.appendChild(abilityList);

    hp.textContent = `Hp: ${json.stats[0].base_stat}`;
    atk.textContent = `Attack: ${json.stats[1].base_stat}`;
    def.textContent = `Defense: ${json.stats[2].base_stat}`;
    spatk.textContent = `Special Attack: ${json.stats[3].base_stat}`;
    spdef.textContent = `Special Defense: ${json.stats[4].base_stat}`;
    spd.textContent = `Speed: ${json.stats[5].base_stat}`;
}