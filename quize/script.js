const quizData = [
    {
        question: "What is the most used programming language in 2019?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "Who is the President of US?",
        a: "Florin Pop",
        b: "Donald Trump",
        c: "Ivan Saldano",
        d: "Mihai Andrei",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const questionEle = document.getElementById("question")
const aEle = document.getElementById("a")
const bEle = document.getElementById("b")
const cEle = document.getElementById("c")
const dEle = document.getElementById("d")
const submitButn = document.getElementById("submit")
const answerEle = document.getElementsByName("answer")

let currentQuiz = 0
let score = 0 
 
function changeQuestion(){
    removeChecked()
    const quizDataChange = quizData[currentQuiz]

    questionEle.innerText = quizDataChange.question
    aEle.innerText = quizDataChange.a
    bEle.innerText = quizDataChange.b
    cEle.innerText = quizDataChange.c
    dEle.innerText = quizDataChange.d



}

function getSelected(){
    let answers = undefined
    answerEle.forEach((answerEl)=>{
        if(answerEl.checked){
            answers = answerEl.value
        }
    })
    return answers

}

function removeChecked(){
    answerEle.forEach((radio)=>{
        radio.checked = false
    })
}

submitButn.addEventListener('click',()=>{
    
    let answer = getSelected()
    answer == quizData[currentQuiz].correct ? score++ : score
    if(currentQuiz++ < quizData.length - 1){
        changeQuestion()
    }
    else{
        document.getElementById("quiz").innerHTML = `<p>QUIZ COMPLETED you scored ${score}</p>`
        submitButn.innerText="Reload"
        submitButn.addEventListener("click",()=>{location.reload()

        })
    }
      
    
})
// function score(){

// }
changeQuestion()