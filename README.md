# shallow-contains

Partial shallow equality comparison between two values

# Installation

```sh
npm i --save shallow-contains
```

# Usage

#### Supports both ESM and CommonJS

```js
// esm
import shallowContains from 'shallow-contains'
// commonjs
const shallowContains = require('shallow-contains').default
```

#### Signature: shallowContains(value, contains, [comparator])

```js
/**
 * value {any} value to check if it contains 'contains'
 * contains {object|array|map|set} keys and/or values to check if the exist in 'value'
 * comparator {function} custom comparator for comparing values
 */
```

#### Example: object shallow contains...

```js
import shallowContains from 'shallow-contains'

// ... keys and values from an object
const obj = { foo: 1, bar: 2, qux: 3 }
shallowContains(obj, { bar: 2, qux: 3 }) // true
// ... keys and values from a map
shallowContains(obj, new Map([['bar', 2], ['qux', 3]])) // true
// ... values from an array
shallowContains(obj, [2, 3]) // true
// ... values from a set
shallowContains(obj, new Set([2, 3])) // true
// ... custom comparator
shallowContains(obj, { foo: /1/, bar: 2 }, (a, b) => b.test ? b.test(a) : a === b) // true
```

#### Example: map shallow contains...

```js
import shallowContains from 'shallow-contains'

// ... keys and values from an object
const map = new Map([['foo', 1], ['bar', 2], ['qux', 3]]
shallowContains(map, { bar: 2, qux: 3 }) // true
// ... keys and values from a map
shallowContains(map, new Map([['bar', 2], ['qux', 3]])) // true
// ... values from an array
shallowContains(map, [2, 3]) // true
// ... values from a set
shallowContains(map, new Set([2, 3])) // true
// ... custom comparator
shallowContains(map, { foo: /1/, bar: 2 }, (a, b) => b.test ? b.test(a) : a === b) // true
```

#### Example: array shallow contains...

```js
import shallowContains from 'shallow-contains'

const arr = [1, 2, 3]
// ... values from an array
shallowContains(arr, [2, 3]) // true
// ... values from a set
shallowContains(arr, new Set([2, 3])) // true
// ... custom comparator
shallowContains(arr, [/2/], (a, b) => b.test ? b.test(a) : a === b) // true

// note: these don't make sense and will return false
// ... keys and values from an object
shallowContains(arr, { bar: 2, qux: 3 }) // true
// ... keys and values from a map
shallowContains(arr, new Map([['bar', 2], ['qux', 3]])) // true
```

#### Example: set shallow contains...

```js
import shallowContains from 'shallow-contains'

const set = new Set([1, 2, 3])
// ... values from an array
shallowContains(set, [2, 3]) // true
// ... values from a set
shallowContains(set, new Set([2, 3])) // true
// ... custom comparator
shallowContains(set, [/2/], (a, b) => b.test ? b.test(a) : a === b) // true

// note: these don't make sense and will return false
// ... keys and values from an object
shallowContains(set, { bar: 2, qux: 3 }) // true
// ... keys and values from a map
shallowContains(set, new Map([['bar', 2], ['qux', 3]])) // true
```

#### Example: Custom Comparator

```js
const obj = { foo: 'value1', bar: 'value2', qux: 'value3' }
shallowContains(obj, { foo: /value/, bar: 'value2' }, (a, b) => b.test ? b.test(a) : a === b) // true
```

# License

MIT
