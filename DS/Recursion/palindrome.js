function isPalindrome(item){
    // add whatever parameters you deem necessary - good luck!
    if(item.length<=1)
    {
        return true;
    }
    if(item[0]===item[item.length-1])
    {
        return isPalindrome(item.substring(1,item.length-1))
    }
    else
    {
       return false;
    }
  }

  isPalindrome('amanaplanacanalpandemonium');