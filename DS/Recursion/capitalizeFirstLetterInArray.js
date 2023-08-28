function capitalizeFirst (data) {
    let arr=[];
    if(data.length===0)
    {
        return [];
    }
    const firstString = data[0];
    const capitalizedString = firstString[0].toUpperCase() + firstString.slice(1);
    arr.push(capitalizedString);
    arr=arr.concat(capitalizeFirst(data.slice(1)));
    return arr;
  // add whatever parameters you deem necessary - good luck!
}

const d=capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
console.log(d);