export default function shallowContains(
  input: any,
  contains: {} | Array<any> | Set<any> | Map<any, any>,
  comparator?: (a: any, b: any) => boolean,
) {
  const equals = comparator || ((a, b) => a === b)

  if (Array.isArray(contains) || contains instanceof Set) {
    const inputSet = toSet(input)
    for (let v of contains) {
      if (!comparator) {
        if (!inputSet.has(v)) return false
      } else {
        for (let inputVal of inputSet) {
          if (equals(inputVal, v)) return true
        }
      }
    }
    return true
  }

  const containsEntries = toEntries(contains)
  const isMap = input instanceof Map
  for (let [k, v] of containsEntries) {
    const inputVal = isMap ? input.get(k) : input[k]
    if (!equals(inputVal, v)) return false
  }
  return true
}

function toSet(val: any): Set<any> {
  if (Array.isArray(val)) return new Set(val)
  if (val instanceof Set) return val
  if (val instanceof Map) return new Set(val.values())
  // @ts-ignore
  return new Set(Object.values(val))
}

function toEntries(val: any) {
  // @ts-ignore
  return val.entries ? val.entries() : Object.entries(val)
}
