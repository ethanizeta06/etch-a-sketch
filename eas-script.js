document.body.style.backgroundColor = "black";
const wrapper = document.createElement("div");
wrapper.setAttribute("style","display:flex; justify-content: center; align-items: center; height: 100vh");
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