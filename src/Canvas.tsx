import { useEffect, useRef } from "react";


const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);  

  useEffect(() => {

    const canvas = canvasRef.current;
    if(!canvas) {
      return;
    }

     

    const ctx = canvas.getContext('2d');
    if(!ctx){      
      return
    }

    ctx.canvas.height = 400
    ctx.canvas.width = 400

    const picture = document.getElementById("picture") as HTMLCanvasElement;
    if(!picture){
      return
    }

    ctx.drawImage(picture, 40, 0,200, 230)


    function drawPixelated( imageData: any, pixel_size: any) {
      if(!ctx){return} if(!canvas){return}
      
       // scale down
      ctx.scale(1 / pixel_size, 1 / pixel_size)

      

      ctx.putImageData(imageData, 0, 0);
      // make next drawing erase what's currently on the canvas
      ctx.globalCompositeOperation = 'copy';
      // nearest-neighbor
      ctx.imageSmoothingEnabled = false;
      // scale up
      ctx.setTransform(pixel_size, 0, 0, pixel_size, 0, 0);
      ctx.drawImage(canvas, 0, 0);
      
      // reset all to defaults
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.globalCompositeOperation = 'source-over';
      ctx.imageSmoothingEnabled = false;

    }

    const imageData = ctx.getImageData(0,0,canvas.width, canvas.height)
    if(!imageData){return}


    // img.onload = animeLoop;
    // img.src = "/apple.jpg"

    const data = ctx.getImageData(30,0,canvas.width, canvas.height)
    // crypto.getRandomValues(data);
    
    let size = 2;
    let speed = 0.05;
    
    animeLoop();
  function animeLoop() {
    if(!ctx){return} if(!canvas){return}

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    size +40

    drawPixelated( data, size );

    requestAnimationFrame(animeLoop);
}
    
    // const imageData = ctx.getImageData(0,0,200,200)
    // var pix = imageData.data
    // var newColor = {r:0, g:0, b:0, a:0}
    // console.log(imageData);
    // for(let i=0; i< imageData.data.length; i += 4){
    //   const r = pix[i]
    //   const g = pix[i +1]
    //   const b = pix[i +2]

    //   // if(!r || !g || !b){
    //   //   return
    //   // }
      
    //   // if(r != null && r>248) {
    //   //   pix[i] = newColor.r;
    //   // }
    //   // if(g != null && g>248) {
    //   //   pix[i + 1] = newColor.r;
    //   // }
    //   // if(b != null && b>248) {
    //   //   pix[i + 2] = newColor.r;
    //   // }

    //   if(r == 255 && g == 255 && b == 255){
    //     pix[i] = newColor.r;
    //     pix[i +1] = newColor.g;
    //     pix[i + 3] = newColor.a;
    //   }
    //   if(r == 254 && g == 254 && b == 254){
    //     pix[i] = newColor.r;
    //     pix[i +1] = newColor.g;
    //     pix[i + 3] = newColor.a;
    //   }
    //   if(r == 253 && g == 253 && b == 253){
    //     pix[i] = newColor.r;
    //     pix[i +1] = newColor.g;
    //     pix[i + 3] = newColor.a;
    //   }if(r == 252 && g == 252 && b == 252){
    //     pix[i] = newColor.r;
    //     pix[i +1] = newColor.g;
    //     pix[i + 3] = newColor.a;
    //   }
    //   if(r == 251 && g == 251 && b == 251){
    //     pix[i] = newColor.r;
    //     pix[i +1] = newColor.g;
    //     pix[i + 3] = newColor.a;
    //   }
    //   if(r == 250 && g == 250 && b == 250){
    //     pix[i] = newColor.r;
    //     pix[i +1] = newColor.g;
    //     pix[i + 3] = newColor.a;
    //   }
    //   if(r == 249 && g == 249 && b == 249){
    //     pix[i] = newColor.r;
    //     pix[i +1] = newColor.g;
    //     pix[i + 3] = newColor.a;
    //   }
    //   if(r == 252 && g == 250 && b == 250){
    //     pix[i] = newColor.r;
    //     pix[i +1] = newColor.g;
    //     pix[i + 3] = newColor.a;
    //   }
    //   if(r == 250 && g == 250 && b == 252){
    //     pix[i] = newColor.r;
    //     pix[i +1] = newColor.g;
    //     pix[i + 3] = newColor.a;
    //   }
    //   if(r == 248 && g == 248 && b == 251){
    //     pix[i] = newColor.r;
    //     pix[i +1] = newColor.g;
    //     pix[i + 3] = newColor.a;
    //   }
    // }
    // ctx.putImageData(imageData, 0, 0)

    

  }, []);

  return (
    <>
    
  <img  src='/pizza.png' id='picture' className="w-[200px] float-left" />

  <canvas ref={canvasRef} className="border bg-blue-200 w-[900px]" />
  
  
  </>
  );
}

export default Canvas