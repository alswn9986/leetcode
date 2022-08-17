const alphabet = {
    a: '.-', b: '-...',   c: '-.-.', d: '-..', e: '.', f: '..-.', g: '--.', h: '....', i: '..',  j: '.---',  k: '-.-',  l: '.-..', m: '--',
    n: '-.',  o: '---', p: '.--.',  q: '--.-',  r: '.-.', s: '...', t: '-', u: '..-', v: '...-', w: '.--', x: '-..-',  y: '-.--', z: '--..' 
}

/**
 * @param {string[]} words the word array to convert to morse
 * @return {number} the length of unique morse representations
 */
const uniqueMorseRepresentations = words => {  
    // PREVIOUS SOLUTION:
    // return [...new Set(words.map(word => word.split('').map(letter => alphabet[letter]).join('')))].length

    // Edited on 9-9-2019
    return new Set(words.map(word => word.split('').map(letter => alphabet[letter]).join(''))).size
}