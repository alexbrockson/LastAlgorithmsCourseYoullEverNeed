export default function bubble_sort(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++){
            let left = arr[j];
            let right = arr[j+1];
            if (left > right) {
                arr[j+1] = left;
                arr[j] = right;
            }
        }
    }
}