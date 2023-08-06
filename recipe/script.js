const submitBtn = document.getElementById('submit')
const instructionEle = document.getElementById("instructions")
const foodTitle = document.getElementById("food-title")
const foodImages = document.getElementById("food-images")
const image =document.getElementById("image")
const youtube = document.getElementById("youtube")
const youtubeA = document.getElementById("youtube-a")
url ='https://cdn-icons-png.flaticon.com/512/1384/1384060.png'

async function getRandomMeal(){
    const resp = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    const random = await resp.json()
    const randomMealIns=random.meals[0].strInstructions
    const title = random.meals[0].strMeal
    const image = random.meals[0].strMealThumb
    const video =  random.meals[0].strYoutube
    console.log(random.meals[0])
    return [randomMealIns,title,image,video]
}

submitBtn.addEventListener("click",()=>{
    
    if(document.getElementById('small-ins')){
        const small = document.getElementById('small-ins')
        instructionEle.removeChild(small)
    }
    const instructions = Promise.resolve(getRandomMeal())
    instructions.then(value=>{
        image.src=value[2]
        youtube.src=url
        youtubeA.href=value[3]
        foodTitle.innerText=value[1]
        const instruction = document.createElement("small")
        instruction.innerText = value[0]
        instruction.id = "small-ins"
        instructionEle.appendChild(instruction)
    }).catch(err=>{
        console.log(err)
    })

    

})