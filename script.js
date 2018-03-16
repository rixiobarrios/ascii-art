// Part I
let breads = ''
for (let index = 0; index <= 9; index++) {
  breads += '🍞🍞🍞🍞🍞🍞🍞🍞🍞🍞\n'
}
console.log(breads)

// Part II
let breads = ''
for (let index = 0; index <= 9; index++) {
  breads += '🍞'
  console.log(breads)
}

//Part III
let breads = '🍞'
let MAX = 9
for (let index = 0, spacer = Math.ceil(MAX / 2); index <= MAX; index += 2, spacer -= 1) {
  console.log(index, spacer)
  const padding = spacer + breads.length
  console.log(breads.padStart(padding + spacer))
  breads += '🍞🍞'
}
