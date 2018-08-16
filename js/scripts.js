'use strict';
var num = "2+2";
//console.log(eval(num));

var arr2 = [1, 2, 3, 4];
console.log(arr2);
arr2.pop();
console.log(arr2);
console.log("2sdfvdf");

const buttons = document.querySelectorAll('input[type=button]');
const result = document.querySelector('#res');
var arr = [];

for (let i in buttons) {
//    console.log(buttons[i].value);
    buttons[i].addEventListener('click', function(e) {
        if (e.target.value == "=") {
            var res1 = eval(result.value);
            arr = [res1];
            result.value = arr[0];
            return;
        }
        
        if (e.target.value == "C") {
            result.value = "";
            arr = [];
            return;
        }
        
//        console.log(e.target.value);
        
        arr.push(e.target.value);
        if(arr[arr.length-1] == "." && arr[arr.length-2] == ".") {
            arr.pop();
        }
        
        
        
//        if(result.value.slice(-1) == "." && result.value.slice(-1) == ".") {
//            result.value = result.value.slice(0,-1);
//        }
//        
        console.log(arr);
        result.value = "";
        for (let j in arr) {
            result.value += arr[j];
        }
        
//        result.value += e.target.value;
    });
    
    
};


