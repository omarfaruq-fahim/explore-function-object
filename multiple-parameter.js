function addTowNumbers(number1, number2){
    console.log(number1, number2);
    var total = number1 + number2;
    return total;
}

var firstNumber = 35;
var secondNumber = 47;
var result = addTowNumbers(firstNumber, secondNumber);
console.log('result value: ', result);


function multiplyTowNumbers(num1, num2){
    var result = num1 * num2;
    return result;
}

var total = multiplyTowNumbers(5, 100);
console.log('total after multiplication: ', total);


function oddTowNumber(num1, num2){
    var result = num1 - num2;
    return result;
}

var total = oddTowNumber(29, 35);
console.log('Total after odd_numbers: ', total);


function dividedTowNumber(num1, num2){
    var result = num1 / num2;
    return result;
}

var total = dividedTowNumber(45, 8);
console.log('Total after divided_numbers: ', total);

