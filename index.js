// const merge = (left, right) => {
//     const tempArray = [];
//     let leftIndex = 0;
//     let rightIndex = 0;
//     while(leftIndex < left.length && rightIndex < right.length){
//         if(left[leftIndex] < right[rightIndex]){
//             tempArray.push(left[leftIndex]);
//             leftIndex++
//         } else {
//             tempArray.push(right[rightIndex]);
//             rightIndex++
//         }
//     }
//     return [...tempArray, ...left.slice(leftIndex), ...right.slice(rightIndex)];
// }

// function mergeSort(array){
//     if(array.length <= 1){
//         return array;
//     }
//     const half = Math.ceil(array.length / 2);
//     const firstHalf = array.slice(0, half);
//     const secondHalf = array.slice(half);
//     return merge(mergeSort(firstHalf), mergeSort(secondHalf));
// }



// output: [1, 2, 3, 4, 5, 5, 6, 6, 7, 9, 12, 20]


const merge = (firstArray, secondArray) => {
    const output = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < firstArray.length && rightIndex < secondArray.length){
        if(firstArray[leftIndex] < secondArray[rightIndex]) {
            output.push(firstArray[leftIndex])
            leftIndex++
        } else {
            output.push(secondArray[rightIndex])
            rightIndex++
        }
    }

    return [...output, ...firstArray.slice(leftIndex), ...secondArray.slice(rightIndex)];
}

const mergeSort = (array) => {
    if(array.length <= 1) {
        return array;
    }

    const half = Math.ceil(array.length / 2);
    const firstHalf = array.slice(0, half);
    const secondHalf = array.slice(half);

    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}




console.log(mergeSort([1,2,6,4,5,5,7,3,9,6,20,12]));