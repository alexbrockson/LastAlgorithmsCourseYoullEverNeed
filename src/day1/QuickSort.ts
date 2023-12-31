function qs(arr: number[], lo: number, hi: number): void {
    // Base case:
    if (lo >= hi) {
        return;
    }

    const pivotIdx = partition(arr, lo, hi);

    qs(arr, lo, pivotIdx - 1);
    qs(arr, pivotIdx + 1, hi);
}

function partition(arr: number[], lo: number, hi: number): number {
    const pivot = arr[hi];
    let idx = lo - 1;

    for (let i = lo; i < hi; i++) {
        if (arr[i] <= pivot) {
            idx++;
            const tmp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = tmp;
        }
    }

    idx++;
    arr[hi] = arr[idx];
    arr[idx] = pivot;

    return idx;
}

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}

// how it works:
// function partition(arr: number[], lo: number, hi: number): number {
//     const pivot = arr[hi];
//     let idx = lo - 1;

//     for (let i = lo; i < hi; i++) {
//         if (arr[i] <= pivot) {
//             idx++;
//             const tmp = arr[i];
//             arr[i] = arr[idx];
//             arr[idx] = tmp;
//         }
//     }

//     idx++;
//     arr[hi] = arr[idx];
//     arr[idx] = pivot;

//     return idx;
// }


// BEGIN:

// [2, 1, 8, 5, 34, 3, 4, [6]]
// idx = -1 


// [(2), 1, 8, 5, 34, 3, 4, [6]]
// i = 0
// arr[0] = 2;
// idx = -1
// 2 < [6]
// idx = 0
// tmp = 2
// arr[idx] = 2
// arr[0] = 2
// unchanged


// [2, (1), 8, 5, 34, 3, 4, [6]]
// i = 1
// arr[1] = 1;
// idx = 0
// 1 < [6]
// idx = 1
// tmp = 1
// arr[idx] = 1
// arr[1] = 1
// unchanged


// [2, 1, (8), 5, 34, 3, 4, [6]]
// i = 2
// arr[2] = 8;
// idx = 1
// 8 > [6] !!!
// idx = 1
// unchanged


// [2, 1, 8, (5), 34, 3, 4, [6]]
// i = 3
// arr[3] = 5;
// idx = 1
// 5 < [6]
// idx = 2
// tmp = 5
// arr[3] = arr[2]
// (5 swap with 8)
// arr[2] = 5
// [2, 1, 5, 8, 34, 3, 4, [6]]


// [2, 1, 5, 8, (34), 3, 4, [6]]
// i = 4
// arr[4] = 34;
// idx = 2
// 34 > [6] !!!
// idx = 2
// unchanged


// [2, 1, 5, 8, 34, (3), 5, [6]]
// i = 5
// arr[5] = 3;
// idx = 2
// 3 < [6]
// idx = 3
// tmp = 3
// arr[5] = arr[3]
// (3 swap with 8)
// arr[3] = 3
// [2, 1, 5, 3, 34, 8, 5, [6]]


// [2, 1, 5, 3, 34, 8, (5), [6]]
// i = 6
// arr[6] = 5;
// idx = 3
// 5 < [6]
// idx = 4
// tmp = 5
// arr[6] = arr[4]
// (5 swap with 34)
// arr[4] = 5
// [2, 1, 5, 3, 5, 8, 34, [6]]


// idx = 6;
// arr[7] = arr[6] (arr[7] = 34)
// arr[6] = 6;