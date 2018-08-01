function createElement(tag,attrs,...children){
    return{
        tag,
        attrs,
        children
    }
    
}

const element =(
    <div>
        hello
        <span>1</span>
    </div>
)
const a =(
    <span>a</span>
)
console.log(element)
console.log(a)
