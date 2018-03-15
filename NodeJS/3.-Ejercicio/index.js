word = process.argv[2].toLowerCase();
let charactersInWord = [];
let numberOfChar = 0;
let character = {
    char: "",
    thereAre: 0
}

function searchIn(word) {
    for (let i = 0; i < word.length; i++) {
        var allChar = charactersInWord.map(letras => letras.char);
        if (!allChar.includes(word[i])) {
            character.char = word[i];
            charactersInWord.push(Object.assign({}, character));
        }
    }
    charactersInWord.forEach(character => {
        for (let i = 0; i < word.length; i++) {
            if (word[i] == character.char) {
                character.thereAre++;
            }
        }
    });
}
searchIn(word);
console.log(charactersInWord);