import { useRef, useEffect } from "react";
import Ball from "./Ball";
import Grid  from "./Grid";
import {Block, genArray} from "./Block"


const Canvas = ({width, height}) => {

    const canvasRef = useRef(null);
    let balls = [];
    let blocks = []
    let canvas = null
    let context = null
    let animationId = null
    const arr = genArray(7, 7);
    // let width = null
    // let height = null


    const loop = () => {
      context.fillStyle = "#fafbfc";
      context.fillRect(0, 0, width, height)

      //TODO: DRAW A GRID
      const grid = new Grid(context, width, height)
      grid.draw();

      //TODO: DISPLAY BLOCKS
        let cellSize = 44;
        let posX = cellSize * 2;
        let posY = cellSize * 3;
        let tempX = posX;
        for(let i = 0; i < arr.length; i++){
            for(let j = 0; j < arr[i].length; j++){

                if(arr[i][j] === "*"){
                    tempX += j * cellSize
                    const block = new Block(context, tempX, posY, 15, "#171c21");
                    block.draw()
                    blocks.push(block);
                    tempX = posX
                }
            }
            posY += cellSize;
        }

      //TODO: DROP BALLS LOGIC
      while (balls.length < 5){
          const ballSize = 20
          const x = width / 2;
          const y = ballSize;
          const speedX = 0
          const speedY = random(3, 5);
          const red = random(0, 255);
          const green = random(0, 255);
          const blue = random(0, 255);
          const ball = new Ball(context, x, y, speedX, speedY, "rgb(" + red + "," + green + "," + blue + ")", ballSize);
          balls.push(ball)
      }

        let current = balls[0]
        current.draw()
        current.update(width, height)
        // current.turn(blocks)
         for(let i = 0; i < balls.length; i++){
             if (current.speedY === 0) {
                 current = balls[i]
                 current.draw();
                 current.update(width, height)
             }
         }

        current.turn(blocks)

      //   let current = balls[0]
      //   current.draw();
      //   current.update(width, height)
      //
      // for(let i = 0; i < balls.length; i++) {
      //     if (current.speedY === 0) {
      //         current = balls[i]
      //         current.draw();
      //         current.update(width, height)
      //     }
      //
      //     current.turn(blocks)
      //
      // }



       animationId = requestAnimationFrame(loop)
    }


    function random(min, max){
      return Math.floor(Math.random() * (max - min)) + min;
    }

    function direction(){
        const rand = Math.floor(Math.random() * 2)
        if(rand) return "right";
        return "left";
    }


    useEffect( () => {
        canvas = canvasRef.current
        context = canvas.getContext('2d')
        loop()

        

        return () => {
         cancelAnimationFrame(animationId)
        }
    }, []) // may not need loop

    return (
        <canvas width={width} height={height} ref={canvasRef}/>
    )
}

export default Canvas



//
// for(let i = 0; i < balls.length; i++) {
//     let current = balls[i]
//     if (current.speedY === 0) {
//         current = balls[i]
//         current.draw();
//         current.update(width, height)
//     }
// }
//
//     // const dir = direction();
//
//     for(let j = 0; j < blocks.length; j++){
//         if(current.y >= blocks[j].y - current.size * 2){
//             current.speedX = 2
//             current.speedY = 1
//
//
//             if(current.x > blocks[j].x + current.size * 2 ) {
//                 current.speedX = 0;
//             }
//
//             if(current.x < blocks[j].x - current.size * 2 ) {
//                 current.speedX = 0;
//             }
//
//         }
//     }
