

let name_1 = 'احمد'

let nameinput = prompt('your name')
let ageinput = prompt('your age')

if (ageinput >= 18){
    alert(`Welcome ${nameinput}!`)
} else{
    alert(`Sorry ${nameinput}`)
}



let nameinput2 = prompt('your name please')

if (nameinput2 == nameinput){
    alert('الاسمان متطابقان')
} else{
    alert('الاسمان غير متطابقان')
}