function validAnagram(input1,input2)
{
  if(input1.length!=input2.length)
  {
    console.log(false);
    return false;
  }
  let firstObject={};
  let secondObject={};
  for(let key of input1)
  {
    firstObject[key]=firstObject[key]?++firstObject[key]:1;
  }

  for(let key of input2)
  {
    secondObject[key]=secondObject[key]?++secondObject[key]:1;
  }

  for(let key in firstObject)
  {
      if(firstObject[key]!=secondObject[key])
      {
        console.log(false);
        return false;
      }
  }
 
  console.log(true);
  return true;
  
}


validAnagram(" "," ");
validAnagram("rat","car");
validAnagram("awesome","awesom");




/// better approach

//  function validAnagram(first, second) {
//       if (first.length !== second.length) {
//        return false;
//       }
    
//       const lookup = {};
    
//       for (let i = 0; i < first.length; i++) {
//         let letter = first[i];
//         // if letter exists, increment, otherwise set to 1
//        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
//       }
//       console.log(lookup)
    
//       for (let i = 0; i < second.length; i++) {
//         let letter = second[i];
//         // can't find letter or letter is zero then it's not an anagram
//         if (!lookup[letter]) {
//           return false;
//        } else {
//           lookup[letter] -= 1;
//        }
//      }
    
//       return true;
//     }
    
//      // {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
//     validAnagram('anagrams', 'nagaramm')
    

