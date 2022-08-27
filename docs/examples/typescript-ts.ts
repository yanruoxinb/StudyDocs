function getValue<T extends Object, K extends keyof T>(o: T, key: K): T[K] {
  return o[key];
}

const obj1 = { name: "张三", age: 18 };
const a = getValue(obj1, "name"); // 其他会报错

type TArea = (width:number,height:number)=>number;

type params = Parameters<TArea>
type returnType = ReturnType<TArea>
