# jest-property-matchers

Easily create property matchers for use with jest's snapshots.

If you are using jest's [snapshots](https://jestjs.io/docs/en/snapshot-testing) for testing, you'll most likely run into problem that
not all data you are using to compare against snapshots could actually be generated in a deterministic way (so
that they stay always the same, each time you run the tests). Typically it's auto-generated ids or dates that causes these issues. Jest addresses
this with [property matchers](https://jestjs.io/docs/en/snapshot-testing#property-matchers)
but sometimes it can be quite tedious to write.

`jest-property-matchers` package can help you with constructing matcher. Especially in cases
where the matchers are not really consised or if there are too many properties to match.

Typescript declarations are included.

## Install

```
npm install jest-property-matchers --save-dev
``` 

## Example usage

See how to use `jest-property-matchers` in this example of a jest test:

```typescript
import generateMatcher from 'jest-property-matchers'

describe('User', () => {

  test('Should create a new user in database', async () => {

    const user = await db.createUser({
      name: 'John',
    })

    // Generate your property matchers here
    const matcher = generateMatcher({
      $number: 'id', // created user will have auto-generated id
      $dateTime: ['createdAt', 'updatedAt'], // also timestamps will be always different
    })

    expect(user).toMatchSnapshot(matcher)
  })

})
```

### Common JS usage
To use this library in environment not supporting ES import, you can require it like this:
```javascript
const generateMatcher = require('jest-property-matchers').default
```

## API

### generateMatcher(matchersDefs)
Generates and returns property matcher object according to specification provided in `matcherDefs` argument.

`matchersDefs` - Object containing one or more of specialized keys that defines types of the
property matcher to be used. Values of these keys are property names in the object being
matched against jest snapshot or array of property names if given matcher should be applied
on more thatn one property.

These are the currently supported keys:

- `$number` - matches any js Number
- `$numericString` - matches any numeric string (no minus sign allowed), useful for BIGINT database values that needs to be represented as strings in JS
- `$dateTime` - matches js Date 
- `$date` - matches js Date (same as $dateTime)
- `$stringDateTime` - matches ISO 8601 string representation of a dateTime (such as "2019-12-08T12:24:22.591Z") 
- `$stringDate` - matches date in a "YYYY-MM-DD" format

Any other properties passed inside `matchersDefs` argument will be propagated intact to
the returned matcher so you can pass any additional matchers that are not supported by
`jest-property-matchers`

Definitions can also be nested. See examples bellow:


#### simple matcher example
```typescript
generateMatcher({
    $number: 'id',
    $dateTime: ['createdAt', 'updatedAt'],
})

// above call is equivalent to this jest matcher:
{
  id: expect.any(Number),
  createdAt: expect.any(Date),
  updatedAt: expect.any(Date),
}
``` 

#### more complex example
Matchers definitions can also be nested in sub-objects. With more complex matchers it also starts to show
how much simpler it is to use `jest-property-matchers` to generate property matcher. 
```typescript
generateMatcher({
    $numericString: ['id', 'orderId'],
    $stringDateTime: ['createdAt', 'updatedAt'],
    address: {
        $number: 'id',
    }    
})

// above call is equivalent to this jest matcher:
{
  id: expect.stringMatching(/[0-9]+/u),
  orderId: expect.stringMatching(/[0-9]+/u),
  createdAt: expect.stringMatching(/^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)$/u),
  updatedAt: expect.stringMatching(/^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)$/u),
  address: {
      id: expect.any(Number),
  },
}
``` 

