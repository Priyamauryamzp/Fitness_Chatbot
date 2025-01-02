var sendBtn = document.getElementById('sendBtn');
var textbox = document.getElementById('textbox');
var chatContainer = document.getElementById('chat-Container');
var user= {message:""};


var array_Of_Possible_Message = [{
  message: ["what is your full name?","what is your name?"],
  response: "My full name is Priya maurya."
},
{
  message: "what is your gender?",
  response: "I identify as female."
},
{
  message: "what is your highest qualification?",
  response: "I hold a Btech 3rd year degree in Computer Science from United Institute of Technology."
},
{
  message: "can you tell me about your professional experience?",
  response: "Certainly. I am a fresher but passionate to work in the company on data scientist role."
},
{
  message: "what are your career goals?",
  response: "My career goal is to become one of the best data scientist and develop solutrions on the data present on the web. I'm committed to continuous learning and growth to achieve these goals."
}
// Add more questions and responses as needed
];

var dataset = []; 


fetch('./data/dataset.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to load dataset.json');
    }
    return response.json();
  })
  .then(data => {
    dataset = data; // Assign the data to the dataset variable
  })
  .catch(error => {
    console.error('Error loading dataset:', error);
  });



function sendMessage(text){
  //const userIn= document.getElementById(userInput);
  
 const message = text.trim();

  
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  messageElement.textContent = message;
 messageElement.style.textAlign= "right";
 messageElement.style.margin="4px";
  messageElement.innerHTML="<div class='msg-container'><span> You: </span>"+
                           "<span>" +text+"</span></div>";
   chatContainer.appendChild(messageElement);
  //message.value='';
  //chatBox.scrollTop= chatBox.scrollHeight;
  chatBotResponse(text);

}
function chatBotResponse(text) {
  var chatBotmessage = "";

  if (text.toLowerCase() === "hi" || text.toLowerCase() === "hello") {
    chatBotmessage = "hello";
  } else if (text.length > 5) {
    var result = dataset.find(entry => entry.prompt.toLowerCase() === text.toLowerCase());
    if (result) {
      chatBotmessage = result.response;
    } else {
      chatBotmessage = "I don't understand that. Please try another message that is related to fitness.";
    }
  } else {
    chatBotmessage = "Please send a longer message.";
  }

  var messageElement = document.createElement('div');
  messageElement.style.textAlign = "left";
  messageElement.style.margin = "4px";
  messageElement.innerHTML = `<span>Chatbot: </span><span>${chatBotmessage}</span>`;
  chatContainer.appendChild(messageElement);
}
sendBtn.addEventListener('click',function(e){
  var text = textbox.value;
   
  if(text=="")
  {
   alert("Please type a message!!");
  }
  else{
   let userMessageText = text.trim();
   user.message= userMessageText;
   textbox.value ="";
     sendMessage(text);
  }
 })


//chatContainer.appendChild(messageElement);
    //response from chatbot   

 

 /* setTimeout(()=>{messageElement.classList.add('message');
 messageElement.textContent = message;
  chatBox.appendChild(messageElement);
   userInput.value='';
   chatBox.scrollTop = chatBox.scrollHeight;
      },1000)*/