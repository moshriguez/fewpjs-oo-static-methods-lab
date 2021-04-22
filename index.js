class Formatter {
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '')
  }

  static titleize(string) {
    const arrOfWords = string.split(' ')
    const arrOfAlwaysLowerCaseWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    arrOfWords[0] = this.capitalize(arrOfWords[0])
    for (let i = 1; i < arrOfWords.length; i++) {
      if (!arrOfAlwaysLowerCaseWords.includes(arrOfWords[i])) {
        arrOfWords[i] = this.capitalize(arrOfWords[i])
      }
    }
    return arrOfWords.join(' ')
  }
}