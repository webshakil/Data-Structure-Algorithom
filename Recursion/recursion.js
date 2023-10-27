// function takeShower(){
//     return "Showering!"
// }

// function eatBreakfast(){
//     let meal = cookFood()
//     return `Eating ${meal}`
// }

// function cookFood(){
//     let items = ["Oatmeal", "Eggs", "Protein Shake"]
//     return items[Math.floor(Math.random()*items.length)];
// }
// function wakeUp() {
//     takeShower()
//     eatBreakfast()
//     console.log("Ok ready to go to work!")
// }

// wakeUp()

// function conutDown(num){
//     if(num<=0){
//         console.log("All Done!");
//         return;
//     }
//     console.log(num);
//     num--;
//     conutDown(num);
// }

// //console.log(conutDown(3))
// conutDown(3)

// function countDown(num){
//     for(var i =num; i>0; i--){
//         console.log(i)
//     }
//     console.log("All done")
// }

// countDown(5)

//Part-8
// function sumRange(num){
//     if(num === 1) return 1; 
//     return num + sumRange(num-1);
//  }
 
//  console.log(sumRange(4))

// function factorial(num){
//     let total = 1;
//     for(let i = num; i > 1; i--){
//         total *= i
//     }
//     return total;
// }
// console.log(factorial(4))
// function factorial(num){
//     if(num === 1) return 1;
//     return num * factorial(num-1);
// }
// console.log(factorial(6))


//another new
// function collectOddValues(arr){
//     let result = [];
//     function helper(helperInput){
//         if(helperInput.length === 0) {
//             return;
//         }
//         if(helperInput[0] % 2 !== 0){
//             result.push(helperInput[0])
//         }
//         helper(helperInput.slice(1))
//     }
    
//     helper(arr)

//     return result;
// }

// console.log(collectOddValues([1,2,3,4,5,6,7,8,9]))

function collectOddValues(arr){
    let newArr = [];
    
    if(arr.length === 0) {
        return newArr;
    }
        
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }
        
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

console.log(collectOddValues([1,2,3,4,5,6,7]))
                                        
                                                                
                                                                             
                            
            