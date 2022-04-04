
class Column{
    constructor(ctx, width, height){
        this.ctx = ctx;
        this.width = width;
        this.height = height
    }

    draw(){
      let beginX = this.width / 4 - 22;
      let diff = beginX;
      for(let i = 0; i < 4; i++) {
          this.ctx.strokeStyle = "#1c1d1d"
          this.ctx.lineWidth = 15;
          this.ctx.beginPath();
          this.ctx.moveTo(beginX, this.height);
          this.ctx.lineTo(beginX, 420);
          this.ctx.stroke();
          beginX += diff
      }
    }
}

export default Column;