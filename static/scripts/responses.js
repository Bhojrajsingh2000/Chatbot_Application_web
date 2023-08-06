function getBotResponse(input) {
    //rock paper scissors
    if (input == "good morning") {
        return "Good Morning &#128515; " ;
    } else if (input == "hi") {
        return "Hello Dear ! I am ChatBot";
    } else if (input == "Hi") {
        return "Hello Dear ! I am ChatBot";
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
