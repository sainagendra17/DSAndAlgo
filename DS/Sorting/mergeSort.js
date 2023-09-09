function merge(arr1,arr2)
{
   let arrlist=[];
   let i=0;
   let j=0;
   while(i<arr1.length && j<arr2.length)
   {
       if(arr2[j]>arr1[i])
       {
          arrlist.push(arr1[i]);
          i++;
       }
       else{
          arrlist.push(arr2[j]);
          j++;
       }
   }
    
   while(i<arr1.length)
   {
    arrlist.push(arr1[i]);
    i++;
   }

   while(j<arr2.length)
   {
    arrlist.push(arr2[j]);
    j++;
   }

   return arrlist;
}

function mergeSort(arr)
{
    if(arr.length<=1)
    {
        return arr;
    }
    let mid=Math.floor(arr.length/2);
    let left=mergeSort(arr.slice(0,mid));
    let right=mergeSort(arr.slice(mid));
    return merge(left,right)

}


let mergearr=mergeSort([3,6,5,2]);
console.log(mergearr);