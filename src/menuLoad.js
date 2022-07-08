export default function menuLoad(){
    let parentDiv = document.getElementById("content");
  /*   let tabDiv = document.createElement("div");
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
    tabDiv.append(contactTab); */

    let contentDiv = document.createElement("div");
    contentDiv.classList.add('contentDiv');

    let headLine = document.createElement("h1");
    headLine.textContent = "Menu";
    let textDescription = document.createElement("p");
    textDescription.textContent = "Insert menu items here.";
    contentDiv.appendChild(headLine);
    contentDiv.appendChild(textDescription)

    /* parentDiv.appendChild(tabDiv); */
    parentDiv.appendChild(contentDiv);
}