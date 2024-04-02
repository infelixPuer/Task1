const COMPARISON = {
    LESSER: 0,
    EQUAL: 1,
    GREATER: 2,
}

function plus(string) {
    let shortStr = this.length > string.length ? string : this;
    let longStr = this.length > string.length ? this : string;
    let shortStrDigits = shortStr.split("").map(Number);
    let longStrDigits = longStr.split("").map(Number);
    let result = [];
    let additional = 0;
    let addRes = "";
    let i, j = 0;

    for (i = longStr.length - 1, j = shortStr.length - 1; j >= 0; --i, --j) {
        let longStrNum = longStrDigits[i];
        let shortStrNum = shortStrDigits[j];
        addRes = ((longStrNum + shortStrNum) + additional).toString();
        additional = addRes.length === 2 ? 1 : 0;
        result.push(addRes.at(additional));
    }

    if (i < 0 && additional === 0) return result.reverse().join("");

    if (i < 0) {
        result.push(additional.toString());
        return result.reverse().join("");
    }

    for (; i >= 0; --i) {
        if (additional === 0) {
            result.push(longStr.at(i));
            continue;
        }

        let longStrNum = Number.parseInt(longStr.at(i));
        addRes = (longStrNum + additional).toString();
        additional = addRes.length === 2 ? 1 : 0;
        result.push(addRes.at(additional));
    }

    if (additional !== 0) result.push(additional);

    return result.reverse().join('');
}

function minus(string) {
    if (compareStrings(this, string) === COMPARISON.LESSER) {
        console.error("Second string must be less of equal to first string");
        return null;
    }

    let result = [];
    let firstStrDigits = this.split("").map(Number);
    let secondStrDigits = string.split("").map(Number);
    let i = 0, j = 0, k = 1;

    for (i = firstStrDigits.length - 1, j = secondStrDigits.length - 1; j >= 0; --i, --j) {
        if (firstStrDigits[i] < secondStrDigits[j]) {
            while (true) {
                if (firstStrDigits[i - k] === 0) {
                    firstStrDigits[i - k] = 9;
                    ++k;
                } else {
                    --firstStrDigits[i - k];
                    break;
                }
            }

            result.push(firstStrDigits[i] + 10 - secondStrDigits[j]);
            continue;
        }

        result.push(firstStrDigits[i] - secondStrDigits[j]);
    }

    for (; i >= 0; --i) {
        result.push(firstStrDigits[i]);
    }

    result.reverse();

    while (result[0] === 0 && result.length > 1) result.shift();

    return result.join("");
}


function multiply(string) {
    let digits = this.split("").map(Number);
    let result = "0";
    let buffer;
    let zeros = "";

    for (let i = this.length - 1; i >= 0; --i) {
        let numChar = digits[i];
        buffer = numChar === 0 ? "0" : string;

        for (let j = 0; j < numChar - 1; ++j) {
            buffer = buffer.plus(string);
        }

        buffer = buffer.concat(zeros);
        result = result.plus(buffer);
        zeros = zeros.concat("0");
    }

    return result;
}

function divide(string) {
    let dividendDigits = this.split("").map(Number);
    let result = "";
    let partDividend= "";

    for (let i = 0; i < dividendDigits.length; ++i) {
        partDividend += dividendDigits[i];
        let j = 0;
        while (compareStrings(partDividend, string) >= COMPARISON.EQUAL) {
            partDividend = partDividend.minus(string);
            ++j;
        }
        result += j;
    }

    return result.replace(/^0+/, "") || "0";
}

function compareStrings(str1, str2) {
    let buf = str1.replace(/^0+/, "");
    str1 = buf === "" ? "0" : buf;

    if (str1.length < str2.length) return COMPARISON.LESSER;

    if (str1.length === str2.length) {
        for (let i = 0; i < str1.length; ++i) {
            let firstStrNum = Number.parseInt(str1.at(i));
            let secondStrNum = Number.parseInt(str2.at(i));

            if (firstStrNum < secondStrNum) return COMPARISON.LESSER;
            if (firstStrNum > secondStrNum) return COMPARISON.GREATER;
        }
    }

    return COMPARISON.EQUAL;
}

String.prototype.plus = plus;
String.prototype.minus = minus;
String.prototype.divide = divide;
String.prototype.multiply = multiply;

export { plus, minus, divide, multiply }