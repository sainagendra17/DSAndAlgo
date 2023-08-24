function reverseNumber(n)
{
   var digits=parseInt(Math.log10(n))+1;
   return helper(n,digits);
}

function helper(n,digits)
{
  if(n%10==n)
  {
    return n;
  }
  var rem=n%10;

  return rem*Math.pow(10,digits-1)+helper(parseInt(n/10),digits-1);
  
}



const data=reverseNumber(6789);
console.log(data);