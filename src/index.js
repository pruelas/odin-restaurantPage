import Food from "./flat-lay-batch-cooking-composition.jpg";
import pageLoad from "./pageLoad.js";
import menuLoad from "./menuLoad.js";
import contactLoad from "./contactLoad.js";
import './meyerWeb.css';
import './style.css';


console.log("Step 3 Statment" + Food);

let tabDiv = document.createElement("div");
tabDiv.classList.add('tabDiv');

let homeTab = document.createElement("div");
homeTab.classList.add('tabs');
homeTab.classList.add('selected');
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

let parentDiv = document.getElementById('content');
parentDiv.append(tabDiv);

pageLoad(Food);
const tabs = Array.from(document.getElementsByClassName("tabs"));

tabs.forEach(tab => {
    if(tab.id === "home"){
        tab.addEventListener('click', function(e){
            deleteContent();
            pageLoad(Food);
            tab.classList.add("selected");
            
            /* tab.id = "homeSelected"; */
        });
    }else if(tab.id === "menu"){
        tab.addEventListener('click', function(e){
            deleteContent();
            menuLoad();
            tab.classList.add("selected");
            
        });
    
    }else{
        tab.addEventListener('click', function(e){
            deleteContent();
            contactLoad();
            tab.classList.add("selected");
        });
    }  
});

function deleteContent(){
    let contentDiv = document.getElementById('content');
    contentDiv.removeChild(contentDiv.lastChild);
    let tabs = Array.from(document.getElementsByClassName("tabs"));
    tabs.forEach(tab => {
        tab.classList.remove("selected");
    });
}