class square{
  constructor(){
    this.a=loadImage("sq.png")
   this.p=Math.round(random(1,6))
   
  }
   start() {
      
     if(level===2)
       {
         image(this.a,450,0,200,200)
         
       }
     
    }
}