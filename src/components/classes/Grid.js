
class Grid{
  constructor(ctx, width, height){
     this.ctx = ctx;
     this.width = width;
     this.height = height;
     this.dx = 40;
     this.dy = 40;
  }

  draw(){
    let x = 0;
    let y = 0;
    let xy = 10;
    this.ctx.lineWidth = 0.2;
    this.ctx.strokeStyle = "#cfdede"
    while(y < this.height){
       y = y + this.dy;
       this.ctx.moveTo(x, y);
       this.ctx.lineTo(this.width, y);
       this.ctx.stroke();
       this.ctx.font = "1px Calibri";
       this.ctx.fillText(xy, x, y);
       xy += 10
    }
    y =0;  
    xy =10; 

    while (x < this.width) {
        x = x + this.dx;
        this.ctx.moveTo(x, y);  
        this.ctx.lineTo(x,this.height);  
        this.ctx.stroke();   
        //纵坐标的数字  
        this.ctx.font = "1px Calibri";  
        this.ctx.fillText(xy,x,10);    
        xy+=10;  
      }
  }
}

export default Grid;