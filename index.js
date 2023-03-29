// Your code here
class Polygon{
    constructor(arr){
        this.arr = arr
        this.total = 0
    }
    get countSides(){
        return this.arr.length
    }
    get perimeter(){
        for (let i of this.arr){
            this.total = this.total + i
        }
        return this.total
    
    }

}

class Triangle extends Polygon{
    get isValid(){
        let sum1 = this.arr[0] + this.arr[1]
        let sum2 = this.arr[1] + this.arr[2]
        let sum3 = this.arr[0] + this.arr[2]

        if (sum1 <= this.arr[2] || sum2 <= this.arr[0] || sum3 <= this.arr[1]){
            return false
        }
        return true


    }
    
    
}

class Square extends Polygon{
    get isValid(){
        let p1 = this.arr[0] - this.arr[1]
        let q1 = this.arr[1] - this.arr[2]
        let p2 = this.arr[2] - this.arr[3]
        let q2 = this.arr[0] - this.arr[3]

        let s1 = p1 * q1
        let s2 = p2 - q2

        if (s1 === s2){
            return true
        }
        else{
            return false
        }
    }
    get area(){
        return this.arr[0] * this.arr[1]
    }
}

const distance = (p,q) => {
    p = Math.pow((this.arr[0] * this.arr[1]),2)
    q = Math.pow((this.arr[2] * this.arr[3]),2)
    let dist = p + q
}

