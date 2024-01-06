export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {
    // Base Cases
    // structural check
    if (a === null && b === null) {
        return true;
    }

    // structural check
    if (a === null || b === null) {
        return false;
    }

    // value check
    if (a.value !== b.value) {
        return false;
    }


    // Recurse
    return compare(a.left, b.left) && compare(a.right, b.right);
}