//========= Ex1 ========

// const numbList = [1, 5, 8, 3, 9, 2, 7, 6, 102, 110];

// const addOne = (number) => number + 1;
// const multiplicationTow = (number) => number * 2;
// const decreaseTow = (number) => number - 2;
// const dividetTree = (number) => Math.floor(number / 3);
// const lowerFive = (number) => number < 5;
// const higherOneHundred = (number) => number > 100;

// const numbSumm = numbList.map(addOne)
// const numbMultiplication = numbList.map(multiplicationTow)
// const numbDecrease = numbList.map(decreaseTow)
// const numbDividet = numbList.map(dividetTree)
// const numbLowFive = numbList.filter(lowerFive)
// const numbHigherHundred = numbList.filter(higherOneHundred)

// const result = numbList
//   .map(addOne)
//   .map(multiplicationTow)
//   .map(decreaseTow)
//   .map(dividetTree)
//   .filter(lowerFive)
//   .filter(higherOneHundred)

// console.log(numbSumm)
// console.log(numbMultiplication)
// console.log(numbDecrease)
// console.log(numbDividet)
// console.log(numbLowFive)
// console.log(numbHigherHundred)
// console.log(result)

//============ Ex2 ================

// const numbList = [1,5,8,3,9,2,7,6,102,110];

// const numbASC = (a, b) => a - b
// const numbDSC = (a, b) => b - a

// const listASC = numbList.sort(numbASC)
// const listDSC = numbList.sort(numbDSC)

// console.log(listASC)
// console.log(listDSC)


//========= Ex3 ==========

// const namesArr = ['Ion', 'Vasile', 'Petru', 'Anna-Marria', 'Olga', 'Be']

// const addWord = (item) => item + ` angajat`
// const decresWord = (item) => item.slice(0, 3)
// const wordTreeChar =  (item) => {
// 	if(item.length	> 2)
// 		return item
// }

// const wordTeenChar = (item) => {
// 	if(item.length < 10 )
// 		return item
// }

// const namesAdd = namesArr.map(addWord)
// const namesDecr = namesArr.map(decresWord)
// const namesTreeChar = namesArr.map(wordTreeChar)
// const namesTeenChar = namesArr.map(wordTeenChar)


// console.log(namesAdd)
// console.log(namesDecr)
// console.log(namesTreeChar)
// console.log(namesTeenChar)

//=========== Ex4 ======== 

// const numbList = [1, 5, 8, 3, 9, 2, 7, 6, 102, 110];

// const addOne = numbList.reduce((acc, curr) => {
// 	acc.push(curr + 1)
// 	return acc
// },[])

// const multiplicationTow = numbList.reduce((acc, curr) => {
// 	acc.push(curr * 2)
// 	return acc
// }, [])

// const decreaseTow = numbList.reduce((acc, curr, ) => {
// 	acc.push(curr - 2)
// 	return acc
// }, [])

// const dividetTree = numbList.reduce((acc, curr) => {
// 	acc.push( Math.floor(curr / 3))
// 	return acc
// }, [])

// const lowerFive = numbList.reduce((acc, curr) => {
// 	if(curr > 5) acc.push(curr)
// 		return acc
// },[])

// const higherOneHundred = numbList.reduce((acc, curr) => {
// 	if(curr < 100) acc.push(curr)
// 	return acc
// },[])




// console.log(addOne) 
// console.log(multiplicationTow) 
// console.log(decreaseTow) 
// console.log(dividetTree) 
// console.log(lowerFive) 
// console.log(higherOneHundred) 


// const namesArr = ['Ion', 'Vasile', 'Petru', 'Anna-Marria', 'Olga', 'Be']

// const listAddWord = namesArr.reduce((acc, curr) => {
// 	acc.push(curr + ` angajat`)

// 	return acc
// },[]) 

// const listDecreaseWord = namesArr.reduce((acc, curr) => {
// 	acc.push(curr.slice(0, 3))
	
// 	return acc
// },[])

// console.log(listAddWord)
// console.log(listDecreaseWord)
