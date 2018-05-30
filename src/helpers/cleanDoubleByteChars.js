export function cleanDoubleByteChars (str) {
  for (var i = 0, n = str.length; i < n; i++) {
    if (str.charCodeAt(i) > 255) {
      return str.substring(0, i)
    }
  }
  return str
}
