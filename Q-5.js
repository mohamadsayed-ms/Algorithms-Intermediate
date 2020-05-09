/*5. Remove the Negative

Given any array X, for example [1,-2,4,1], 
remove the negative numbers, so that the output becomes: [1,4,1]. */

let x =[1, -2, 4, 1]

let positive = []

for( let i = 0; i <= x.length -1; i++){
    if(x[i] >= 0){
        positive.push(x[i])
    }
    
}
console.log(positive)