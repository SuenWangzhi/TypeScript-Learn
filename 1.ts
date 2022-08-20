const a: number = 3
console.log(a);
//void never enum unknow any
//number boolean string null undefined symbol biginnt
type person= {
  nmae: string,
  id:number
}
type beast ={
  type: string,
  id: number,
  [propName: string]:any  //索引签名
}
const 胡建辉: beast = {
  type: '狗逼',
  id: 250,
  gender:'阉货'
}
console.log(胡建辉);

type A = {
  [propName: string]: number
}
type A2 = Record<string, number> //等效 type A

//const m:A2={tt:r}//报错
const m:A2={tt:22}

//由于Object太不精确了，用类型签名和Record描述普通对象