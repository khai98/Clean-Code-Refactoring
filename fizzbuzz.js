var FizzBuzz =  {
    fizzBuzz: function (number){
        var isFizz = number % 3 == 0;
        var isBuzz = number % 5 == 0;

        if(isFizz && isBuzz)
            return "FizzBuzz";
        if(isFizz)
            return "Fizz";
        if(isBuzz)
            return "Buzz";
        return number + "";
    }
};

