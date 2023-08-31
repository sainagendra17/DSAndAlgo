function selectionSort(data)
{
    for(let i=0;i<data.length;i++)
    {
        let lowest=i;
        for(let j=i+1;j<data.length;j++)
        {
           if(data[j]<data[lowest])
           {
               lowest=j;
           }
        }
        if(i!=lowest){
        let temp=data[i];
        data[i]=data[lowest];
        data[lowest]=temp;
        }    
    }
    return data;
}


const SS=selectionSort([8,1,2,-3,4,5,6,7]);
console.log(SS);