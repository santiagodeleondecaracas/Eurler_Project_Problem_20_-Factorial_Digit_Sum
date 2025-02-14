function sumFactorialDigits(n) {
  let factorial = n;
    let bigNumber = 1n;
    let cycle=1n; 
     
     	while(cycle<=factorial){

     		bigNumber=bigNumber*cycle;

     		cycle=cycle+1n;

     	};

    let bingNumberInString=bigNumber.toString();
    let bingNumberInLetters = bingNumberInString.split("");
    let arrayOfNumbers=bingNumberInLetters.map(letter=>parseInt(letter,10));
    let summatoryOfNumber=0;


    	for(let i = 0;i<arrayOfNumbers.length;i++){
             summatoryOfNumber = summatoryOfNumber + arrayOfNumbers[i] 
    	};

  return summatoryOfNumber;
}

sumFactorialDigits(100);
    
    