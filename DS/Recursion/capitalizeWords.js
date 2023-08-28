function capitalizedWords(data) {
    debugger;
    let arr=[];
    if(data.length===0)
    {
        return [];
    }
    
    arr.push(data[0].toUpperCase());
    arr=arr.concat(capitalizedWords(data.slice(1)));
    return arr;
  // add whatever parameters you deem necessary - good luck!
}


let words = ['i', 'am', 'learning', 'recursion'];
const cap=capitalizedWords(words);
console.log(cap);