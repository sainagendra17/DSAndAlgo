function InsertionSort(data)
{
    debugger;
    for(let i=1;i<data.length;i++)
    {
        for(let j=0;j<i;j++)
        {
            if(data[i]<data[j])
            {
                let temp=data[i];
                data.splice(i,1);
                data.splice(j,0,temp);
            }
        }

    }

    return data;
}

function insertionSort(arr){
	var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

insertionSort([2,1,9,76,4])


const IS=InsertionSort([8,1,2,-3,4,5,6,7]);
const IS1=InsertionSort([8,1,-2,-3,4,5,6,-7]);
console.log(IS1);