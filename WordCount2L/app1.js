const wordcounter = document.getElementById("wordcounter");

const totalWord = document.getElementById("totalWord");
const totalCharWithSpace = document.getElementById("totalCharWithSpace");
const totalCharWithoutSpace = document.getElementById("totalCharWithoutSpace");
const totalSpecialChar = document.getElementById("totalSpecialChar");
const totalReadTime = document.getElementById("totalReadTime");

wordcounter.addEventListener("input", function () {
    let text = this.value;

    totalWord.innerHTML = getTotalWords(text);
    totalCharWithSpace.innerHTML = getTotalCharsWithSpaces(text);
    totalCharWithoutSpace.innerHTML = getTotalCharsWithoutSpaces(text);
    totalSpecialChar.innerHTML = getTotalSpecialChars(text);
    totalReadTime.innerHTML = getTotalReadTime(text);
});

function getTotalWords(text) {
    let words = text.trim().split(/\s+/);
    let cleanList = words.filter(elm => elm !== "");
    return cleanList.length;
}

function getTotalCharsWithSpaces(text) {
    return text.length;
}

function getTotalCharsWithoutSpaces(text) {
    return text.replace(/\s+/g, "").length;
}

function getTotalSpecialChars(text) {
    return (text.match(/[^a-zA-Z0-9\s]/g) || []).length;
}


function getTotalReadTime(text) {
    let wordCount = getTotalWords(text);
    return wordCount > 0 ? Math.ceil(wordCount / 200) : 0;
}


// const wordcounter = document.getElementById("wordcounter");

// wordcounter.addEventListener("input", function () {
//     let text = this.value;
    
//     // Character count (including spaces)
//     let charWithSpaces = text.length;
//     document.getElementById("totalCharWithSpace").innerHTML = charWithSpaces;

//     // Character count (excluding spaces)
//     let charWithoutSpaces = text.replace(/\s+/g, "").length;
//     document.getElementById("totalCharWithoutSpace").innerHTML = charWithoutSpaces;

//     // Word count (splitting by whitespace)
//     let words = text.trim().split(/\s+/);
//     let cleanList = words.filter(elm => elm !== "");
//     let wordCount = cleanList.length;
//     document.getElementById("totalWord").innerHTML = wordCount;

//     // Special character count (excluding letters, digits, and spaces)
//     let specialCharCount = (text.match(/[^a-zA-Z0-9\s]/g) || []).length;
//     document.getElementById("totalSpecialChar").innerHTML = specialCharCount;

//     // Estimated reading time (assuming 200 words per minute)
//     let readTime = wordCount > 0 ? Math.ceil(wordCount / 200) : 0;
//     document.getElementById("totalReadTime").innerHTML = readTime;
// });




