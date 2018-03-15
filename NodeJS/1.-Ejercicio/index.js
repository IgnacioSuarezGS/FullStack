word = process.argv[2].toLowerCase();
character = process.argv[3].toLowerCase();
numberOfChar = 0;

function searchChar(word, character) {
    if (character.length > 1) {
        while (word.length > 0) {
            let index = word.search(character);
            if (index >= 0) numberOfChar++;
            word = word.substring(index + 1);
            if (index == -1) word = "";
        }
    } else if (character.length == 1) {
        for (let i = 0; i < word.length; i++) {
            if (word[i] == character) {
                numberOfChar++;
            }
        }
    }
    return numberOfChar;
}
let result = searchChar(word, character);
console.log(`Numero de "${character.toUpperCase()}": ${result}`);