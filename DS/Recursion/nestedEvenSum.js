function nestedEvenSum (data) {
    // add whatever parameters you deem necessary - good luck!
         let n=0;
        for(let obj in data)
        {
            if(typeof data[obj] ==="object")
            {
                n+=nestedEvenSum(data[obj]);
            }
            if(!isNaN(data[obj]) && data[obj]%2===0)
            {
                n+=data[obj];
            }
        }
  
        return n;
  }

  var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }
  
  const fff=nestedEvenSum(obj1);
  console.log(fff);