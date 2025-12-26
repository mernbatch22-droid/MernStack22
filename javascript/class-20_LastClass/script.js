

//Task -1 Done
//1-> get the div so that you can attach btn
let divEle = document.getElementById("Div-1");
console.log("Now we have div", divEle)

//2- create the btn
let addBtn = document.createElement("button");
console.log("Btn created", addBtn)

//3- add the content to the btn
addBtn.textContent = " Add "

//4- attch the btn inside the div
divEle.appendChild(addBtn)



// Task-2 

//1-> get the btn so we already have btn(done)

//2- attacheventHandler
addBtn.addEventListener("click", () => {
    console.log("Me kush karunga")
    //1-> get the div so that you can attach btn (done)
    //2- create the paragraph
    let paraEle = document.createElement("p");
    //3- add the content to the btn
    paraEle.textContent = "Sab khtam kar denge"
    //4- attch the para to the div
    divEle.appendChild(paraEle);
})
