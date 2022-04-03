

class Ball {
    constructor(ctx, x, y, speedX, speedY, color, size=20){
        this.ctx = ctx;
        this.x = x; //horizontal position
        this.y = y; //vertical position
        this.speedX = speedX;
        this.speedY = speedY;
        this.color = color;
        this.size = size;
    }

    draw(){
        this.ctx.beginPath()
        this.ctx.fillStyle = this.color;
        this.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        this.ctx.fill();
    }


    update(width, height){
        if(this.y >= height-this.size){
            this.speedY = 0;
            this.speedX = 0;
        }
        this.y += this.speedY;
        this.x += this.speedX;

    }

    turn(blocks){
        for(let i = 0; i < blocks.length; i++){
            const blockX = blocks[i].x
            const blockY = blocks[i].y
            const blockSize = blocks[i].size

            //TODO: Left or Right directions logic
            if(this.y >= blockY - this.size * 2){

                const dir = this.direction();

                //TODO: left turn
                if (dir === "left") {
                    if(this.x === blockX && this.y === blockY - this.size * 2){
                        this.speedX = -2;
                    }
                    if(this.x === blockX - blockSize * 2 - 14){
                        this.speedX = 0;
                    }
                }
                //TODO: right turn
                else {
                    if(this.x === blockX && this.y === blockY - this.size * 2){
                        this.speedX = 2;
                    }
                    if(this.x === blockX + blockSize * 2 + 14){
                        this.speedX = 0;
                    }
                }

                this.speedY = 2;
            }
        }
    }

    //TODO: COLLISION get random direction
    direction(){
        const rand = Math.floor(Math.random() * 2)
        if(rand) return "right";
        return "left";
    }

    random(min, max){
        return Math.floor(Math.random() * (max - min) + min)
    }
}

export default Ball;

