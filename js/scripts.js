// Element References
const footer = document.querySelector("footer");

// Pokemon Stuff References
const p1 = document.querySelector("#p1");
const p1t1 = document.querySelector("#p1t1");
const p1t2 = document.querySelector("#p1t2");
const btn1 = document.querySelector("#searchbtn1");


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