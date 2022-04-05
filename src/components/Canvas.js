import { useRef, useEffect } from "react";
import Ball from "./classes/Ball";
// import Grid  from "./classes/Grid";
import {Block, genArray} from "./classes/Block"
import Column from "./classes/Column";


const Canvas = ({width, height, setButtonText}) => {

    const canvasRef = useRef(null);
    let balls = [];
    let blocks = []
    let canvas = null
    let context = null
    let animationId = null
    const arr = genArray(7, 7);

    const loop = () => {
      context.fillStyle = "rgb(212,236,236)";
      context.fillRect(0, 0, width, height)

      //TODO: DRAW A GRID
      // const grid = new Grid(context, width, height)
      // grid.draw();

      //TODO: DRAW COLUMNS
        const cols = new Column(context, width, height);
        cols.draw();


      //TODO: DISPLAY BLOCKS
        let cellSize = 44;
        let posX = cellSize * 2;
        let posY = cellSize * 3;
        let tempX = posX;
        for(let i = 0; i < arr.length; i++){
            for(let j = 0; j < arr[i].length; j++){

                if(arr[i][j] === "*"){
                    tempX += j * cellSize
                    const block = new Block(context, tempX, posY, 10, "#171c21");
                    block.draw()
                    blocks.push(block);
                    tempX = posX
                }
            }
            posY += cellSize;
        }

      //TODO: DROP BALLS LOGIC
      while (balls.length < 31){
          const ballSize = 20
          const x = width / 2;
          const y = ballSize;
          const speedX = 0
          const speedY = random(3, 5);
          const red = random(0, 255);
          const green = random(0, 255);
          const blue = random(0, 255);
          const ball = new Ball(context, x, y, speedX, speedY,
              "rgb(" + red + "," + green + "," + blue + ")", ballSize);
          balls.push(ball)
      }

        let current = balls[0]
        current.draw()
        current.update(width, height, balls)

         for(let i = 0; i < balls.length; i++){
             if (current.speedY === 0) {
                 if(current.y <= height - (current.size * 12)){
                     current.gameOver();
                     setButtonText("Restart")
                     break;
                  }
                  else{
                      current = balls[i]
                      current.draw();
                      current.update(width, height, balls)
                  }
              }
         }

       current.turn(blocks)
       animationId = requestAnimationFrame(loop)
    }


    function random(min, max){
      return Math.floor(Math.random() * (max - min)) + min;
    }


    useEffect( () => {
        canvas = canvasRef.current
        context = canvas.getContext('2d')
        loop()

        return () => {
         cancelAnimationFrame(animationId)
        }
    }, [])

    return (
        <canvas width={width} height={height} ref={canvasRef}/>
    )
}

export default Canvas