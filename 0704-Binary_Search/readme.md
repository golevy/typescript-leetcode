Given an array of integers `nums` which is sorted in ascending order, and an integer `target`, write a function to search `target` in `nums`. If `target` exists, then return its index. Otherwise, return `-1`.

You must write an algorithm with `O(log n)` runtime complexity.

Example 1:

> <span style="color: white;">Input</span>: nums = [-1,0,3,5,9,12], target = 9<br>
> <span style="color: white;">Output</span>: 4<br>
> <span style="color: white;">Explanation</span>: 9 exists in nums and its index is 4

Example 2:

> <span style="color: white;">Input</span>: nums = [-1,0,3,5,9,12], target = 2<br>
> <span style="color: white;">Output</span>: -1<br>
> <span style="color: white;">Explanation</span>: 2 does not exist in nums so return -1

Constraints:

- 1 <= nums.length <= 10<sup>4</sup>
- -10<sup>4</sup> < nums[i], target < 10<sup>4</sup>
- All the integers in `nums` are unique.
- `nums` is sorted in ascending order.
