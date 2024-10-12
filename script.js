// TASK1

function changeText(){
    document.getElementById("demo").innerHTML = "Hello JavaScript";
    document.getElementById("demo1").innerHTML = "JavaScript can do many things.";

}


//Task 5,6

let name = "Daulet";
let age = 19;
let surname = "Kantai";

console.log(`Hello i am  ${name} ${surname}  , im ${age} years old. `);



// Task 7
// let a =3,
// b=4;
// alert(a*b);

// Task 8
function date(){
    var today = new Date();
    var date = today.toDateString();
    document.getElementById("currentDate").innerHTML = date;
}

//Task 9
function leap(year){
    if ((year%4==0 && year % 100 !==0)  || year%400==0){
         return true;
    }else{
        return false;
    }
}
function checkingLeapYear(){
    var year = document.getElementById("yearIn").value
    var res = leap(year);
    if(res){
        document.getElementById("result").innerHTML = "leap year";
    }else{
        document.getElementById("result").innerHTML = "Not leap year";
    }
}
//Task 10

function mult(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    if(isNaN(num1) || isNaN(num2)){
        document.getElementById("resCal").innerText = "No nums";
        return;
    }
    let res = num1*num2;
    document.getElementById("resCal").innerHTML =
    "Multiplication: " + res ;         
}
function divide(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    if(isNaN(num1) || isNaN(num2)){
        document.getElementById("resCal").innerText = "No nums";
        return;
    }
    let res = num1 / num2;
    document.getElementById("resCal").innerHTML =
    "Division: " + res ;
}
function calculateTemp(){
    let c = document.getElementById("input1").value;
    let f = document.getElementById("input2").value;
    if(c != "" && f != ""){
        let cD = (f-32)/9 * 5;
        let fD = c/5 * 9 + 32;
        document.getElementById('resTemp').innerHTML = c + "°C is "+ fD + " °F<br>" + f + "°F is " + cD + "°C";
    }
    else if(c != "" && f == ""){
        let fD = c/5 * 9 + 32;
        document.getElementById('resTemp').innerHTML = c + "°C is "+ fD + " °F";
    }else if(c == "" && f != ""){
        let cD = (f-32)/9 * 5;
        document.getElementById('resTemp').innerHTML = f + "°F is " + cD + "°C";
    }
    else{
        document.getElementById('resTemp').innerHTML = "No values!!!";
    }
    
}


function checkEven(){
    let num = document.getElementById('input12_1').value;
    if(num == "") {
        alert("No num");
        return;
    }
    if (num % 2 == 0){
        document.getElementById('res12').innerHTML = "Even num";
    } else if (num %2 == 1){
        document.getElementById('res12').innerHTML = "Odd num";
    }

}

//Task 13:
function minAndMax(num1,num2,num3){
    let arr = [num1,num2,num3];
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    console.log("Minimum:" + min + "\n" );
    console.log("Maximum:" + max)
    
}
//Task 14
function geron(){
        let a = parseFloat(document.getElementById('sideA').value);
        let b = parseFloat(document.getElementById('sideB').value);
        let c = parseFloat(document.getElementById('sideC').value);

    if (a + b > c && a+c>b && c+b>a){
        let sP = (a+b+c)/2;
        let s = Math.sqrt(sP * (sP-a) * (sP-b) * (sP-c));
        document.getElementById('res14').innerHTML = "S=" + s;

    }else{
        document.getElementById('res14').innerHTML = "Invalid triangle";
    }
}

//function 15
function factorial(n){
    if(n == 1 || n == 0) return 1;
    return factorial(n-1) * n;
}
console.log(factorial(5));

//function 16
function countVowels(str){
    str = str.toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    resVowels = 0;
    resConsonants = 0;

    for (let char of str){
        if (vowels.includes(char)){
            resVowels++;
        }else{
            resConsonants++;
        }
    }
    console.log("Vowels:"+resVowels + " .Consonants:"+resConsonants);

}
//function 17
function transform(seconds){
    let hours = Math.floor(seconds/3600);
    let minutes = (seconds % 3600) / 60;
    console.log("Hours:"+hours + " minutes:"+minutes);
}
 transform(1100);

 //function 18;

 function freqent(arr){
    let freqentarr = [];
    for (let i in arr){ // [1,2,3,4,1]
        for (let j = 0; j < arr.length ; j++){
            if (arr[i] == arr[j]){
                if (freqentarr[i] >= 1){
                    freqentarr[i]++;
                }else if(freqentarr[i] == undefined ){
                    freqentarr[i] = 1;
                }
            }
        }
    }
    let maxFreqent = freqentarr[0];
    let index = 0;
    for (let i = 0; i<freqentarr.length;i++){
        if(freqentarr[i] > maxFreqent){
            maxFreqent = freqentarr[i];
            index = i;
        }
    }
    console.log(arr[index]);
 }
//  freqent([3, 7, 3, 1, 3, 7, 8, 1, 7, 7]);

//Task 19
function fibonacci(n){
    if ( n == 1 || n == 2){
        return 1;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}
// console.log(fibonacci(7));

//Task 20
function newYear(){
    const today = new Date();
    const currentYear = 2024;
    const newYear = new Date(currentYear + 1 , 0,1);
    let diff = newYear - today;
    return Math.ceil(diff / (1000*60 * 60 *24));
}
console.log(newYear());

