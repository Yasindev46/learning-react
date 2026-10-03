
const random='7756903575'

// const biggestNum=random.split('').sort((acc,cur)=>acc>cur?1:-1).pop()

const findBigNum=(num)=>{
    let bigNum=0
    const numArr=num.split('')
    for(i=0;i<=numArr.length;i++){
        if(numArr[i]>bigNum){
        bigNum=numArr[i]
        }
    }
    return bigNum
}

const sumOfNums=(num)=>{
    let sum=0
    const numArr=num.split('')
    for (i=0;i<numArr.length;i++){
        sum=sum+(Number(numArr[i]))
    }
    return sum
}

const findSecondBigNum=(num)=>{
    let secondBig=0
    let sorted=[]
    const numArr=num.split('')
    for(i=0;i<numArr.length;i++){
        for(j=i+1;j<numArr.length;j++){
            if(numArr[i]<numArr[j]){
                secondBig=numArr[i]
                numArr[i]=numArr[j]
                numArr[j]=secondBig
                
            }
        }
        
    }
    return numArr[1]
}

const findDuplicate=(num)=>{
    const duplicate={}
    const strArr=num.split('')
    // strArr.forEach((item)=>duplicate[item]=duplicate[item]?duplicate[item]+1:1)
    
    
    for (i=0;i<strArr.length;i++){
        duplicate[strArr[i]]=duplicate[strArr[i]]?duplicate[strArr[i]]+1:1
    }
    return duplicate
}

const str="everyone"
// console.log(findBigNum(random))
// console.log(sumOfNums(random))
// console.log(findSecondBigNum(random))
console.log(findDuplicate(str))
// console.log("Try programiz.pro",biggestNum);
