
function flatten(arr){
    let flattendArray=[];
    for(let i=0;i<arr.length;i++)
    {
        if(Array.isArray(arr[i]))
        {
            flattendArray=flattendArray.concat(flatten(arr[i]))
        }
        else
        {
            flattendArray.push(arr[i])
        }
    }
    return flattendArray;
}
function flattenUsingReduce(arr){
    
   return arr.reduce((accumulator,currentValue)=>{
        if(Array.isArray(currentValue))
        {
           return accumulator=accumulator.concat(currentValue)
        }
        else
        {
           return accumulator.concat(currentValue)
        }
    },[])
        
}
const flattenArrayReduce=flattenUsingReduce([1,3,[4,6,[5,6,[6]]],6]);
console.log(flattenArrayReduce);

const flattenArray=flatten([1,3,[4,6,[5,6,[6]]],6]);
console.log(flattenArray);

