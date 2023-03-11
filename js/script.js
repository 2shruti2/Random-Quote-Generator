const quoteText= document.querySelector(".quote");
const quoteBtn= document.querySelector("button");
const author=document.querySelector(".author");

const sound=document.querySelector(".sound");
const copy=document.querySelector(".copy");
const twitter=document.querySelector(".twitter");

//random quote

function randomQuote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText="Loading Quote...";
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
        console.log(result);
        quoteText.innerText=result.content;
        author.innerText=result.author;
        quoteBtn.innerText="New Quote";
        quoteBtn.classList.remove("loading");
    })
}

quoteBtn.addEventListener("click", randomQuote);

//talk out loud quote

//SpeechSynthesisUtterance is a web speech api that represents a speech request
sound.addEventListener("click", ()=>{
    let utterance= new SpeechSynthesisUtterance(quoteText.innerText +' by'+ author.innerText);
    speechSynthesis.speak(utterance);  //speak method of speechSynthesis speaks the utterance
})


//copy button
copy.addEventListener("click", ()=>{
    navigator.clipboard.writeText(quoteText.innerText);
    alert("Copied");
})

//twitter button
twitter.addEventListener("click", ()=>{
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl, '_blank'); //opening twitter on a new tab
})