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
    headLine.classList.add('menuHeader');
    let dishItems = document.createElement('div');
    dishItems.classList.add('dish');
    let drinkItems = document.createElement('div');
    drinkItems.classList.add('drink');
    let textDescription = document.createElement("p");
    textDescription.textContent = "Insert menu items here.";
    contentDiv.appendChild(headLine);;
    contentDiv.appendChild(drinkItems);
    contentDiv.appendChild(dishItems);

    let caesarSaladDish = document.createElement('div');
    caesarSaladDish.classList.add('dishItem');

    let caesarSaladImage = new Image();
    caesarSaladImage.src = caesarSalad;
    caesarSaladImage.classList.add('dishImage');
    let dishText = document.createElement('div');
    dishText.classList.add('dishText');
    dishText.textContent = 'idk';

    caesarSaladDish.append(caesarSaladImage);
    caesarSaladDish.append(dishText);
    dishItems.append(caesarSaladDish);


    let slawSaladDish = document.createElement('div');
    slawSaladDish.classList.add('dishItem');

    let slawSaladImage = new Image();
    slawSaladImage.src = slawSalad;
    slawSaladImage.classList.add('dishImage');
    let slawDishText = document.createElement('div');
    slawDishText.classList.add('dishText');
    slawDishText.textContent = 'idk';

    slawSaladDish.append(slawSaladImage);
    slawSaladDish.append(slawDishText);
    dishItems.append(slawSaladDish);


    let saladSandwichDish = document.createElement('div');
    saladSandwichDish.classList.add('dishItem');

    let saladSandwichImage = new Image();
    saladSandwichImage.src = saladSandwich;
    saladSandwichImage.classList.add('dishImage');
    let saladSandwichText = document.createElement('div');
    saladSandwichText.classList.add('dishText');
    saladSandwichText.textContent = 'idk';

    saladSandwichDish.append(saladSandwichImage);
    saladSandwichDish.append(saladSandwichText);
    dishItems.append(saladSandwichDish);


    let blackBeanWrapDish = document.createElement('div');
    blackBeanWrapDish.classList.add('dishItem');

    let blackBeanWrapImage = new Image();
    blackBeanWrapImage.src = blackBeanWrap;
    blackBeanWrapImage.classList.add('dishImage');
    let blackBeanWrapText = document.createElement('div');
    blackBeanWrapText.classList.add('dishText');
    blackBeanWrapText.textContent = 'idk';

    blackBeanWrapDish.append(blackBeanWrapImage);
    blackBeanWrapDish.append(blackBeanWrapText);
    dishItems.append(blackBeanWrapDish);



/*     let caesarSaladDish = document.createElement('div');
    caesarSaladDish.classList.add('dishImage');

    let caesarSaladImage = new Image();
    caesarSaladImage.src = caesarSalad;
    caesarSaladDish.classList.add('dishImage');
    let dishText = document.createElement('div');
    dishText.classList.add('dishText');
    dishText.textContent = 'idk';

    dishItem.append(caesarSaladImage);
    dishItem.append(dishText);
    dishItems.append(dishItem); */

    console.log(menuData);

    parentDiv.appendChild(contentDiv);
}