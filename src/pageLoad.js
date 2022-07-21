export default function pageLoad(Food){
    let parentDiv = document.getElementById("content");

    let contentDiv = document.createElement("div");
    contentDiv.classList.add('contentDiv');

    let headLine = document.createElement("h1");
    headLine.textContent = "Healthy Eating";
    headLine.classList.add("homeHeader");
    let textDescription = document.createElement("p");
    textDescription.textContent = "Eat healthy today, for tomorrow's you! Freshness always guaranteed!";
    contentDiv.appendChild(headLine);
    contentDiv.appendChild(textDescription)

    parentDiv.appendChild(contentDiv);
}
