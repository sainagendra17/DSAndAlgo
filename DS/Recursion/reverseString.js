function reverseString(str)
{ 
    if(str==="")
    {
        return "";
    }

    return reverseString(str.substr(1))+str[0];

}

const reverse=reverseString("nagendra reddy");
console.log(reverse);