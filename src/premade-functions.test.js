import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { findLongestWord, charCount, mergeSortedArrays, groupBy, debounce, flattenArray } from "./premade-functions.js";

describe("findLongestWord", () => {

  it("should recieve a string and return the longest word", () => {

    const mockInputs = [
      {
        expected: "concentrated",
        values: "im am very concentrated on this"
      },
      {
        expected: "sentence",
        values: "a very long sentence that should return sentence"
      }
    ]
    mockInputs.forEach((mock) => {
      expect(findLongestWord(mock.values), `"${mock.values}" to return "${mock.expcted}"`).toBe(mock.expected)
    })
  });
});

describe("charCount", () => {
  var mockInputs = [
    {
      values: "should return 17",
      expected: {
        " ": 2,
        "1": 1,
        "7": 1,
        "d": 1,
        "e": 1,
        "h": 1,
        "l": 1,
        "n": 1,
        "o": 1,
        "r": 2,
        "s": 1,
        "t": 1,
        "u": 2,
      },
    },
    {
      values: "pneumonoultramicroscopicsilicovolcanoconiosis",
      expected: {
        "a": 2,
        "c": 6,
        "e": 1,
        "i": 6,
        "l": 3,
        "m": 2,
        "n": 4,
        "o": 9,
        "p": 2,
        "r": 2,
        "s": 4,
        "t": 1,
        "u": 2,
        "v": 1,
      }
    }
  ]

  it("should return the expected numbers from the mock data", () => {
    mockInputs.forEach((mock) => {
      expect(charCount(mock.values)).toStrictEqual(mock.expected)
    })

  })
})

describe("mergeSortedArrays", () => {
  const mockInputs = [
    {
      expected: [1, 2, 3, 15, 16, 18],
      values: [[1, 2, 3], [15, 16, 18]]
    },
    {
      expected: [1, 2, 3, 15, 16, 18],
      values: [[1, 15, 18], [2, 3, 16]]
    }
  ]

  it("should return a merged sorted array from 2 arrays", () => {
    mockInputs.forEach((mock) => {
      expect(mergeSortedArrays(mock.values[0], mock.values[1])).toStrictEqual(mock.expected)
    })
  })
})

describe('flattenArray', () => {
  const mockInputs = [
    {
      expected: [1, 2, 3, 15, 16, 18],
      values: [[1, 2, 3], [15, 16, 18]]
    },
    {
      expected: [1, 15, 18, 2, 3, 16],
      values: [[1, 15, 18], [2, 3, 16]]
    }
  ]


  it('should return a flattened version of the array', async () => {
    mockInputs.forEach((mock) => {
      expect(flattenArray(mock.values)).toStrictEqual(mock.expected)
    })
  })
})


describe('groupBy', () => {
  const mockInputs = [
    {
      property: "foo",
      expected: {
        "bar": [
          {
            "bar": "foo",
            "foo": "bar",
          },
        ],
        "test": [
          {
            "bar": "nothing",
            "foo": "test",
          },
        ],
        "undefined": [
          {
            "no": "words",
            "nothing": "left",
          },
        ],
      },
      values: [
        {
          foo: "bar",
          bar: "foo"
        },
        {
          foo: "test",
          bar: "nothing"
        },
        {
          no: "words",
          nothing: "left"
        }
      ]
    },
    {
      property: "bar",
      expected: {
        "foo": [
          {
            "bar": "foo",
            "foo": "bar",
          },
        ],
        "nothing": [
          {
            "bar": "nothing",
            "foo": "test",
          },
        ],
        "undefined": [
          {
            "no": "words",
            "nothing": "left",
          },
        ],
      },
      values: [
        {
          foo: "bar",
          bar: "foo"
        },
        {
          foo: "test",
          bar: "nothing"
        },
        {
          no: "words",
          nothing: "left"
        }
      ]
    },
    {
      property: "doesntExist",
      expected: {
        "undefined": [
          {
            "bar": "foo",
            "foo": "bar",
          },
          {
            "bar": "nothing",
            "foo": "test",
          },
          {
            "no": "words",
            "nothing": "left",
          },
        ],
      },
      values: [
        {
          foo: "bar",
          bar: "foo"
        },
        {
          foo: "test",
          bar: "nothing"
        },
        {
          no: "words",
          nothing: "left"
        }
      ]
    }
  ]

  it("to return the property from the array of obejcts", () => {
    mockInputs.forEach((mock) => {
      expect(groupBy(mock.values, mock.property)).toStrictEqual(mock.expected)
    })
  })
})



describe('debounce', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.resetAllMocks()
  })

  it("debounced funtion should run after 2 seconds", () => {
    const mockFn = vi.fn(() => console.log("mocked function ran"))

    const debouncedFunc = debounce(mockFn, 2000)

    debouncedFunc()

    // skip the 2 second wait
    vi.runAllTimers()
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it("should only be called once within 2 second", () => {
    const mockFn = vi.fn(() => console.log("mocked function ran"))
    const debouncedFunc = debounce(mockFn, 2000)
    debouncedFunc()
    debouncedFunc()
    debouncedFunc()
    debouncedFunc()
    vi.runAllTimers()

    expect(mockFn).toHaveBeenCalledTimes(1)
  })

})

// Lav selv tests for de andre functions...
