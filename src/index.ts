const dateTimeRegex = /^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)$/u
const dateRegex = /^\d{4}-[01]\d-[0-3]\d$/u

type SpecialProp = '$number'|'$numericString'|'$dateTime'|'$stringDateTime'|'$date'|'$stringDate'|'$string'

const getMatcherBySpecialProp = (key: SpecialProp) => {
  switch (key) {
    case '$number':
      return expect.any(Number)
    case '$numericString':
      return expect.stringMatching(/[0-9]+/u)
    case '$dateTime':
      return expect.any(Date)
    case '$stringDateTime':
      return expect.stringMatching(dateTimeRegex)
    case '$date':
      return expect.any(Date)
    case '$stringDate':
      return expect.stringMatching(dateRegex)
    case '$string':
      return expect.any(String)
  }
}

const applyPropertyMatchers = (key: SpecialProp, propOrListOfProps: string[]) => {
  const outputObj: { [key: string]: any } = {}
  const props = Array.isArray(propOrListOfProps) ? propOrListOfProps : [propOrListOfProps]
  props.forEach(prop => {
    outputObj[prop] = getMatcherBySpecialProp(key)
  })
  return outputObj
}

export default function generateMatcher(obj: { [key: string]: any }) {
  const specialKeys = [
    '$number',
    '$numericString',
    '$dateTime',
    '$stringDateTime',
    '$date',
    '$stringDate',
    '$string',
  ]

  const keys = Object.keys(obj)

  return keys.reduce((acc: { [key: string]: any }, current: string) => {
    if (specialKeys.includes(current)) {
      acc = {
        ...acc,
        ...applyPropertyMatchers(current as SpecialProp, obj[current]),
      }
    } else {
      if (typeof obj[current] === 'object') {
        acc[current] = generateMatcher(obj[current])
      } else {
        acc[current] = obj[current]
      }
    }
    return acc
  }, {})
}
