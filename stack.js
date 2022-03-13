// // let Stack = []
// // let value = "123456789"
// // let review = ""


// // for(let i=0; i < value.length; i ++){
// //     Stack.push(value[i])
// // }
// // console.log(Stack)
// // for(let i=0; i < value.length; i ++){
// //     review += Stack.pop()
// // }
// // console.log(review)


// class stack{
//     constructor(){
//         this.storage= {}
//         this.count = 0
//     }
//     add(value){
//         this.storage[this.count]= value;
//         this.count++
//     }
//     print(){
//       return  this.storage
//     }
//     log(){
//         let data = this.storage
//         let loggie = []
//         for(let k in data){
//             loggie.push(data[k])
//         }
//          return loggie
//     }
//     size(){
//         return this.count
//     }
//     peek(){
//         return this.storage[this.count -1]
//     }
//     remove(){
//         if(this.count === 0){
//             return null
//         }
//         this.count --
//         return this.storage[this.count]
//     }

// }
// const Stack = new stack()

// Stack.add("peter")
// Stack.add("mr toheeb")
// Stack.add("malush")
// Stack.add("idris")
// Stack.add("victor")
// Stack.remove()

// console.log(Stack.peek())
// // console.log(stack.log())
// // console.log(stack.peek())






const reuse =(n)=>{
    const  Name = []
    let Newname = n.toLowerCase()
    CheckName = ""
    
    for(let i = 0; i < Newname.length; i++){
        Name.push(Newname[i])
    }
    for(let i = 0; i < Newname.length; i++){
      CheckName  += Name.shift()
    }
    console.log(CheckName)
}
   reuse("ajala")

   class Queue{
       constructor(){
           this.storage = {}
           this.count = 0

       }
       



        
   }
