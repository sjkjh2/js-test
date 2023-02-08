import getType from './getType'

console.log(typeof 'Hello world!!')
console.log(typeof 123)
console.log(typeof true)
console.log(typeof undefined) // 의도 하지 않은 비워진 값
console.log(typeof null) // 의도한 비워진 값
console.log(typeof {})
console.log(typeof [])

console.log(getType(123))
console.log(getType(false))
console.log(getType(null))
console.log(getType({}))
console.log(getType([]))