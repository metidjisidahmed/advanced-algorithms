console.log("is function important ?")

function recursion(n){
    if(n<=1){
        return 1
    }else{
        return n* recursion(n-1)
    }
}


function greet(nom){
    return "Hello "+nom +" !"
}

function greetV2(nom){
    return `Hello ${nom} !`
}

function testingparity(number){
    if(number%2 ===0){
        return `${number} is pair`
    }else{
        return `${number} is impair`

    }
}

function testingparity(number){
    let result =  number%2==0 ? `${number} is pair` : `${number} is impair`
    number%2==0 ? console.log(`${number} is pair`) : console.log(`${number} is impair`)

    // number%2==0 ? console.log(`${number} is pair`) : console.log(`${number} is impair`)

    // if(number%2 ===0){
    //     return `${number} is pair`
    // }else{
    //     return `${number} is impair`
    //
    // }
}


function functionName1(argName) {
    console.log(argName)
}



const functionName2 = argName => {
    console.log(argName)

}


const functionName3 = (argName , argName2) => {
    console.log(argName)

}

let  printArrayElements= (array)=>{
    for(let i =0 ; i < array.length ; i++){
        console.log(array[i])
    }
}

 let  printArrayElementsV2= (array)=>{
    array.forEach((elem , index)=>{
        console.log(elem , index)
    })

}

function filterNegative(array){
    let result = array.filter((elem)=>{
        return elem>=0 ? false :true
    })
    return result
}

function mergeString(...args){
    console.log("args= ",args)
    // args[0]
    // args[1]
    //     ..etc
}

//
// modules.exports = {
//     filterNegative , printArrayElementsV2
// }
