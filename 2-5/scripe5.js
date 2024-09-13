function isPrime(num) {
    if (num<2) return fals;
    for (let i = 2 ; i<=Math.sqrt(num);i++) {
        if (num % i=== 0) {
            return false;
            
        }
        
    }
    return true;
}

function findPrimeBetween(a,b){
    let primes =[];
    for(let i = Math.min(a,b);i <= Math.max(a,b); i++){
        if (isPrie(i)) {
            primes.push(i);
            
        }
    }
    return primes;
}

function getInputAndFindPrimes(){
    let input1 = prompt ("لطفا عدد اول را وارد کنید.");
    let input2 = prompt ("لطفا عدد دوم را وارو کنید");

    let num1 = parseInt(input1);
    let num2 = parseInt(input2);

    if (isNaN(num1) || isNaN(num2))
    {
        console.log("both inputs must be numbers!");
    }else if (num1 < 1 || num2 > 8)  {
        console.log("the inputs shoud be in the range of 1 to 8.");
    } else{
        let primes = FindPrimesBetween(num1,num2);
        if(primes.length> 0){
            console.log("Prime nimbers between" + num + "and" + num2 + " are:" + primes.join(","));
        }else{
            console.log("there are no prime numbers between"+ num1+"and"+num2+".");
        }
    } 
}
getInputAndFindPrimes();