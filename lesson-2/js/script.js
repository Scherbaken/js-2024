// Задача 0
// Обчислити значення виразів

//================================================================================================
{
  alert("Треба обчислити вираз S = a + 12 + b")
  let a = parseInt(prompt("Введіть значення а = ", "1"))
  let b = parseInt(prompt("Введіть значення b = ", "2"))
  let S = a + 12 + b
  document.write(
    `S = a + 12 + b <br> Якщо а = ${a}, а b = ${b}, тоді S = ${S} <br> <br>`
  )
  alert(`S = ${S}`)
}
//================================================================================================
{
  alert(
    "Треба обчислити вираз S = sqrt((a + b) / 2a) , де sqrt - це корінь квадратний"
  )
  let a = parseInt(prompt("Введіть значення а = ", "1"))
  let b = parseInt(prompt("Введіть значення b = ", "17"))
  let S = Math.sqrt(((a + b) / 2) * a)
  document.write(
    `S = sqrt((a + b) / 2a) <br> Якщо а = ${a}, а b = ${b}, тоді S = ${S} <br> <br>`
  )
  alert(`S = ${S}`)
}
//================================================================================================
{
  alert(
    "Треба обчислити вираз S = cbrt((a + b)/c) , де cbrt - це корінь кубічний"
  )
  let a = parseInt(prompt("Введіть значення а = ", "8"))
  let b = parseInt(prompt("Введіть значення b = ", "19"))
  let c = parseInt(prompt("Введіть значення c = ", "1"))
  let S = Math.cbrt((a + b) / c)
  document.write(
    `S = cbrt((a + b)/c) <br> Якщо а = ${a}, b = ${b}, a c = ${c} тоді S = ${S} <br> <br>`
  )
  alert(`S = ${S}`)
}
//================================================================================================
{
  alert("Треба обчислити вираз S = sin(a / -b)")
  let a = parseInt(prompt("Введіть значення а = ", "1"))
  let b = parseInt(prompt("Введіть значення b = ", "1"))
  let S = Math.sin(a / -b)
  document.write(
    `S = sin(a / -b) <br> Якщо а = ${a}, а b = ${b}, тоді S = ${S.toFixed(3)}
	  <br> <br>`
  )
  alert(`S = ${S.toFixed(3)}`)
}

//  Задача 1
// Знайти суму, добуток та частку двох дійсних чисел. Результат вивести у формі таблиці

{
  alert("Треба знайти суму, добуток та частку двох дійсних чисел")
  let a = parseFloat(prompt("Введіть значення першого дійсного числа", "100"))
  let b = parseFloat(prompt("Введіть значення другого дійсного числа", "0.5"))
  let sum = a + b
  let prod = a * b
  let div = a / b
  document.write(
    `a = ${a}, b = ${b} <br> <br>
 <table>
	 <tr>
		 <td>Сума</td>
		 <td>${sum}</td>
	 </tr>
	 <tr>
		 <td>Добуток</td>
		 <td>${prod}</td>
	 </tr>
	 <tr>
		 <td>Частка</td>
		 <td>${div}</td>
	 </tr>
 </table>
 <br>
 <br>
	  `
  )
  alert(
    `Якщо а = ${a}, а b = ${b}, то сума = ${sum}, добуток = ${prod}, a частка = ${div}`
  )
}

// Задача 2
// Дано рік народження (дата: 1 січня) та поточний рік. Знайти кількість років.

const currentYear = 2024
let bithYear = parseInt(
  prompt("Щоб визначити Ваш вік, введіть рік Вашого народження", "1988")
)
let yourAge = currentYear - bithYear
document.write(`Зараз Вам ${yourAge}р. <br> <br>`)
alert(`Зараз Вам ${yourAge}р.`)

// Задача 3
// Дано вартість одиниці товару і кількість. Знайти загальну вартість та ПДВ (5% від загальної вартості).

const vatPercent = 5
let itemPrice = parseInt(prompt("Яка вартість одиниці товару?", "100"))
let numberOfItems = parseInt(prompt("Яка загальна кількість товарів?", "10"))
let totalPrice = itemPrice * numberOfItems
let vatValue = (totalPrice * vatPercent) / 100
document.write(
  `Якщо кількість товару складає ${numberOfItems}, а ціна за одиницю - ${itemPrice}, тоді <br>
  загальна вартість замовленя складає ${totalPrice}$, <br> а ПДВ складе ${vatValue}$ <br><br>`
)
alert(
  `Загальна вартість замовленя складає ${totalPrice}$ \n А ПДВ складе ${vatValue}$`
)

// Задача 4.
// Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів.

let lengthInSm = parseInt(prompt("Введіть значення довжини (см)", "10000"))
let lengthInM = lengthInSm / 10
let lengthInKm = lengthInM / 1000
document.write(`${lengthInSm}см це ${lengthInM}м або ${lengthInKm}км <br><br>`)
alert(`${lengthInSm}см це ${lengthInM}м або ${lengthInKm}км`)
