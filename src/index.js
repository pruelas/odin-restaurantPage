import Food from "./flat-lay-batch-cooking-composition.jpg";
import pageLoad from "./pageLoad.js";
import menuLoad from "./menuLoad.js";
import contactLoad from "./contactLoad.js";
import './meyerWeb.css';
import './style.css';


console.log("Step 3 Statment" + Food);
pageLoad(Food);

const tabs = Array.from(document.getElementsByClassName("tabs"));

tabs.forEach(tab => {
    if(tab.id === "home"){
        tab.addEventListener('click', function(e){
            pageLoad(Food);
            /* tab.id = "homeSelected"; */
        });
    }else if(tab.id === "menu"){
        tab.addEventListener('click', function(e){
            menuLoad();
        });
    
    }else{
        tab.addEventListener('click', function(e){
            contactLoad();
        });
    }
    
});