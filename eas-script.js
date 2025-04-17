document.body.style.backgroundColor = "black";
const wrapper = document.createElement("div");
wrapper.setAttribute("style","display:flex; flex-direction: column; justify-content: center; align-items: center; height: 100vh");
const container = document.createElement("div");
container.setAttribute("class","container");
container.setAttribute("style","width: 400px; height: 400px;display: flex;flex-wrap: wrap; ");
for (let i=1; i<=256; i++)
{
    const square = document.createElement("div");
    square.setAttribute("style","width: 25px; height: 25px; background-color: white;");
    square.setAttribute("class","hovering");
    container.appendChild(square);
}
wrapper.appendChild(container);
document.body.appendChild(wrapper);
const gridNodeList = document.querySelectorAll(".hovering");
gridNodeList.forEach (div => {
    div.addEventListener('mouseover',(event) => {
        let target = event.target;
        target.style.backgroundColor = "#89CFF0";
    })
})


const divNodeList = document.querySelectorAll(".hovering");
const button = document.createElement("button");
button.setAttribute("style", "display: flex; justify-content: center; font-size: 30px; border-radius: 30%; background-color: white; margin-bottom: 20px;");
wrapper.appendChild(container);
wrapper.appendChild(button);
document.body.appendChild(wrapper);


button.addEventListener('click',(event)=>{
    let userInput
    do{
     userInput = parseInt(prompt("Number of squares per side for the new grid: "));
    }while(userInput>100 || userInput<0);
    container.innerHTML = "";
    let newSquareSize = 400/userInput;
    for (let i=1; i<userInput*userInput; i++)
    {
        const square = document.createElement("div");
        square.setAttribute("style",`width: ${newSquareSize}px; height: ${newSquareSize}px; background-color: white;`);
        square.setAttribute("class","hovering");
        container.appendChild(square);
    }
    // Reapply hover effect to new squares
const newSquares = document.querySelectorAll(".hovering");
newSquares.forEach(div => {
  div.addEventListener('mouseover', event => {
    event.target.style.backgroundColor = "#89CFF0";
  });
});

})
document.body.appendChild(button);