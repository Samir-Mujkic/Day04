function main(numOne,numTwo){
    //Only change code below this code
    
    var quotient;
    if(numTwo===0){

     quotient= "divide by 0 ! Cannot divide by zero!" ;

    }else {
         quotient =numOne/numTwo;
    }

    //Only change code above this line
    return quotient;
}
    console.log(main(15,3));
    console.log(main(25,5));
    console.log(main(420,10));
    console.log(main(55,0));
    module.exports=main;
    