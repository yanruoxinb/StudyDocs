/**
 * 按照权重实现抽奖
 */
let peoples = [
  { n: 'p1', w: 1 },
  { n: 'p2', w: 100 },
  { n: 'p3', w: 100 }
];
let rand = function (p) {
  const totalWeight = p.reduce(function (pre, cur, index) {
    cur.startW = pre;
    return cur.endW = pre + cur.w
  }, 0)

  console.log(totalWeight,p);
  let random = Math.ceil(Math.random() * totalWeight)
  console.log(random);
  let selectPeople = p.find(people => people.startW < random && people.endW > random)
  return selectPeople.n
};

console.log((rand(peoples)));