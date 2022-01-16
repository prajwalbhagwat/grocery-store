function getBotResponse(input) {
   
    if (input == "hi") {
        return "How are you";
    } else if (input == "good") {
        return "I hope you like this website";
    } else if (input == "yes") {
        return "Give your feedback";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}