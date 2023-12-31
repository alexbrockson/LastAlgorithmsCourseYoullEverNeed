type Node<T> = {
    value: T,
    prev?: Node<T>,
    next?: Node<T>,
}

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    prepend(item: T): void {
        const newNode = { value: item } as Node<T>;
        this.length++;
        if (!this.head) {
            this.head = this.tail = newNode;
            return;
        }

        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
    }

    insertAt(item: T, idx: number): void {
        if (idx > this.length) {
            throw new Error("Index out of bounds");
        }
        if (idx === 0) {
            this.prepend(item);
        }
        if (idx === this.length) {
            this.append(item);
        }
        
        const newNode = { value: item } as Node<T>;
        this.length++;

        let currNode = this.head;
        for (let i = 0; i < idx; i++) {
            currNode = currNode!.next;
        }

        const prevNode = currNode!.prev;
        prevNode!.next = newNode;
        newNode.prev = prevNode;
        currNode!.prev = newNode;
        newNode.next = currNode;
    }
    
    append(item: T): void {
        if (this.length === 0) {
            this.prepend(item);
            return;
        }

        const newNode = { value: item } as Node<T>;
        this.length++;

        newNode.prev = this.tail;
        this.tail!.next = newNode;
        this.tail = newNode;
    }

    get(idx: number): T | undefined {
        if (idx >= this.length) {
            throw new Error("Index out of bounds");
        }
        if (idx === 0) {
            return this.head!.value;
        }
        if (idx === this.length - 1) {
            return this.tail!.value;
        }

        let currNode = this.head;
        for (let i = 0; i < idx; i++) {
            currNode = currNode?.next;
        }
        
        return currNode!.value
    }

    remove(item: T): T | undefined {
        let current = this.head;
        while (current) {
            if (current.value === item) {
                this.removeNode(current);
    
                this.length--;
                return current.value;
            }
            current = current.next;
        }
        return undefined;
    }

    removeAt(idx: number): T | undefined {
        if (idx >= this.length) {
            throw new Error("Index out of bounds");
        }
    
        let current = this.head;
        for (let i = 0; i < idx; i++) {
            if (current?.next) current = current?.next;
        }
    
        this.removeNode(current!);
    
        this.length--;
        return current!.value;
    }
    
    private removeNode(current: Node<T>) {
        if (current.prev) current.prev.next = current.next;
        else this.head = current.next;

        if (current.next) current.next.prev = current.prev;
        else this.tail = current.prev;
    }
}