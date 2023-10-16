import { ImageSlider } from "./imageSlider"
import wall1 from "./imgs/wall1.jpg"
import wall2 from "./imgs/wall2.jpg"
import wall3 from "./imgs/wall3.jpg"

const IMAGES = [wall1, wall2, wall3]

export default function App(){
  return (
    <div 
      style={{
        maxWidth: "1200px", 
        width: "100%", 
        aspectRatio: "1/2", 
        margin: "0 auto"
      }}
    >
      <ImageSlider imageUrls={IMAGES}/>
    </div>
  )

  
}