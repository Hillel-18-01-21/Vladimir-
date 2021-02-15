alert('Hello, I can sort your numbers, let`s try')

let arrLength;
let massiv = [];
let result = [];

do {
    arrLength = requestNumber('How many numbers would you like to be sorted?')
} while(arrLength <= 3);

for (let i = 0; i < arrLength; i++) {
    massiv.push(requestNumber('Give me number: '));
}

massiv = sort(massiv);
showHistory(massiv);
alert(result.join('\n'));

function showHistory(arr) {
    const length = arr.length;
    for (let i = 0; i < length; i++) {
        let answer = `${i + 1}. ${arr[i]}`;
        console.log(answer);
        result.push(answer)
    }
}

function sort(arr) {
    const length = arr.length;
    for(let i = 0; i <length; i++) {
            if (arr [i] > arr[i + 1]) {
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            } 
        }
    return arr;
}   

function requestNumber(massage) {
    let result;
    do {
        result = +prompt(massage)
    } while (result != result);
    return result;
}
