
class LazyMan {
    private tasks: Function[] = [];
    private name;

    constructor(name: string) {
        this.name = name
        setTimeout(() => {
            this.next()
        })
    }

    next() {
        const task = this.tasks.shift();
        if (task) {
            task()
        }
    }

    sleep(second: number) {
        const task = () => {
            console.log(`开始休眠`)
            setTimeout(() => {
                console.log(`睡觉ing`)
                this.next();
            }, second * 1000)

        }
        this.tasks.push(task)
        return this;
    }

    eat(food: string) {
        const task = () => {
            console.log(`${this.name} eats ${food}`)
            this.next();
        }
        this.tasks.push(task)
        return this;
    }
}

const lazyTing = new LazyMan('wang ting')
lazyTing.eat('苹果').eat('香蕉').sleep(4).eat('红薯')