import * as Chance from 'chance'
import generateMatcher from './index'

const chance = new Chance()

describe('matchers', () => {

  describe('$number', () => {

    test('single random property (defined in array) only', () => {
      const obj = {
        id: chance.integer(),
      }

      const matcher = generateMatcher({
        $number: ['id'],
      })

      expect(obj).toMatchSnapshot(matcher)
    })

    test('single random property only', () => {
      const obj = {
        id: chance.integer(),
      }

      const matcher = generateMatcher({
        $number: 'id',
      })

      expect(obj).toMatchSnapshot(matcher)
    })

    test('single random property (defined in array) and some other constant props', () => {
      const obj = {
        id: chance.integer(),
        num: 10,
        str: 'test string',
      }

      const matcher = generateMatcher({
        $number: ['id'],
      })

      expect(obj).toMatchSnapshot(matcher)
    })

    test('single random property and some other constant props', () => {
      const obj = {
        id: chance.integer(),
        num: 10,
        str: 'test string',
      }

      const matcher = generateMatcher({
        $number: ['id'],
      })

      expect(obj).toMatchSnapshot(matcher)
    })

    test('multiple random properties only', () => {
      const obj = {
        id: chance.integer(),
        _id: chance.integer(),
      }

      const matcher = generateMatcher({
        $number: ['id', '_id'],
      })

      expect(obj).toMatchSnapshot(matcher)
    })

    test('multiple random properties and some other constant props', () => {
      const obj = {
        id: chance.integer(),
        _id: chance.integer(),
        num: 10,
        str: 'test string',
      }

      const matcher = generateMatcher({
        $number: ['id', '_id'],
      })

      expect(obj).toMatchSnapshot(matcher)
    })
  })

  describe('$numericString', () => {

    test('single random property (defined in array) only', () => {
      const obj = {
        id: chance.integer().toString(),
      }

      const matcher = generateMatcher({
        $numericString: ['id'],
      })

      expect(obj).toMatchSnapshot(matcher)
    })

    test('single random property only', () => {
      const obj = {
        id: chance.integer().toString(),
      }

      const matcher = generateMatcher({
        $numericString: 'id',
      })

      expect(obj).toMatchSnapshot(matcher)
    })

    test('single random property (defined in array) and some other constant props', () => {
      const obj = {
        id: chance.integer().toString(),
        num: 10,
        str: 'test string',
      }

      const matcher = generateMatcher({
        $numericString: ['id'],
      })

      expect(obj).toMatchSnapshot(matcher)
    })

    test('single random property and some other constant props', () => {
      const obj = {
        id: chance.integer().toString(),
        num: 10,
        str: 'test string',
      }

      const matcher = generateMatcher({
        $numericString: ['id'],
      })

      expect(obj).toMatchSnapshot(matcher)
    })

    test('multiple random properties only', () => {
      const obj = {
        id: chance.integer().toString(),
        _id: chance.integer().toString(),
      }

      const matcher = generateMatcher({
        $numericString: ['id', '_id'],
      })

      expect(obj).toMatchSnapshot(matcher)
    })

    test('multiple random properties and some other constant props', () => {
      const obj = {
        id: chance.integer().toString(),
        _id: chance.integer().toString(),
        num: 10,
        str: 'test string',
      }

      const matcher = generateMatcher({
        $numericString: ['id', '_id'],
      })

      expect(obj).toMatchSnapshot(matcher)
    })
  })

  describe('$dateTime', () => {

    test('single random property (defined in array) only', () => {
      const obj = {
        createdAt: chance.date(),
      }

      const matcher = generateMatcher({
        $dateTime: ['createdAt'],
      })

      expect(obj).toMatchSnapshot(matcher)
    })

    test('single random property only', () => {
      const obj = {
        createdAt: chance.date(),
      }

      const matcher = generateMatcher({
        $dateTime: 'createdAt',
      })

      expect(obj).toMatchSnapshot(matcher)
    })

    test('single random property (defined in array) and some other constant props', () => {
      const obj = {
        createdAt: chance.date(),
        num: 10,
        str: 'test string',
      }

      const matcher = generateMatcher({
        $dateTime: ['createdAt'],
      })

      expect(obj).toMatchSnapshot(matcher)
    })

    test('single random property and some other constant props', () => {
      const obj = {
        createdAt: chance.date(),
        num: 10,
        str: 'test string',
      }

      const matcher = generateMatcher({
        $dateTime: ['createdAt'],
      })

      expect(obj).toMatchSnapshot(matcher)
    })

    test('multiple random properties only', () => {
      const obj = {
        createdAt: chance.date(),
        created_at: chance.date(),
      }

      const matcher = generateMatcher({
        $dateTime: ['createdAt', 'created_at'],
      })

      expect(obj).toMatchSnapshot(matcher)
    })

    test('multiple random properties and some other constant props', () => {
      const obj = {
        createdAt: chance.date(),
        created_at: chance.date(),
        num: 10,
        str: 'test string',
      }

      const matcher = generateMatcher({
        $dateTime: ['createdAt', 'created_at'],
      })

      expect(obj).toMatchSnapshot(matcher)
    })
  })

  describe('$date', () => {

    test('single random property (defined in array) only', () => {
      const obj = {
        createdAt: chance.date(),
      }

      const matcher = generateMatcher({
        $date: ['createdAt'],
      })

      expect(obj).toMatchSnapshot(matcher)
    })

    test('single random property only', () => {
      const obj = {
        createdAt: chance.date(),
      }

      const matcher = generateMatcher({
        $date: 'createdAt',
      })

      expect(obj).toMatchSnapshot(matcher)
    })

    test('single random property (defined in array) and some other constant props', () => {
      const obj = {
        createdAt: chance.date(),
        num: 10,
        str: 'test string',
      }

      const matcher = generateMatcher({
        $date: ['createdAt'],
      })

      expect(obj).toMatchSnapshot(matcher)
    })

    test('single random property and some other constant props', () => {
      const obj = {
        createdAt: chance.date(),
        num: 10,
        str: 'test string',
      }

      const matcher = generateMatcher({
        $date: ['createdAt'],
      })

      expect(obj).toMatchSnapshot(matcher)
    })

    test('multiple random properties only', () => {
      const obj = {
        createdAt: chance.date(),
        created_at: chance.date(),
      }

      const matcher = generateMatcher({
        $date: ['createdAt', 'created_at'],
      })

      expect(obj).toMatchSnapshot(matcher)
    })

    test('multiple random properties and some other constant props', () => {
      const obj = {
        createdAt: chance.date(),
        created_at: chance.date(),
        num: 10,
        str: 'test string',
      }

      const matcher = generateMatcher({
        $date: ['createdAt', 'created_at'],
      })

      expect(obj).toMatchSnapshot(matcher)
    })
  })

  describe('$stringDateTime', () => {

    test('single random property (defined in array) only', () => {
      const obj = {
        createdAt: chance.date().toISOString(),
      }

      const matcher = generateMatcher({
        $stringDateTime: ['createdAt'],
      })

      expect(obj).toMatchSnapshot(matcher)
    })

    test('single random property only', () => {
      const obj = {
        createdAt: chance.date().toISOString(),
      }

      const matcher = generateMatcher({
        $stringDateTime: 'createdAt',
      })

      expect(obj).toMatchSnapshot(matcher)
    })

    test('single random property (defined in array) and some other constant props', () => {
      const obj = {
        createdAt: chance.date().toISOString(),
        num: 10,
        str: 'test string',
      }

      const matcher = generateMatcher({
        $stringDateTime: ['createdAt'],
      })

      expect(obj).toMatchSnapshot(matcher)
    })

    test('single random property and some other constant props', () => {
      const obj = {
        createdAt: chance.date().toISOString(),
        num: 10,
        str: 'test string',
      }

      const matcher = generateMatcher({
        $stringDateTime: ['createdAt'],
      })

      expect(obj).toMatchSnapshot(matcher)
    })

    test('multiple random properties only', () => {
      const obj = {
        createdAt: chance.date().toISOString(),
        created_at: chance.date().toISOString(),
      }

      const matcher = generateMatcher({
        $stringDateTime: ['createdAt', 'created_at'],
      })

      expect(obj).toMatchSnapshot(matcher)
    })

    test('multiple random properties and some other constant props', () => {
      const obj = {
        createdAt: chance.date().toISOString(),
        created_at: chance.date().toISOString(),
        num: 10,
        str: 'test string',
      }

      const matcher = generateMatcher({
        $stringDateTime: ['createdAt', 'created_at'],
      })

      expect(obj).toMatchSnapshot(matcher)
    })
  })

  describe('$stringDate', () => {

    test('single random property (defined in array) only', () => {
      const obj = {
        createdAt: chance.date().toISOString().substr(0, 10),
      }

      const matcher = generateMatcher({
        $stringDate: ['createdAt'],
      })

      expect(obj).toMatchSnapshot(matcher)
    })

    test('single random property only', () => {
      const obj = {
        createdAt: chance.date().toISOString().substr(0, 10),
      }

      const matcher = generateMatcher({
        $stringDate: 'createdAt',
      })

      expect(obj).toMatchSnapshot(matcher)
    })

    test('single random property (defined in array) and some other constant props', () => {
      const obj = {
        createdAt: chance.date().toISOString().substr(0, 10),
        num: 10,
        str: 'test string',
      }

      const matcher = generateMatcher({
        $stringDate: ['createdAt'],
      })

      expect(obj).toMatchSnapshot(matcher)
    })

    test('single random property and some other constant props', () => {
      const obj = {
        createdAt: chance.date().toISOString().substr(0, 10),
        num: 10,
        str: 'test string',
      }

      const matcher = generateMatcher({
        $stringDate: ['createdAt'],
      })

      expect(obj).toMatchSnapshot(matcher)
    })

    test('multiple random properties only', () => {
      const obj = {
        createdAt: chance.date().toISOString().substr(0, 10),
        created_at: chance.date().toISOString().substr(0, 10),
      }

      const matcher = generateMatcher({
        $stringDate: ['createdAt', 'created_at'],
      })

      expect(obj).toMatchSnapshot(matcher)
    })

    test('multiple random properties and some other constant props', () => {
      const obj = {
        createdAt: chance.date().toISOString().substr(0, 10),
        created_at: chance.date().toISOString().substr(0, 10),
        num: 10,
        str: 'test string',
      }

      const matcher = generateMatcher({
        $stringDate: ['createdAt', 'created_at'],
      })

      expect(obj).toMatchSnapshot(matcher)
    })
  })

  describe('more complex scenarios', () => {

    test('combination of all supported props', () => {
      const obj = {
        createdAt: chance.date(),
        created_at: chance.date(),
        createdAtStr: chance.date().toISOString(),
        created_at_str: chance.date().toISOString(),
        bornAt: chance.date(),
        bornAtStr: chance.date().toISOString().substr(0, 10),
        id: chance.integer(),
        _id: chance.integer(),
        bigIntId: chance.integer({ min: 0 }).toString(),
        otherProp: [10, 20],
        someOtherProp: 'str value',
      }

      const matcher = generateMatcher({
        $stringDateTime: ['createdAtStr', 'created_at_str'],
        $stringDate: 'bornAtStr',
        $number: ['id', '_id'],
        $numericString: 'bigIntId',
        $dateTime: ['createdAt', 'created_at'],
        $date: 'bornAt',
      })

      expect(obj).toMatchSnapshot(matcher)
    })

    test('nested objects', () => {
      const obj = {
        createdAtStr: chance.date().toISOString(),
        created_at_str: chance.date().toISOString(),
        bornAtStr: chance.date().toISOString().substr(0, 10),
        id: chance.integer(),
        _id: chance.integer(),
        otherProp: [10, 20],
        subObject: {
          bigIntId: chance.integer({ min: 0 }).toString(),
          createdAt: chance.date(),
          created_at: chance.date(),
          bornAt: chance.date(),
          someOtherProp: 'str value',
        },
      }

      const matcher = generateMatcher({
        $stringDateTime: ['createdAtStr', 'created_at_str'],
        $stringDate: 'bornAtStr',
        $number: ['id', '_id'],
        subObject: {
          $numericString: 'bigIntId',
          $dateTime: ['createdAt', 'created_at'],
          $date: 'bornAt',
        },
      })

      expect(obj).toMatchSnapshot(matcher)
    })

  })

})
