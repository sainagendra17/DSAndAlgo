function bubbleSort(data)
{
    let noswap;

    for(let i=data.length;i>0;i--)
    {    noswap=false;
        for(let j=0;j<i-1;j++)
        {
            if(data[j]>data[j+1])
            {
               let temp=data[j];
               data[j]=data[j+1];
               data[j+1]=temp;
               noswap=true

            }
        }
        if(noswap)
        {
            break
        }
    }

    return data;
}


const BS=bubbleSort([8,1,2,-3,4,5,6,7]);
console.log(BS);