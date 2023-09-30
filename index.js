// Code your solution here
function findMatching(array,string){
    let newArray=[]
    for(let item of array){
        if(item.toLowerCase()===string.toLowerCase()){
           newArray.push(item)
        }
    }
    return newArray
}

function fuzzyMatch(array,string){
    let newArray=[]
    for(let item of array){
        if(item.substring(0,1)===string.substring(0,1)){
            newArray.push(item)
        }
    }
    return newArray
}

function matchName(array,string){
    let newArray=[]
    for(let item of array){
        if(item.name===string){
            newArray.push(item)
        }
    }
    return newArray
}