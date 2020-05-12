export const allLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
  'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

export const TOTAL_NUMBER_OF_HEROES = 730

export const range = (start, end) => {
  return Array(end - start - 1).fill().map((_, idx) => start + idx + 1)
}
