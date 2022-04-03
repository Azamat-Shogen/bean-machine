
 export class Block{
    constructor(ctx, x, y, size=15, color){
        this.ctx = ctx;
        this.x = x; //horizontal position
        this.y = y; //vertical position
        this.size = size;
        this.color = color;
    }

    draw(){
        this.ctx.beginPath()
        this.ctx.fillStyle = this.color;
        this.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        this.ctx.fill();
    }
}

export function genArray(rows, cols){
  let outer = [];
  for(let i = 0; i < cols; i++){
      let inner = [];
      for(let j = 0; j < rows; j++){
          inner.push("0")
      }
      outer.push(inner)
  }
  // insert the positions;
  const block = "*"
  let mid = Math.floor(rows / 2)
  outer[0][mid] = block;
  outer[2][mid-1] = block;
  outer[2][mid+1] = block;
  outer[4][mid] = block;
  outer[4][mid-2] = block;
  outer[4][mid+2] = block;
  outer[6][mid+1] = block;
  outer[6][mid-1] = block;
  outer[6][mid+3] = block;
  outer[6][mid-3] = block;
  
  return outer;

}


export class BlocksList {
    constructor(ctx){
      this.ctx = ctx;
      this.size = 40;
      this.pozX = this.size * 6
      this.pozY = this.size * 2;
      this.blocks = []
    }

    generateBlocks(){
        for(let i = 0; i < 10; i++){
           const block = new Block(this.ctx, 0, 0, 20, "#171c21")
           this.blocks.push(block)
        }
        return this;
    }

    draw(){
        const arr = genArray(7, 7)
        let tempX = this.pozX
        let currentBlock = 0;
       for(let i = 0; i < arr.length; i++){
        
           for(let j = 0; j < arr[i].length; j++){

               if(arr[i][j] === "*"){
                tempX += j * this.size;
                // const block = new Block(this.ctx, tempX, this.pozY, 20, "#171c21");
                this.blocks[currentBlock].x = tempX;
                this.blocks[currentBlock].y = this.posY;
                this.blocks[currentBlock].draw();
                currentBlock++;

               }
           }
           this.pozY += this.size
       }
    }
}

