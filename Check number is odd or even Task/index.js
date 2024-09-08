//Function expression to check if the number is even or odd

const checkEvenOdd = function(){
    const number = document.getElementById('number').value;

    if (number === ''){
        document.getElementById('evenodd-result').textContent = "Please enter a number.";
        return;
    }
    
    const result = Number(number) % 2 === 0 ? "Even" : "Odd";
    document.getElementById('evenodd-result').textContent = "The number is:" + result;
};
