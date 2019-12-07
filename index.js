'use strict'

const dateTimeRegex = /^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)$/u
const dateRegex = /^\d{4}-[01]\d-[0-3]\d$/u

const getMatcherBySpecialProp = (key) => {
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
  }
}

const applyPropertyMatchers = (key, propOrListOfProps) => {
  const outputObj = {}
  const props = Array.isArray(propOrListOfProps) ? propOrListOfProps : [propOrListOfProps]
  props.forEach(prop => {
    outputObj[prop] = getMatcherBySpecialProp(key)
  })
  return outputObj
}

const generateMatcher = (obj) => {
  const specialKeys = [
    '$number',
    '$numericString',
    '$dateTime',
    '$stringDateTime',
    '$date',
    '$stringDate',
  ]

  const keys = Object.keys(obj)

  return keys.reduce((acc, current) => {
    if (specialKeys.includes(current)) {
      acc = {
        ...acc,
        ...applyPropertyMatchers(current, obj[current]),
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

module.exports = generateMatcher
