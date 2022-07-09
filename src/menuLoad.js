import menuData from './menuData.csv';
import caesarSalad from './caesarSalad.jpg';
import slawSalad from './slawSalad.jpg';
import saladSandwich from './saladSandwich.jpg';
import blackBeanWrap from './blackBeanWrap.jpg';

export default function menuLoad(){
    let parentDiv = document.getElementById("content");

    let contentDiv = document.createElement("div");
    contentDiv.classList.add('contentDiv');

    let headLine = document.createElement("h1");
    headLine.textContent = "Menu";
    let dishItems = document.createElement('div');
    dishItems.classList.add('dish');
    let drinkItems = document.createElement('div');
    drinkItems.classList.add('drink');
    let textDescription = document.createElement("p");
    textDescription.textContent = "Insert menu items here.";
    contentDiv.appendChild(headLine);;
    contentDiv.appendChild(drinkItems);
    contentDiv.appendChild(dishItems);

    for(let i = 1; i < menuData.length; i++){
        if(menuData[i][0] === "Dish"){
            let dishItem = document.createElement('div');
            dishItem.classList.add('dishItem');

            /* let dishImage = document.createElement('div');
            dishImage.classList.add('dishImage'); */
            const dishImage = new Image();
            dishImage.src = menuData[i][3];
            console.log(dishImage.src);
            dishImage.classList.add('dishImage');
            dishItem.style.background = "url('./" + menuData[i][3] + ".jpg')";
            /* dishImage.style.backgroundImage =  */
            let dishText = document.createElement('div');
            dishText.classList.add('dishText');
            dishText.textContent = menuData[i][2];

            dishItem.append(dishImage);
            dishItem.append(dishText);
            dishItems.append(dishItem);
        }else{
            let drinkItem = document.createElement('div');
            drinkItem.classList.add('drinkItem');
            drinkItem.textContent = menuData[i][2];

            drinkItems.append(drinkItem);


        }
    }
    console.log(menuData);

    parentDiv.appendChild(contentDiv);
}