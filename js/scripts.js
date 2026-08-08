// Element References
const footer = document.querySelector("footer");

// Function to dynamically add my name and student id to the document (taken from assignment 2 as it's the same code)
function createFooter() {
    let p = document.createElement("p");
    let studentName = "Cameron Yon-Vachon";
    let studentId = "200641927";
    p.textContent = `Page created by: ${studentName} | ${studentId}`;
    footer.appendChild(p);
}