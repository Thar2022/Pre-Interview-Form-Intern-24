export  function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    let result: number[] = [];
    result.push(...collection_1,...collection_2,...collection_3);
    return mergeSort(result);

}
function mergeSort(unsortedArray: number[]): number[] {
    if (unsortedArray.length <= 1) {
        return unsortedArray;
    }

    const middle = Math.floor(unsortedArray.length / 2);
    const left = unsortedArray.slice(0, middle);
    const right = unsortedArray.slice(middle);

    return mergeTotal(mergeSort(left), mergeSort(right));
}

function mergeTotal(left: number[], right: number[]): number[] {
    let resultArray: number[] = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++;
        }
    } 
    return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

