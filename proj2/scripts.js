const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

// console.log(window.getComputedStyle(red).backgroundColor);
// console.log(window.getComputedStyle(cyan).backgroundColor);
// console.log(window.getComputedStyle(violet).backgroundColor);
// console.log(window.getComputedStyle(orange).backgroundColor);
// console.log(window.getComputedStyle(pink).backgroundColor);

const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
}

// var color = getBGColor(pink);

// pink.addEventListener('mouseenter', ()=>{
//     center.style.background = color;
// });

const magicColorChanger = (element, color) =>{
    element.addEventListener('mouseenter', ()=>{
        center.style.background = color;
    });
}

magicColorChanger(red,getBGColor(red));
magicColorChanger(cyan,getBGColor(cyan));
magicColorChanger(orange,getBGColor(orange));
magicColorChanger(violet,getBGColor(violet));
magicColorChanger(pink,getBGColor(pink));