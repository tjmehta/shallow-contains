import shallowContains from '../index'

const comparator = (a: any, b: any): boolean => (b.test ? b.test(a) : a === b)

describe('shallowContains', () => {
  describe('array shallow contains...', () => {
    it('should contain all values in contains array', () => {
      expect(shallowContains([1, 2, 3], [3, 2, 1])).toBe(true)
      expect(shallowContains([1, 2, 3], [3, 2])).toBe(true)
      expect(shallowContains([1, 2, 3], [1])).toBe(true)
      expect(shallowContains([1, 2, 3], [1, 2, 4])).toBe(false)
      expect(shallowContains([1, 2, 3], [1, 4])).toBe(false)
      expect(shallowContains([1, 2, 3], [4])).toBe(false)
      expect(shallowContains([1, 2, 3], [/2/], comparator)).toBe(true)
    })

    it('should contain all values in contains set', () => {
      expect(shallowContains([1, 2, 3], new Set([3, 2, 1]))).toBe(true)
      expect(shallowContains([1, 2, 3], new Set([3, 2]))).toBe(true)
      expect(shallowContains([1, 2, 3], new Set([1]))).toBe(true)
      expect(shallowContains([1, 2, 3], new Set([1, 2, 4]))).toBe(false)
      expect(shallowContains([1, 2, 3], new Set([1, 4]))).toBe(false)
      expect(shallowContains([1, 2, 3], new Set([4]))).toBe(false)
    })
  })

  describe('set shallow contains...', () => {
    it('should contain all values in contains array', () => {
      expect(shallowContains(new Set([1, 2, 3]), [3, 2, 1])).toBe(true)
      expect(shallowContains(new Set([1, 2, 3]), [3, 2])).toBe(true)
      expect(shallowContains(new Set([1, 2, 3]), [1])).toBe(true)
      expect(shallowContains(new Set([1, 2, 3]), [4, 2, 1])).toBe(false)
      expect(shallowContains(new Set([1, 2, 3]), [1, 4])).toBe(false)
      expect(shallowContains(new Set([1, 2, 3]), [4])).toBe(false)
    })

    it('should contain all values in contains set', () => {
      expect(shallowContains(new Set([1, 2, 3]), new Set([3, 2, 1]))).toBe(true)
      expect(shallowContains(new Set([1, 2, 3]), new Set([3, 2]))).toBe(true)
      expect(shallowContains(new Set([1, 2, 3]), new Set([1]))).toBe(true)
      expect(shallowContains(new Set([1, 2, 3]), new Set([3, 2, 4]))).toBe(
        false,
      )
      expect(shallowContains(new Set([1, 2, 3]), new Set([3, 4]))).toBe(false)
      expect(shallowContains(new Set([1, 2, 3]), new Set([4]))).toBe(false)
    })
  })

  describe('obj shallow contains...', () => {
    it('should contain all values in contains array', () => {
      expect(shallowContains({ foo: 1, bar: 2, qux: 3 }, [3, 2, 1])).toBe(true)
      expect(shallowContains({ foo: 1, bar: 2, qux: 3 }, [3, 2])).toBe(true)
      expect(shallowContains({ foo: 1, bar: 2, qux: 3 }, [1])).toBe(true)
      expect(shallowContains({ foo: 1, bar: 2, qux: 3 }, [3, 2, 4])).toBe(false)
      expect(shallowContains({ foo: 1, bar: 2, qux: 3 }, [3, 4])).toBe(false)
      expect(
        shallowContains({ foo: 1, bar: 2, qux: 3 }, [/4/], comparator),
      ).toBe(true)
    })

    it('should contain all values in contains set', () => {
      expect(
        shallowContains({ foo: 1, bar: 2, qux: 3 }, new Set([3, 2, 1])),
      ).toBe(true)
      expect(shallowContains({ foo: 1, bar: 2, qux: 3 }, new Set([3, 2]))).toBe(
        true,
      )
      expect(shallowContains({ foo: 1, bar: 2, qux: 3 }, new Set([1]))).toBe(
        true,
      )
      expect(
        shallowContains({ foo: 1, bar: 2, qux: 3 }, new Set([3, 2, 4])),
      ).toBe(false)
      expect(shallowContains({ foo: 1, bar: 2, qux: 3 }, new Set([3, 4]))).toBe(
        false,
      )
      expect(shallowContains({ foo: 1, bar: 2, qux: 3 }, new Set([4]))).toBe(
        false,
      )
    })

    it('should contain all values in contains obj', () => {
      expect(
        shallowContains({ foo: 1, bar: 2, qux: 3 }, { foo: 1, bar: 2, qux: 3 }),
      ).toBe(true)
      expect(
        shallowContains({ foo: 1, bar: 2, qux: 3 }, { foo: 1, bar: 2 }),
      ).toBe(true)
      expect(shallowContains({ foo: 1, bar: 2, qux: 3 }, { foo: 1 })).toBe(true)
      expect(
        shallowContains({ foo: 1, bar: 2, qux: 3 }, { foo: 1, bar: 2, qux: 4 }),
      ).toBe(false)
      expect(
        shallowContains({ foo: 1, bar: 2, qux: 3 }, { foo: 1, bar: 4 }),
      ).toBe(false)
      expect(shallowContains({ foo: 1, bar: 2, qux: 3 }, { foo: 4 })).toBe(
        false,
      )
      expect(
        shallowContains({ foo: 1, bar: 2, qux: 3 }, { foo: /1/ }, comparator),
      ).toBe(true)
    })

    it('should contain all values in contains map', () => {
      expect(
        shallowContains(
          { foo: 1, bar: 2, qux: 3 },
          new Map(Object.entries({ foo: 1, bar: 2, qux: 3 })),
        ),
      ).toBe(true)
      expect(
        shallowContains(
          { foo: 1, bar: 2, qux: 3 },
          new Map(Object.entries({ foo: 1, bar: 2 })),
        ),
      ).toBe(true)
      expect(
        shallowContains(
          { foo: 1, bar: 2, qux: 3 },
          new Map(Object.entries({ foo: 1 })),
        ),
      ).toBe(true)
      expect(
        shallowContains(
          { foo: 1, bar: 2, qux: 3 },
          new Map(Object.entries({ foo: 1, bar: 2, qux: 4 })),
        ),
      ).toBe(false)
      expect(
        shallowContains(
          { foo: 1, bar: 2, qux: 3 },
          new Map(Object.entries({ foo: 1, bar: 4 })),
        ),
      ).toBe(false)
      expect(
        shallowContains(
          { foo: 1, bar: 2, qux: 3 },
          new Map(Object.entries({ foo: 4 })),
        ),
      ).toBe(false)
    })
  })

  describe('map shallow contains...', () => {
    it('should contain all values in contains array', () => {
      expect(
        shallowContains(new Map(Object.entries({ foo: 1, bar: 2, qux: 3 })), [
          3,
          2,
          1,
        ]),
      ).toBe(true)
      expect(
        shallowContains(new Map(Object.entries({ foo: 1, bar: 2, qux: 3 })), [
          3,
          2,
        ]),
      ).toBe(true)
      expect(
        shallowContains(new Map(Object.entries({ foo: 1, bar: 2, qux: 3 })), [
          1,
        ]),
      ).toBe(true)
      expect(
        shallowContains(new Map(Object.entries({ foo: 1, bar: 2, qux: 3 })), [
          3,
          2,
          4,
        ]),
      ).toBe(false)
      expect(
        shallowContains(new Map(Object.entries({ foo: 1, bar: 2, qux: 3 })), [
          3,
          4,
        ]),
      ).toBe(false)
      expect(
        shallowContains(new Map(Object.entries({ foo: 1, bar: 2, qux: 3 })), [
          4,
        ]),
      ).toBe(false)
      expect(
        shallowContains(
          new Map(Object.entries({ foo: 1, bar: 2, qux: 3 })),
          { foo: /1/ },
          comparator,
        ),
      ).toBe(true)
    })

    it('should contain all values in contains set', () => {
      expect(
        shallowContains(
          new Map(Object.entries({ foo: 1, bar: 2, qux: 3 })),
          new Set([3, 2, 1]),
        ),
      ).toBe(true)
      expect(
        shallowContains(
          new Map(Object.entries({ foo: 1, bar: 2, qux: 3 })),
          new Set([3, 2]),
        ),
      ).toBe(true)
      expect(
        shallowContains(
          new Map(Object.entries({ foo: 1, bar: 2, qux: 3 })),
          new Set([1]),
        ),
      ).toBe(true)
      expect(
        shallowContains(
          new Map(Object.entries({ foo: 1, bar: 2, qux: 3 })),
          new Set([3, 2, 4]),
        ),
      ).toBe(false)
      expect(
        shallowContains(
          new Map(Object.entries({ foo: 1, bar: 2, qux: 3 })),
          new Set([3, 4]),
        ),
      ).toBe(false)
      expect(
        shallowContains(
          new Map(Object.entries({ foo: 1, bar: 2, qux: 3 })),
          new Set([4]),
        ),
      ).toBe(false)
    })

    it('should contain all values in contains obj', () => {
      expect(
        shallowContains(new Map(Object.entries({ foo: 1, bar: 2, qux: 3 })), {
          foo: 1,
          bar: 2,
          qux: 3,
        }),
      ).toBe(true)
      expect(
        shallowContains(new Map(Object.entries({ foo: 1, bar: 2, qux: 3 })), {
          foo: 1,
          bar: 2,
        }),
      ).toBe(true)
      expect(
        shallowContains(new Map(Object.entries({ foo: 1, bar: 2, qux: 3 })), {
          foo: 1,
        }),
      ).toBe(true)
      expect(
        shallowContains(new Map(Object.entries({ foo: 1, bar: 2, qux: 3 })), {
          foo: 1,
          bar: 2,
          qux: 4,
        }),
      ).toBe(false)
      expect(
        shallowContains(new Map(Object.entries({ foo: 1, bar: 2, qux: 3 })), {
          foo: 1,
          bar: 4,
        }),
      ).toBe(false)
      expect(
        shallowContains(new Map(Object.entries({ foo: 1, bar: 2, qux: 3 })), {
          foo: 4,
        }),
      ).toBe(false)
    })

    it('should contain all values in contains map', () => {
      expect(
        shallowContains(
          new Map(Object.entries({ foo: 1, bar: 2, qux: 3 })),
          new Map(Object.entries({ foo: 1, bar: 2, qux: 3 })),
        ),
      ).toBe(true)
      expect(
        shallowContains(
          new Map(Object.entries({ foo: 1, bar: 2, qux: 3 })),
          new Map(Object.entries({ foo: 1, bar: 2 })),
        ),
      ).toBe(true)
      expect(
        shallowContains(
          new Map(Object.entries({ foo: 1, bar: 2, qux: 3 })),
          new Map(Object.entries({ foo: 1 })),
        ),
      ).toBe(true)
      expect(
        shallowContains(
          new Map(Object.entries({ foo: 1, bar: 2, qux: 3 })),
          new Map(Object.entries({ foo: 1, bar: 2, qux: 4 })),
        ),
      ).toBe(false)
      expect(
        shallowContains(
          new Map(Object.entries({ foo: 1, bar: 2, qux: 3 })),
          new Map(Object.entries({ foo: 1, bar: 4 })),
        ),
      ).toBe(false)
      expect(
        shallowContains(
          new Map(Object.entries({ foo: 1, bar: 2, qux: 3 })),
          new Map(Object.entries({ foo: 4 })),
        ),
      ).toBe(false)
    })
  })

  describe('err shallow contains...', () => {
    it('should contain all values in contains object', () => {
      expect(
        shallowContains(
          new Error('boom'),
          {
            message: 'boom',
            stack: /./,
          },
          comparator,
        ),
      ).toBe(true)
    })
  })
})
