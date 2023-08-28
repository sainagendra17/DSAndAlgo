function stringifyNumbers(data)
{
    for(let item in data)
    {
        if(typeof data[item]=='number')
        {
            data[item]=data[item].toString();
        }
        
        if(typeof data[item]=='object')
        {
            stringifyNumbers(data[item]);
        }
    }
    
    return data;
}


var obj1 = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

var obj2={
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}

const oh=stringifyNumbers(obj1);
const oh2=stringifyNumbers(obj2);
console.log(oh);
console.log(oh2);