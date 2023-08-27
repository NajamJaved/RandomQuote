const quotetext = document.querySelector(".quote"),
    quotebtn = document.querySelector("button"),
    authorname = document.querySelector(".author .name"),
    soundbtn = document.querySelector(".sound"),
    copybtn = document.querySelector(".copy"),
    linkdinbtn = document.querySelector(".linkdin")
    ;

function randomquote() {
    quotebtn.classList.add("loading");
    quotebtn.innerText = "Loading Quote....";
    fetch("https://api.quotable.io/random")
        .then(res => res.json())
        .then(result => {
            // console.log("najam");
            quotetext.innerText = result.content;
            authorname.innerText = result.author;
            quotebtn.innerText = "New Quote"
            quotebtn.classList.remove("loading");
        })
        .catch(error => {
            console.error("Error fetching quote:", error);
        });
}

soundbtn.addEventListener("click", () => {
    let bolyga = new SpeechSynthesisUtterance(`${quotetext.innerHTML} by ${authorname.innerHTML}`)
    speechSynthesis.speak(bolyga);
})
copybtn.addEventListener("click", () => {
    navigator.clipboard.writeText(quotetext.innerHTML);
})
linkdinbtn.addEventListener("click", () => {
    let linkdinurl = `https://www.linkedin.com/feed/${quotetext.innerHTML}`
    window.open(linkdinurl, "_blank");
})
quotebtn.addEventListener("click", randomquote);

