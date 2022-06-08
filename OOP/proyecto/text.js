class CustomText extends String{
    constructor(string,color="red"){
        super(string)
        this.color =  color
    }

    print(){

        console.log(`%c${this.toString()}`, `color: ${this.color};`)
    }
}

export default CustomText
