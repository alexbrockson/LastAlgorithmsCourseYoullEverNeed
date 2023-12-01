type Node<T> = {
    value: T,
    prev?: Node<T>,
}

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        const newNode = {value:item, prev:undefined} as Node<T>;
        this.length++;
        if (this.head) {        
            newNode.prev = this.head;
        }
        this.head = newNode;
    }

    pop(): T | undefined {
        if (!this.head){
            return undefined;
        }

        const head = this.head;
        this.length--;
        if (this.head.prev) {
            this.head = this.head.prev;
        }

        if (this.length === 0){
            this.head = undefined;
        }
        
        head.prev = undefined;
        return head.value;
    }

    peek(): T | undefined {        
        return this.head?.value;
    }
}