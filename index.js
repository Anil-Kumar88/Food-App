let name = document.getElementById("name")
let veg = document.getElementById("veg")
let nonveg = document.getElementById("nonveg")
let form = document.getElementById("main-form");
console.log(form);

let handleSubmit = (e) => {
    e.preventDefault();
     veg.checked = true;
}
    
async function foods(){
    let data = await window.fetch("./server.json");
    let finalData = await data.json();
    console.log(finalData);
    let arr = [];
    console.log(finalData.VegItems);
    if (veg.checked===true) {
        finalData.VegItems.map((e) =>{
            let val = "";
            val
           
        })
    
    } else {
        
    }
}
foods();
