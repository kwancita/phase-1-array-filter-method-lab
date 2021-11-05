// Code your solution here

// function findMatching(drivers,string){
    
//     const allName = drivers.filter(obj=>obj.name === string)
//     for (const findDriver of drivers){
//         if (allName === undefined){
//             return [];
//         }else if(allName ){

//         }
//     }
// }



  function findMatching(array,string){
      return array.filter(function (nameMatch){
          return nameMatch.toLowerCase()===string.toLowerCase();
      }
    )
  }

  function fuzzyMatch(array,letters){
    return array.filter(matchName => 
        matchName.indexOf(letters)===0);
  }

  function matchName (array,letters){
      const match = array.filter(obj => obj.name === letters)
      return match
  }



