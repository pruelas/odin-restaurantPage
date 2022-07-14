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
    let caesarSaladText = document.createElement('div');
    caesarSaladText.classList.add('dishText');
    let caesarSaladTitle = document.createElement('div');
    caesarSaladTitle.classList.add('dishTitle');
    caesarSaladTitle.textContent = "Caesar Salad";
    let ceasarSaladDescription = document.createElement('div');
    ceasarSaladDescription.classList.add('dishDescription');
    ceasarSaladDescription.textContent = 'A classic caeser salad with croutons and light dressing';


    caesarSaladDish.append(caesarSaladImage);
    caesarSaladDish.append(caesarSaladText);
    dishItems.append(caesarSaladDish);


    let slawSaladDish = document.createElement('div');
    slawSaladDish.classList.add('dishItem');

    let slawSaladImage = new Image();
    slawSaladImage.src = slawSalad;
    slawSaladImage.classList.add('dishImage');
    let slawSaladText = document.createElement('div');
    slawSaladText.classList.add('dishText');    
    let slawSaladTitle = document.createElement('div');
    slawSaladTitle.classList.add('dishTitle');
    slawSaladTitle.textContent = "Asian Slaw Salad";
    let slawSaladDescription = document.createElement('div');
    slawSaladDescription.classList.add('dishDescription');
    slawSaladDescription.textContent = 'A salad with fresh herbs annd peaches with miso dressing';

    slawSaladText.append(slawSaladTitle);
    slawSaladText.append(slawSaladDescription);

    slawSaladDish.append(slawSaladImage);
    slawSaladDish.append(slawSaladText);
    dishItems.append(slawSaladDish);


    let saladSandwichDish = document.createElement('div');
    saladSandwichDish.classList.add('dishItem');

    let saladSandwichImage = new Image();
    saladSandwichImage.src = saladSandwich;
    saladSandwichImage.classList.add('dishImage');
    let saladSandwichText = document.createElement('div');
    saladSandwichText.classList.add('dishText');
    let saladSandwichTitle = document.createElement('div');
    saladSandwichTitle.classList.add('dishTitle');
    saladSandwichTitle.textContent = "Salad Sandwich";
    let saladSandwichDescription = document.createElement('div');
    saladSandwichDescription.classList.add('dishDescription');
    saladSandwichDescription.textContent = 'A delicious filling meal made with fresh vegetables';

    saladSandwichText.append(saladSandwichTitle);
    saladSandwichText.append(saladSandwichDescription);
    
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
    let blackBeanWrapTitle = document.createElement('div');
    blackBeanWrapTitle.classList.add('dishTitle');
    blackBeanWrapTitle.textContent = "Caesar Salad";
    let blackBeanWrapDescription = document.createElement('div');
    blackBeanWrapDescription.classList.add('dishDescription');
    blackBeanWrapDescription.textContent = 'A wrap made with black beans, salsa, corn, avocado, olives, and greens';

    blackBeanWrapText.append(blackBeanWrapTitle);
    blackBeanWrapText.append(blackBeanWrapDescription);


    blackBeanWrapDish.append(blackBeanWrapImage);
    blackBeanWrapDish.append(blackBeanWrapText);
    dishItems.append(blackBeanWrapDish);

    parentDiv.appendChild(contentDiv);
}