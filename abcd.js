// function toggleChatbot() {
//     const chatbotPopup = document.getElementById('chatbot-popup');
//     if (chatbotPopup.style.display === 'none' || chatbotPopup.style.display === '') {
//         chatbotPopup.style.display = 'block';
//     } else {
//         chatbotPopup.style.display = 'none';
//     }
// }

// function appendMessage(content, className) {
//     const chatbotBody = document.getElementById('chatbot-body');
//     const messageElement = document.createElement('div');
//     messageElement.classList.add('chatbot-message', className);
//     messageElement.innerText = content;
//     chatbotBody.appendChild(messageElement);
//     chatbotBody.scrollTop = chatbotBody.scrollHeight; 
// }

// function handleUserInput() {
//     const userInput = document.getElementById('chatbot-input').value.toLowerCase();
//     if (userInput.trim() === '') return;

//     appendMessage(userInput, 'user-message');

//     let response;
//     switch(userInput) {
//         case 'hii':
//             response = "Hello! Welcome to INSIGHT, your fashion-savvy assistant. Curious about trendy fashion, classy colors, or stylish combinations? Ask away!";
//             break;
//         case 'what colors are popular right now?':
//             response = "Bold colors such as fiery red and mustard yellow are popular. For a softer look, try blush pink or lavender.";
//             break;
//         case 'what could be the preferable color for the sundress?':
//             response = "For a summer party, a sundress in vibrant colors like coral, turquoise, or sunny yellow would be perfect. These shades complement floral prints beautifully and create a cheerful, chic look.";
//             break;
//         case 'what makeup trends are popular right now?':
//             response = "Glowy skin with a natural finish, bold eyeliner, and soft, rosy blush are popular makeup trends. Experimenting with colorful eyeshadow is also on-trend.";
//             break;
//         case 'how can i update my wardrobe on a budget?':
//             response = "Try incorporating versatile pieces like a classic denim jacket or neutral blazers. Shopping second-hand or during sales can also help you find great deals.";
//             break;
//         case 'can you suggest a trendy outfit for a summer party?':
//             response = "For a summer party, consider a flowy sundress in a bright floral print, paired with strappy sandals and a woven bag for a chic look.";
//             break;
//         default:
//             response = "I'm sorry, I didn't understand that. Could you please rephrase your question?";
//     }

//     appendMessage(response, 'bot-message');
//     document.getElementById('chatbot-input').value = '';
// }













function toggleChatbot() {
    const chatbotPopup = document.getElementById('chatbot-popup');
    if (chatbotPopup.style.display === 'none' || chatbotPopup.style.display === '') {
        chatbotPopup.style.display = 'block';
    } else {
        chatbotPopup.style.display = 'none';
    }
}

function appendMessage(content, className) {
    const chatbotBody = document.getElementById('chatbot-body');
    const messageElement = document.createElement('div');
    messageElement.classList.add('chatbot-message', className);
    messageElement.innerText = content;
    chatbotBody.appendChild(messageElement);
    chatbotBody.scrollTop = chatbotBody.scrollHeight; // Auto-scroll to the bottom
}

function handleUserInput() {
    const userInput = document.getElementById('chatbot-input').value.toLowerCase();
    if (userInput.trim() === '') return;

    appendMessage(userInput, 'user-message');

    let response;
    switch(userInput) {
        case 'hii':
            response = "Hello! 🌟 Welcome to INSIGHT, your fashion-savvy assistant. Curious about trendy fashion, classy colors, or stylish combinations? Ask away!";
            break;
        case 'what colors are popular right now?':
            response = "Bold colors such as fiery red and mustard yellow are popular. For a softer look, try blush pink or lavender.";
            break;
        case 'what could be the preferable color for the sundress?':
            response = "For a summer party, a sundress in vibrant colors like coral, turquoise, or sunny yellow would be perfect. These shades complement floral prints beautifully and create a cheerful, chic look.";
            break;
        case 'what makeup trends are popular right now?':
            response = "Glowy skin with a natural finish, bold eyeliner, and soft, rosy blush are popular makeup trends. Experimenting with colorful eyeshadow is also on-trend.";
            break;
        case 'how can i update my wardrobe on a budget?':
            response = "Try incorporating versatile pieces like a classic denim jacket or neutral blazers. Shopping second-hand or during sales can also help you find great deals.";
            break;
        case 'can you suggest a trendy outfit for a summer party?':
            response = "For a summer party, consider a flowy sundress in a bright floral print, paired with strappy sandals and a woven bag for a chic look.";
            break;
        default:
            response = "I'm sorry, I didn't understand that. Could you please rephrase your question?";
    }

    appendMessage(response, 'bot-message');
    document.getElementById('chatbot-input').value = '';
}
