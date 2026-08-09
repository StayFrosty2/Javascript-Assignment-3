// Element References
const footer = document.querySelector("footer");

// Pokemon Stuff References
const p1 = document.querySelector("#p1");
const p1t1 = document.querySelector("#p1t1");
const p1t2 = document.querySelector("#p1t2");
const btn1 = document.querySelector("#searchbtn1");

const p2 = document.querySelector("#p2");
const p2t1 = document.querySelector("#p2t1");
const p2t2 = document.querySelector("#p2t2");
const btn2 = document.querySelector("#searchbtn2");

const p3 = document.querySelector("#p3");
const p3t1 = document.querySelector("#p3t1");
const p3t2 = document.querySelector("#p3t2");
const btn3 = document.querySelector("#searchbtn3");

const p4 = document.querySelector("#p4");
const p4t1 = document.querySelector("#p4t1");
const p4t2 = document.querySelector("#p4t2");
const btn4 = document.querySelector("#searchbtn4");

const p5 = document.querySelector("#p5");
const p5t1 = document.querySelector("#p5t1");
const p5t2 = document.querySelector("#p5t2");
const btn5 = document.querySelector("#searchbtn5");

const p6 = document.querySelector("#p6");
const p6t1 = document.querySelector("#p6t1");
const p6t2 = document.querySelector("#p6t2");
const btn6 = document.querySelector("#searchbtn6");

// Function to dynamically add my name and student id to the document (taken from assignment 2 as it's the same code)
function createFooter() {
    let p = document.createElement("p");
    let studentName = "Cameron Yon-Vachon";
    let studentId = "200641927";
    p.textContent = `Page created by: ${studentName} | ${studentId}`;
    footer.appendChild(p);
}

// Call the create footer function
createFooter();