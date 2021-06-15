//string
let name='Harry Porter';

//Boolean
let option=true;

//number
let Number=4;

//Array
let shopping=[]; 
shopping=['Beans','Maize','Cabbage','Potato','Kales'];

//Object
let pen={
    type:'ballpoint',
    color:'black',
    cost:15
};

//Array in object
let emily={
    age:17,
    school:'MKU',
    subjects:['Math','English','Biology','Chemistry','Physics']
};

//console.log(emily.subjects[3]);

//Function
function hello(){
    console.log('Hello');
}
//hello();

function product(a,b) {
    return a*b;
}
let x=product(5,2);
//console.log(x);


//Conditonal statement
let number=[];
    numbers=[1,2,1,3,4,1,2];
        if (number[0]==number[2]) {
           // console.log('Correct');
        }

//If Else example:
if (numbers[0]==numbers[4]) {
    //console.log('Correct');

}
else {
    //console.log('Wrong, try again.');
}

//having more than one condition
if(numbers[0]==numbers[2] && numbers[2]==numbers[6]) {
    console.log('Correct');
}
else {
    console.log('Wrong,try again.');
}