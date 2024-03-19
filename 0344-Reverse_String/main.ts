let strArray1 = ["h", "e", "l", "l", "o"]
let strArray2 = ["H", "a", "n", "n", "a", "h"]

function reverseStringUsingDestructuring(s: string[]): void {
    let left = 0
    let right = s.length - 1
    while (left < right) {
        ;[s[left], s[right]] = [s[right], s[left]]
        left++
        right--
    }
}

function reverseStringUsingTempVariable(s: string[]): void {
    let length: number = s.length
    let left: number = 0,
        right: number = length - 1
    let tempStr: string
    while (left < right) {
        tempStr = s[left]
        s[left] = s[right]
        s[right] = tempStr
        left++
        right--
    }
}

reverseStringUsingDestructuring(strArray1)
reverseStringUsingTempVariable(strArray2)

console.log(strArray1)
console.log(strArray2)
