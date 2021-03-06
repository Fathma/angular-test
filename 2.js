LargestConsecutiveRepeatation = text => {
  let char_count_arr = []
  let temp = text[0]
  let count_max = 0

  text.split('').map((char, index) => {
    if (temp === char) {
      count_max++
      temp = char
    } else {
      char_count_arr.push({ char: temp, number: count_max })
      temp = char
      count_max = 1
    }
    if (index == text.length - 1) {
      char_count_arr.push({ char: temp, number: count_max })
    }
  })

  let max = char_count_arr[0]
  if (char_count_arr.length > 0) {
    char_count_arr.map(el => {
      if (max.number < el.number) max = el
    })
  } else max = { char: null, number: 0 }

  return max.char
}

console.log(LargestConsecutiveRepeatation('aanyyeeeddk'))
