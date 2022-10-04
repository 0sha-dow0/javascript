let far=document.getElementById("fare")
let cel=document.getElementById("celc")


const celToFar=()=>
{
    
    far.value=(cel.value  * 9/5)+32

}
const farToCel=()=>
{
    
     cel.value=(far.value-32)*(5/9)
 }

const changeBg=(color)=>
{
    console.log(color)
    document.body.style.backgroundColor=color;
    const text = document.getElementById("textChange")
    if(color=="#000000"){
        console.log("black clicked ")
        text.style.color="white";

    }
    else{
        console.log("other clicked")
        text.style.color="black";
    }
}