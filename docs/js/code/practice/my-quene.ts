
/**
 * 用链表实现队列
 */

class MyQuene {
    private  head = null;
    private tail = null;
    private len = 0;

    add(val) {
        let node = {
            value: val,
            next: null
        }
        if (this.head === null) {
            this.head = node;
        } 
        const tailNode = this.tail;
        if (tailNode) {
            tailNode.next = node;
        }
        this.tail = node;
        this.len++;
        
    }

    delete() {
        const headNode = this.head;
        if (this.head === null) return null;
        if (this.len <= 0) return null;
        let res = headNode.value;
        this.head = headNode.next;
        this.len--;
        return res;
    }
    get length() {
        return this.len;
        
    }
}
 
let quene = new MyQuene();
quene.add(100);
quene.add(200);
quene.delete();
console.info(quene.length,'--length---')
quene.add(300);
quene.add(400);
console.info(quene.length,'--length---')

quene.add(500);
quene.delete();
console.info(quene.length,'--length---')
quene.delete();
console.info(quene.length, '--length---')
quene.delete();
console.info(quene.length,'--length---')
quene.delete();
console.info(quene.length,'--length---')
