interface Person {
    name: string;
    id: number;
    fixed?: boolean; //
}


export class Lottery {
    // 前面固定的中奖人数
    private maxFixedCount: number = 10;
    // 抽奖次数
    private lotteryCount: number = 0;
    // 所有中奖人的信息
    private lotteryPresons: Person[] = [];
    // 固定参与抽奖的人
    private fixedPerson: Person[] = [];
    // 非固定参与抽奖的人
    private restPerson: Person[] = [];


    constructor(persons: Person[]) {
        this.fixedPerson = persons.filter(person => person?.fixed);
        this.restPerson = persons.filter(person => !person?.fixed);
    }

    /**
     * 开始抽奖
     */
    public async start() {
      return  new Promise(function() {
            if (this.restPerson.length === 0 && this.fixedPerson.length === 0) {
                console.log('所有人都已经抽过奖啦');
                // 页面中可添加提示信息
                return;
            }
            // 抽取固定人群
            if (this.lotteryCount < this.maxFixedCount && this.fixedPerson.length > 0) {

                // 获取随机的index,在[0,10-0的开区间递减] 
                const randomIndex = Math.floor(Math.random() * (this.fixedPerson.length));
                console.log(randomIndex);
                this.lotteryPresons.push(this.fixedPerson[randomIndex])
                this.fixedPerson.splice(randomIndex, 1);
            } else {
                // 抽取非固定人群【此处有一问题就是：如果fixed:true的人数大于maxFixedCount，这些人永远没有机会抽中】
                const randomIndex = Math.floor(Math.random() * (this.restPerson.length));
                this.lotteryPresons.push(this.restPerson[randomIndex])
                this.restPerson.splice(randomIndex, 1);
            }
            this.lotteryCount++;
        })

    }

    /**
     * 获取当前中奖人的信息
     * @returns 
     */
    public getCurrentLotteryPerson() {
        if (this.lotteryPresons.length <= 0) {
            return []
        }
        return this.lotteryPresons[this.lotteryPresons.length - 1]
    }

    /**
     * 获取全部中奖的人信息
     * @returns 
     */
    public getAllLotteryPerson() {
        return this.lotteryPresons;
    }

}

const lottery = new Lottery([
    { name: 'wang', id: 1, fixed: true },
    { name: 'w', id: 2, fixed: true },
    { name: 'e', id: 3, fixed: true },
    { name: 't', id: 4, fixed: true },
    { name: 'y', id: 5, fixed: true },
    { name: 'y', id: 6, fixed: true },
    { name: 'y', id: 7, fixed: true },
    { name: 'y', id: 8, fixed: true },
    { name: 'y', id: 10, fixed: true },
    { name: 'y', id: 11, fixed: true },
    { name: 'y', id: 12, fixed: true },
    { name: 'y', id: 13, fixed: true },
    { name: 'y', id: 14, fixed: false },
    { name: 'y', id: 15, fixed: false },
    { name: 'y', id: 16 },
    { name: 'y', id: 17 },
    { name: 'y', id: 18},
    { name: 'y', id: 19 },
    { name: 'y', id: 20 },
    { name: 'y', id: 21 },
]);

for(let i = 0;i<20;i++){
    await lottery.start();
    console.log(lottery.getAllLotteryPerson());
}

