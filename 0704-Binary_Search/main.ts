const nums = [-1, 0, 3, 5, 9, 12]
const target1 = 9
const target2 = 2

function searchUsingLCRC(nums: number[], target: number): number {
  let mid: number,
    left: number = 0,
    right: number = nums.length - 1

  while (left <= right) {
    mid = left + ((right - left) >> 1)
    if (nums[mid] > target) {
      right = mid - 1
    } else if (nums[mid] < target) {
      left = mid + 1
    } else {
      return mid
    }
  }

  return -1
}

function searchUsingLCRO(nums: number[], target: number): number {
  let mid: number,
    left: number = 0,
    right: number = nums.length
  while (left < right) {
    mid = left + ((right - left) >> 1)
    if (nums[mid] > target) {
      right = mid
    } else if (nums[mid] < target) {
      left = mid + 1
    } else {
      return mid
    }
  }
  return -1
}

console.time("searchUsingLCRC")
searchUsingLCRC(nums, target1)
console.timeEnd("searchUsingLCRC")

console.time("searchUsingLCRO")
searchUsingLCRO(nums, target1)
console.timeEnd("searchUsingLCRO")

console.log(searchUsingLCRC(nums, target1))
console.log(searchUsingLCRO(nums, target1))
