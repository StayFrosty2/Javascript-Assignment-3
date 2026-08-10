// Element References
const footer = document.querySelector("footer");
const search = document.querySelector("#search");
const submitbtn = document.querySelector("#submitbtn");

// Pokemon Stuff References
const name = document.querySelector("#name");
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

// event listener for the form, 