export default function contactLoad(){
    let parentDiv = document.getElementById('content');
    let contentDiv = document.createElement("div");
    contentDiv.classList.add('contentDiv');

    let headLine = document.createElement("h1");
    headLine.textContent = "Contact";
    headLine.classList.add("contactHeader");
    let textDescription = document.createElement("div");
    textDescription.classList.add("contactInfo");
    textDescription.innerHTML = "Call us at (XXX) XXX-XXXX!" + "<br />" + "We take over the phone orders!";
    contentDiv.appendChild(headLine);
    contentDiv.appendChild(textDescription)

    let timeHeadline = document.createElement("p");
    timeHeadline.textContent = "MON-FRI 11AM-8PM";

    let daysClosed = document.createElement("p");
    daysClosed.textContent = "Weekends Closed";



    contentDiv.appendChild(timeHeadline);
    contentDiv.appendChild(daysClosed);

    parentDiv.appendChild(contentDiv);
}