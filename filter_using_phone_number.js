const HASH_LETTERS = []

// HASH_LETTERS[0] -> 2
// HASH_LETTERS[1] -> 2
// HASH_LETTERS[2] -> 2

// HASH_LETTERS[3] -> 3

const generateHashLetters = () => {
  for (let i = 2; i < 10; i++) {
    const toPush = [i, i, i]

    if (i == 7 || i == 9) toPush.push(i)

    HASH_LETTERS.push(...toPush)
  }
}
generateHashLetters()

const filterUsingPhoneNumber = (words, phoneNumber) => {
  return words.filter((word) => wordToPhoneNumber(word) == phoneNumber)
}

const wordToPhoneNumber = (word) => {
  let phoneNumber = ''

  for (const letter of word) {
    phoneNumber += letterToHashNumber(letter)
  }

  return phoneNumber
}

const letterToHashNumber = (letter) => {
  return HASH_LETTERS[letter.charCodeAt(0) - 97]
}
console.log(filterUsingPhoneNumber(['clement', 'clemdot'], '2536368'))
