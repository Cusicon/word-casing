// Convert string into human name like
String.prototype.toNameCase = function () {
  let word = this.valueOf()
  let result = ""

  word = word.toLowerCase().trim()
  if (word.includes(" ")) {
    let wordArr = []
    let words = word.split(" ")
    words.forEach((word) => {
      wordArr.push(
        word.replace(word.charAt(0), word.charAt(0).toUpperCase())
      )
    })

    return (wordArr = wordArr.join(" "))
  }
  result = word.replace(word.charAt(0), word.charAt(0).toUpperCase())
  return result
}

// Convert string into sentence like
String.prototype.toSentenceCase = function () {
  let word = this.valueOf()
  let result = ""

  word = word.toLowerCase().trim()
  if (word.includes(".")) {
    let wordArr = []
    let words = word.split(" ")
    words.forEach((word) => {
      wordArr.push(
        word.replace(word.charAt(0), word.charAt(0).toUpperCase())
      )
    })

    return (wordArr = wordArr.join(" "))
  }
  result = word.replace(word.charAt(0), word.charAt(0).toUpperCase())
  return result
}