class Iron{

      constructor(x,y){
        var options={
            'restitution':0.8,
            'friction':3,
            'density':30
   
        };

        this.body = Bodies.rectangle(x, y, 125, 125, options);
        this.width=125;
        this.height=125;

        World.add(world, this.body);

      };

    display(){
    var pos=this.body.position;
        
    push();
    translate(pos.x, pos.y);
    strokeWeight(3);
    stroke('grey')
    fill('black')
    rectMode(CENTER)
    rect(0, 0, this.width, this.height);
    pop();
  };

}







