const generateMeme = document.getElementById("generate-meme-button");
const memeTitle = document.getElementById("meme-title");
const memeImage = document.getElementsByTagName("img")[0];
const memeAuthor = document.getElementById("meme-author");

const updateDetails = (url,title,author)=>{
    memeImage.setAttribute("src",url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = "Meme by: "+author;
}

const generate = ()=>{
    fetch("https://meme-api.com/gimme").then((res)=>
    res.json()).then((data)=>{
        updateDetails(data.url, data.title, data.author);
    });
}

generateMeme.addEventListener("click", generate)

generate();