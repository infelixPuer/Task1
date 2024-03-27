function plus(string) {
    let firstNumber = Number.parseInt(this);
    
    if (isNaN(firstNumber)) {
        console.error("First string must be a number!");
        return null;
    }

    let secondNumber = Number.parseInt(string);

    if (isNaN(secondNumber)) {
        console.error("Second string must be a number!");
        return null;
    }

    return firstNumber + secondNumber;
};

function minus(string) {
    let firstNumber = Number.parseInt(this);
    
    if (isNaN(firstNumber)) {
        console.error("First string must be a number!");
        return null;
    }

    let secondNumber = Number.parseInt(string);

    if (isNaN(secondNumber)) {
        console.error("Second string must be a number!");
        return null;
    }

    if (firstNumber < secondNumber) {
        console.error("First string must be greater than second string!");
        return null;
    }

    return firstNumber - secondNumber;
};

function divide(string) {
    let firstNumber = Number.parseInt(this);
    
    if (isNaN(firstNumber)) {
        console.error("First string must be a number!");
        return null;
    }

    let secondNumber = Number.parseInt(string);

    if (isNaN(secondNumber)) {
        console.error("Second string must be a number!");
        return null;
    }

    if (secondNumber === 0) {
        console.error("Second string msut not equal zero!");
        return null;
    }

    console.warn("String.divide method only returns integers");
    console.warn("If you need a float result than consider using other method");

    return Number.parseInt(firstNumber / secondNumber);
};

function multiply(string) {
    let firstNumber = Number.parseInt(this);
    
    if (isNaN(firstNumber)) {
        console.error("First string must be a number!");
        return null;
    }

    let secondNumber = Number.parseInt(string);

    if (isNaN(secondNumber)) {
        console.error("Second string must be a number!");
        return null;
    }

    return firstNumber * secondNumber;
};

String.prototype.plus = plus;
String.prototype.minus = minus;
String.prototype.divie = divide;
String.prototype.multiply = multiply;

export { plus, minus, divide, multiply };