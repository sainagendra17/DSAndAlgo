function maxSubarraySum(arr,num)
{
    if(arr.length<num)
    {
        return null;
    }
     
    let tempsum=0;
    let maxsum=0;
    for(let i=0;i<num;i++)
    {
        maxsum+=arr[i];
    }
    tempsum=maxsum;
    for(let i=num;i<arr.length;i++)
    {
        tempsum=tempsum-arr[i-num]+arr[i];
        maxsum=Math.max(maxsum,tempsum);
    }
    return maxsum;
}


const max=maxSubarraySum([2,6,9,2,1,8,5,6,3],3);
console.log(max);


//Naive Solution
function maxSubarraySum(arr, num) {
    if ( num > arr.length){
      return null;
    }
    var max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i ++){
      temp = 0;
      for (let j = 0; j < num; j++){
        temp += arr[i + j];
      }
      if (temp > max) {
        max = temp;
      }
    }
    return max;
  }
  
  maxSubarraySum([2,6,9,2,1,8,5,6,3],3)