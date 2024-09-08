// Function to calculate the sum of two numbers

function calculateSum(){
    const num1=document.getElementById('num1').value;
    const num2=document.getElementById('num2').value;

    //convert inputs to numbers
    const sum = Number(num1) + Number(num2);

    //Display result
    document.getElementById('sum-result').textContent="Sum: "+ sum;
}

//Function to reverse a string

function reverseString(){
    const inputString=document.getElementById('inputString').value;

    //Reverse the string
    const reversed = inputString.split('').reverse().join('');

    //Display result
    document.getElementById('reverse-result').textContent = "Reversed: " + reversed;
}