function unixMatch(filename, pattern) {
  for (let i = 0, pI = 0; i < filename.length; i++, pI++) {
    const p = pattern[pI],
      s = filename[i]

    if (p === '[' && s !== '[') {
      pI = nextPatternIndex(s, pattern, pI + 1)
      if (pI === null) return false

      continue
    }

    if (p === s) continue
    return false
  }

  return true
}

const nextPatternIndex = (s, pattern, i) => {
  const propsEndIndex = pattern.indexOf(']', i)
  const isOpposite = pattern[i] == '!' ? !!++i : false

  for (; i < propsEndIndex + 1; i++) {
    if (i === propsEndIndex) {
      if (!isOpposite) return null

      break
    }

    if (pattern[i] === s) {
      if (isOpposite) return null

      break
    }

    continue
  }

  return propsEndIndex
}

console.log(unixMatch('name.exe', 'name.[!.][!.][!.]'))
