function collectStrings(data)
{
    let arr=[];
    for(let item in data)
    {
        if(typeof data[item] == 'string')
        {
            arr.push(data[item])
        }
        if(typeof data[item]== 'object')
        {
            arr=arr.concat(collectStrings(data[item]))
        }
    }
    
    return arr;
}


const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

const colStrings=collectStrings(obj) // ["foo", "bar", "baz"])
console.log(colStrings);