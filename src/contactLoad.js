export default function contactLoad(){
    let parentDiv = document.getElementById('content');
    let contentDiv = document.createElement("div");
    contentDiv.classList.add('contentDiv');

    let headLine = document.createElement("h1");
    headLine.textContent = "Contact";
    let textDescription = document.createElement("p");
    textDescription.textContent = "Insert contact info here.";
    contentDiv.appendChild(headLine);
    contentDiv.appendChild(textDescription)

    parentDiv.appendChild(contentDiv);
}