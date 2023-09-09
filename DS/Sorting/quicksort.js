function PivotIndex(arr,start=0,end=arr.length-1)
{
    const swap=(arr,indx1,indx2)=>{
      [arr[indx1],arr[indx2]]=[arr[indx2],arr[indx1]];
    }

    let pivot=arr[start];
    let swapIndx=start;
    for(let i=start+1;i<=end;i++)
    {
        if(pivot>arr[i])
        {
            swapIndx++;
            swap(arr,swapIndx,i);
            
      }
    }

    swap(arr,start,swapIndx);
    return swapIndx;
}

function QuickSort(arr,left=0,right=arr.length-1)
{
   if(left<right)
   {
       let pI=PivotIndex(arr,left,right);
       QuickSort(arr,left,pI-1);
       QuickSort(arr,pI+1,right);
   }

   return arr;
}

console.log(QuickSort([3,8,2,-1]));