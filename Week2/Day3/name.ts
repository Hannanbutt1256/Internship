class Father{
    name:string
    constructor(){
        this.name = "Younas"
    }
    
}
class Me extends Father{
  MeName:string
  constructor(){
      super()
this.MeName = "Hannan"+ this.name
console.log(this.MeName)

  }
}
const pt = new Me()
pt.MeName