class Block{
    constructor(x, y, width, height, angle) {
      
        var options = {
          restitution : 0.7,
          friction : 0.5,
          isStatic : false,
       //   super(x,y,width,height)
        }
    

        this.Visibility=255
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
       World.add(world, this.body);
      }
      display(){
        if(this.body.speed < 3){
          var angle=this.body.angle
          var pos=this.body.position
          push();
          translate(pos.x,pos.y)
          rotate(angle)
          rectMode(CENTER)
          rect(0,0,this.width,this.height)
          pop();
         }
         else{
           World.remove(world, this.body);
           push();
           this.Visiblity = this.Visiblity - 5;
           //tint(255,this.Visiblity)
           //rect(0, 0, this.width, this.height);
           pop();}}}
