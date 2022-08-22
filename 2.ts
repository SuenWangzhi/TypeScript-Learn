// 联合类型与类型收窄
type A2={
  age:number
}
type B2={
  name:string
}
const C2: A2 = {
  age:18,
 // name:'2222' 不能加
}

const D2:A2|B2={
  age:18,
  name:'2222'
}

const fn=(a:number|string):void=>{
  //不能直接用Number或String的方法
  if(typeof a === 'number'){ //声明联合类型后在使用时得想办法拆开（类型收窄）
    a.toFixed(2)
  }else{
    a.split('.') //a的类型为string
  }

  if(typeof a === 'number'){ //声明联合类型后在使用时得想办法拆开（类型收窄）
    a.toFixed(2)
  }else if(typeof a==='string'){
    a.split('.')
  }else{
    throw new Error('type is never') //a的类型为never
  }
}