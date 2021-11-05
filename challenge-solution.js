let mixedLetters = ['b', 'd', 'a', 'c', 'f', 'e'];

let moreMixedLetters = [...mixedLetters, 'h', 'k', 'g', 'j', 'i', 'l'];

console.log(moreMixedLetters);

/*const updateSortReverse = (arr, ...letters) => {
    let copyArr = [...arr];
    for(let i of letters){
        copyArr.push(i);
    }
    
    return copyArr.sort().reverse();
};
*/

const updateSortReverse = (arr, ...letters) => [...arr, ...letters].sort().reverse();


let reverseSort = updateSortReverse(moreMixedLetters, 'n', 'm', 'o');

console.log(reverseSort);
console.log(mixedLetters);