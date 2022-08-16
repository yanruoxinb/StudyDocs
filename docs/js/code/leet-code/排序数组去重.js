

const removeDuplicate = (sortArr)=>{
    let i =  0;
    for(let j=0;j<sortArr.length;j++){
        if(sortArr[i]!==sortArr[j]){
            i++;
            sortArr[i] = sortArr[j];
        }
    }
    return sortArr.slice(0,i+1);
}

console.log(removeDuplicate([0,0,1,1,1,3,4,4,5,6,6,6]));
console.log(removeDuplicate([0,1,1,3,4,4,5,6,6,6,7]));