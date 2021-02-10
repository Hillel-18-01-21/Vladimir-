alert("Hello, let's count?");

let history = [];

do {
    const result = Calculations();
    if (result) {
        history.push(result);
        alert(`result is ${result.operationResult}`);
    }
    
}while (confirm('Some more operations?'));



function Calculations() {
    const operation = requestOperation();
    if (operation === 'history' ) {
        const formattedHistory = formatHistory(history);
        console.log(formattedHistory);
        alert(formattedHistory);
        return;
    }
    
    let OperandOne;
    let OperandTwo;
    let result = {
        operation: operation,
        operands: [OperandOne]
    }
    
    OperandOne = AskNumber("Give me first number: ");
    result.operands.push(OperandOne);

    switch (operation) {
        case '+':
        case '-':
        case '*':
        case '/':
            OperandTwo = AskNumber('Give me the second one: ');
            result.operands.push(OperandTwo);
            break;
    }
    
    const sumResult = sum(OperandOne, OperandTwo);
    
    const diffResult = diff(OperandOne, OperandTwo);
    
    const multResult = mult(OperandOne, OperandTwo);
    
    const divResult = div(OperandOne, OperandTwo);

    let operationResult;
    
    switch (operation) {
        case '+':
            operationResult = sumResult;
            break;
        case '-':
            operationResult =  diffResult;
            break;
        case '*':
            operationResult =  multResult;
            break;
        case '/':
            operationResult =  divResult;
            break;
        case 'sin':
            operationResult =  Math.sin(OperandOne);
            break;
    }
    result.operationResult = operationResult;
    return result;
}

function sum (a, b) {
   const result = a + b;
   return result;
}

function diff (a, b) {
    const result = a - b;
    return result;
}

function mult (a, b) {
    const result = a * b;
    return result;
}

function div (a, b) {
    const result = a / b;
    return result;
}

function formatHistory(list) { 
    let formatResult = '';
    for (let i = 0; i < list.length; i++) {
        formatResult += `${i + 1}, operation ${list[i].operation}, 
        operands ${list[i].operands},
        result ${list[i].operationResult}\n`;
    }
    return formatResult;
 }

function requestOperation () {
    let operation;
    while (!operation) {
        let service = prompt('What do you want to do? ( + , - , * , / , sin , history ): ')
        switch (service) {
            case '+':
            case '-':
            case '*':
            case '/':
            case 'sin':
            case 'history':
                operation = service;
                break;
        }
    }
    return operation;
}

function AskNumber(ask) {
    let result;
    do {
        result = +prompt(ask);
    } while (result != result);
    return result;
}

 


