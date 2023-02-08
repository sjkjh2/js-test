// import getType from './getType'

// console.log(typeof 'Hello world!!')
// console.log(typeof 123)
// console.log(typeof true)
// console.log(typeof undefined) // 의도 하지 않은 비워진 값
// console.log(typeof null) // 의도한 비워진 값
// console.log(typeof {})
// console.log(typeof [])

// console.log(getType(123))
// console.log(getType(false))
// console.log(getType(null))
// console.log(getType({}))
// console.log(getType([]))



// 산술 연산자(arithmetic operator)
// console.log(1 + 2)
// console.log(5 - 7)
// console.log(3 * 4)
// console.log(10 / 2)
// console.log(7 % 5) // 나눈 나머지 값

// 할당 연산자(assignment operator)
// let a = 2
// // a = a + 1
// a /= 1

// console.log(a)



// 비교 연산자(comparison operator)
// const a = 1
// const b = 1

// console.log(a === b)

// function isEqual(x, y) {
//   return x === y
// }

// console.log(isEqual(1, 1))
// console.log(isEqual(1, '1'))

// console.log(a <= b)


// 논리 연산자(logical operator)
// const a = 1 === 2
// const b = 'AB' === 'AB'
// const c = true

// console.log(a)
// console.log(b)
// console.log(c)

// console.log('&&: ', a && b && c) // 전부 true면 true 반환
// console.log('||: ', a || b || c) // 하나라도 true면 true 반환
// console.log('!: ', !a) // 반대 값을 반환





// 삼항 연산자(ternary operator)
// const a = 1 < 2

// if (a) {
//   console.log('참')
// } else {
//   console.log('거짓')
// }

// console.log(a ? '참' : '거짓')





import random from './getRandom'

// 조건문 (If statement)

// console.log(random())

const a =  random()
if (a === 0) {
  console.log('a is 0')
} else if (a === 2) {
  console.log('a is 2')
} else if (a === 4) {
  console.log('a is 4')
} else {
  console.log('rest...')
}
