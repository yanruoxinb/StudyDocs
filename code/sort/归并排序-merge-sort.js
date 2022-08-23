

function mergeSort(arr) {
    let res = [];
    const merge = (arr, left, mid, right) => {

    }
    const sort = (arr, left, right) => {
        if(left<right){
            let mid = (left + right) >>> 1;
            sort(arr, left, mid)
            sort(arr, mid, right);
        }
        merge(arr, left, mid, right)
    }
    sort(arr, 0, arr.lenght - 1)

}