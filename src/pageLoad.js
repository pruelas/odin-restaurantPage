export default function pageLoad(Food){
    let parentDiv = document.getElementById("content");
    let tabDiv = document.createElement("div");
    tabDiv.classList.add('tabDiv');

    let homeTab = document.createElement("div");
    homeTab.classList.add('tabs');
    homeTab.id = "home";
    homeTab.textContent = "Home";
    let menuTab = document.createElement("div");
    menuTab.classList.add('tabs');
    menuTab.id = "menu";
    menuTab.textContent = "Menu";
    let contactTab = document.createElement("div");
    contactTab.classList.add('tabs');
    contactTab.id = "contact";
    contactTab.textContent = "Contact";

    tabDiv.append(homeTab);
    tabDiv.append(menuTab);
    tabDiv.append(contactTab);

    let titleDiv = document.createElement("div");
    titleDiv.classList.add('titleDiv');

    let headLine = document.createElement("h1");
    headLine.textContent = "Healthy Eating";
    let textDescription = document.createElement("p");
    textDescription.textContent = "Eat healthy today, for tomorrow's you! Freshness always guaranteed!";
    titleDiv.appendChild(headLine);
    titleDiv.appendChild(textDescription)

    parentDiv.appendChild(tabDiv);
    parentDiv.appendChild(titleDiv);
}
