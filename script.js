const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        const BMI = this.mass / (this.height ** 2)
        return BMI
    }
}
const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        const BMI = this.mass / (this.height ** 2)
        return BMI
    }
}

if (mark.calcBMI() > john.calcBMI()) {
    console.log(`Mark's BMI (${mark.calcBMI()} is higher than John's (${john.calcBMI()}))`)
} else {
    console.log(`John's BMI (${john.calcBMI()} is higher than Mark's (${mark.calcBMI()}))`)
}
