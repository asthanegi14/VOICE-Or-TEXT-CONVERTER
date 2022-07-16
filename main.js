// speech to text converter..............


mic.addEventListener("click",function() { //adding event at mic while clicking on the button.
const text = document.querySelector('.text'); //Whatever you speak that will store in this constatnt 'text'.
var speech = true;  

const recognition = new webkitSpeechRecognition(); // // We are creating an object of SpeechRecognition API to make it accessible in chrome also
recognition.interimResults = true; //results that are not yet final. True means they are returning any value

let p = document.createElement("p");//We are creating an another varible 'p' which create an element in HTML document

recognition.addEventListener("result",(e) => {
    text.appendChild(p); //It will append the p at the end of the node of the parant node text
    const texts = Array.from(e.results).map(result => result[0]).map(result => result.transcript) //we are converting string to chracter array

    p.innerText = texts; // assigning the words spoken by user to p

    if(e.results[0].isFinal) // here we check that if the time of first session is completed or not if yes then send a reply.
    {
        if(texts.includes("hello"))//if user say hello
        {
            p = document.createElement("p");//it will create a new element
            p.classList.add("reply");//it will create a class name reply
            p.innerText = "Hi";//and it will send a reply = hi
            text.appendChild(p); //then the reply will append to a div = text
        }
        if(texts.includes("what is your name")){
            p = document.createElement("p");
            p.classList.add("reply");
            p.innerText = "My Name is Jhon";
            text.appendChild(p);
        }
        if(texts.includes("how are you")){
            p = document.createElement("p");
            p.classList.add("reply");
            p.innerText = "I'm fine. What about you?";
            text.appendChild(p);
        }
        if(texts.includes("I am also fine")){
            p = document.createElement("p");
            p.classList.add("reply");
            p.innerText = "That's great";
            text.appendChild(p);
        }
        if(texts.includes("so tell me something about you Jhon")){
            p = document.createElement("p");
            p.classList.add("reply");
            p.innerText = "I'm a reply bot made up with the help of javaScript.";
            text.appendChild(p);
        }
        if(texts.includes("that is interesting")){
            p = document.createElement("p");
            p.classList.add("reply");
            p.innerText = "😊";
            text.appendChild(p);
        }
        if(texts.includes("so what else you can do")){
            p = document.createElement("p");
            p.classList.add("reply");
            p.innerText = "I can sing a song, crack jockes, read a noval and many more things";
            text.appendChild(p);
        }
        if(texts.includes("can you read something for me")){
            p = document.createElement("p");
            p.classList.add("reply");
            p.innerText = "Of course.\n Please enter something in the box given below";
            
            text.appendChild(p);
        }
    }
});

if(speech)
{
    recognition.start();
}
});

//text to speech converter...................


const input = document.querySelector("input"),
sendtext = document.querySelector(".send");// we are creating 2 constants 

function textToSpeech(input)
{
    let u = new SpeechSynthesisUtterance(input);//creating an object of SpeechSynthesisUtterance web api for input
    speechSynthesis.speak(u);//calling speak funtion so that text will be readed by the assistant
}
sendtext.addEventListener("click",(e)=>{//adding event at send while clicking on the button. 
    if(input.value != ""){
            textToSpeech(input.value);
    }
});
