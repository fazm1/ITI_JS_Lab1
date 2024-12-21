function question1(num1, num2, num3){
    var result = ""
    if(num1 > (num2 > num3)){
        result += num1+", "
        result += num2 > num3? num2+", " : num3+", "
        result += num3 < num2? num3 : num2
    }
    else if ((num1 > num2) < num3){
        result+= num3+", "
        result+= num1 > num2? num1+", " : num2+", "
        result+= num1 < num2? num1: num2
    }
    else{
        result+= num2+", "
        result+= num1 > num3? num1+", " : num3+", "
        result+= num1 < num3? num1: num3
    }
    console.log(result);
    alert("Question1 result: " + result); 
}

function question2(){
    for(var i = 1; i < 101; i++){
        if(i % 5 == 0 && i % 3 == 0){
            console.log("FizzBuzz");
           
        }
        else if( i % 5 == 0){
            console.log("Buzz");
        }
        else if (i % 3 == 0){
            console.log("Fizz");
        }
        else{
            console.log(i);
        }
    }
}

function question3(){
    var sum = 0
    for(var i = 1; i < 1000; i++){
        if(i % 5 == 0 && i % 3 == 0){
            sum+=i;
        }
    }
    console.log("Sum = "+sum)
}

function question4(){
    var fail = 0;
    var sucess = false;
    num = 1
    while(fail !=3 ){
        userInput = prompt("Enter a number between 1-10")
        if ( userInput < 0 || userInput > 10){
            fail++;
            userInput = prompt("Number must be between 1-10. Try again:")
        }
        if (userInput!= num){
            fail++
            if(fail < 3){
                message = confirm("wrong guess, want to try again?");
            }
            if(message == false){
                fail = 3;
            }
        }
        if (userInput == num){
            alert("Good Work")
            sucess = true;
            break;
        }
        if(fail == 3){
            alert("game over")
        }
    }
    
}

function question5(){
    console.log("First 5 happy numbers:")
    console.log(1)
    happyCounter = 1;
    for(var i = 1; happyCounter < 5 ; i++){
            var firstDigit= parseInt(i.toString().charAt(0))
            var secondDigit= parseInt(i.toString().charAt(1))
            var result = firstDigit*firstDigit + secondDigit*secondDigit
            if (result.toString().charAt(0) === '1'){
                console.log(i)
                happyCounter++
            }
    }
}

var q1 = question1(3, -7, 2);
var q2 = question2();
var q3 = question3();
var q4 = question4();
var q5 = question5(); 
