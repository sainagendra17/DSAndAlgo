
function power(base,num){
    if(num<1)
    {
        return 1;
    }
    return base*power(base,num-1);
}
console.log(power(2,4));