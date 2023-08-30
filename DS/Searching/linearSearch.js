function linearSearch(data,val){
    // add whatever parameters you deem necessary - good luck!
    var itemindex=-1;
    for(let i=0;i<data.length;i++){
        if(data[i]===val)
        {
           itemindex=i;
           break;
        }
         
    }
    
    return itemindex;
  }


const ls1=linearSearch([10, 15, 20, 25, 30], 15) // 1
const ls2=linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)

console.log(ls1);
console.log(ls2);