function collectOddValues(arr){
    
    let result = [];
    
    function helper(helperInput)
    {
         if(helperInput.length===0)
         {
            return;
         }

         if(helperInput[0] %2 !==0)
         {
            result.push(helperInput[0]);
         }

         helper(helperInput.slice(1));
    }

    helper(arr);

    return result;

}


const collection=collectOddValues([1,2,3,4,5,6,7,8,9]);

console.log(collection);



function collectOddValuesPureRec(arr)
{
    let oddValues=[];
    if(arr.length===0)
    {
        return oddValues;
    }

    if(arr[0]%2!==0)
    {
        oddValues.push(arr[0]);
    }

    return oddValues=oddValues.concat(collectOddValuesPureRec(arr.slice(1)));
}

const collectionPure=collectOddValuesPureRec([1,2,3,4,5,6,7,8,9]);
console.log(collectionPure);



