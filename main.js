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

// const a =  random()

// switch (a) {
//   case 0: 
//     console.log('a is 0')
//     break
//   case 2:
//     console.log('a is 2')
//     break
//   case 4: 
//     console.log('a is 4')
//     break

//   default: 
//     console.log('rest...')
// }

// if (a === 0) {
//   console.log('a is 0')
// } else if (a === 2) {
//   console.log('a is 2')
// } else if (a === 4) {
//   console.log('a is 4')
// } else {
//   console.log('rest...')
// }


// 반복문 (For statement)
// for (시작조건; 종료조건; 변화조건) {}

// const ulEl = document.querySelector('ul')
// console.log(ulEl)
// for (let i = 0; i < 10; i += 1) {
//   const li = document.createElement('li')
//   li.textContent = `list-${i + 1}`
//   if ((i + 1) % 2 === 0) {
//     li.addEventListener('click', function () {
//       console.log(li.textContent)
//     })
//   }
//   ulEl.appendChild(li)
// }


// 변수 유효범위 (Variable Scope)
// var, let, const

// function scope() {
//   if (true) {
//     const a = 123
//     console.log(a)
//   }
// }
// scope()



// 형 변환 (Type conversion)

// const a = 1
// const b = '1'

// console.log(a == b) // 동등 연산자 (형 변환이 자동으로 이루어짐)

//  Truthy (참 같은 값)
//  true, {}, [], 1, 2, 'false', -12, '3.14'....

// Falsy(거짓 같은 값)
// ㄹ민ㄷ, '', null, undefined, 0, -0, NAN

// if (false) {
//   console.log(123)
// }



// 함수 복습

// 익명 함수
// let ddd = function() {

// }

// 기명 함수
function sum(x, y) { // 매개변수
  return x + y
}

console.log(sum(7, 3))
