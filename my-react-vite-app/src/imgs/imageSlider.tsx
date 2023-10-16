import { useState} from "react"
import {ArrowBigLeft, ArrowBigRight} from "lucide-react"
import React from "react"



type ImageSliderProps = {
    imageUrls: string[]
}

export function ImageSlider({ imageUrls }: ImageSliderProps){
    const [imageIndex, setImageIndex] = useState(0)

    return (
    <div style ={ {width:"100%", height: "100%"}}>
        <img src={imageUrls[imageIndex]} className="img-slider-img"/>
        <button>
            <ArrowBigLeft/>
        </button>
        <button>
            <ArrowBigRight />
        </button>
    </div>)
}
