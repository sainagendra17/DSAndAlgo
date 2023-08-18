function countUniqueValues(arr)
{
    if(arr.length==0)
    {
        return 0;
    }
    
    let i=0;
    let j=1;
    while(j<arr.length)
    {
        if(arr[i]==arr[j]){
           j++;
        }
        else if(arr[i]!==arr[j])
        {
            arr[i+1]=arr[j];
            i=i+1;
            j++;
        }
    }
    return i+1;
}


const count=countUniqueValues([1,1,1,1,2]);
const count1=countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]);
console.log(count);
console.log(count1);