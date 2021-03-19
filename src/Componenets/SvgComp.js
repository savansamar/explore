import React,{useRef,useEffect} from 'react'

import { TweenMax } from "gsap";

const SvgComp=()=>{





    const pic=useRef(null)
    const text=useRef(null)
  
      useEffect(()=>{
          TweenMax.to(pic.current,{duration: 2, x: 40,y:40, ease: "bounce"});
          TweenMax.to(text.current,{duration: 2,x:-40, y:40, ease: "bounce"});
  
      },[])



    return(
        <>
       <div className="grid grid-flow-col items-center mr-8 visible md:invisible ">
            <svg className="" width="109" height="202" viewBox="0 0 109 202" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.384 22.576V89.68H99.536V111.28H26.384V180.4H108.176V202H0.176002V0.975996H108.176V22.576H26.384Z" fill="#FFFCFC"/>
            </svg>
            <svg width="155" height="201" viewBox="0 0 155 201" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M92.256 100.776L153.888 201H124.224L76.128 122.664L30.336 201H1.248L62.592 100.776L0.960001 0.263992H30.336L78.72 78.888L124.8 0.263992H154.176L92.256 100.776Z" fill="#FFFCFC"/>
</svg>
<svg width="135" height="201" viewBox="0 0 135 201" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M134.384 59.016C134.384 75.72 128.624 89.64 117.104 100.776C105.776 111.72 88.4 117.192 64.976 117.192H26.384V201H0.176002V0.263992H64.976C87.632 0.263992 104.816 5.73599 116.528 16.68C128.432 27.624 134.384 41.736 134.384 59.016ZM64.976 95.592C79.568 95.592 90.32 92.424 97.232 86.088C104.144 79.752 107.6 70.728 107.6 59.016C107.6 34.248 93.392 21.864 64.976 21.864H26.384V95.592H64.976Z" fill="#FFFCFC"/>
</svg>
<svg width="97" height="201" viewBox="0 0 97 201" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.384 179.688H96.656V201H0.176002V0.263992H26.384V179.688Z" fill="#FFFCFC"/>
</svg>

<svg width="202" height="207" viewBox="0 0 202 207" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M101.184 206.016C82.56 206.016 65.568 201.696 50.208 193.056C34.848 184.224 22.656 172.032 13.632 156.48C4.8 140.736 0.384 123.072 0.384 103.488C0.384 83.904 4.8 66.336 13.632 50.784C22.656 35.04 34.848 22.848 50.208 14.208C65.568 5.37599 82.56 0.959988 101.184 0.959988C120 0.959988 137.088 5.37599 152.448 14.208C167.808 22.848 179.904 34.944 188.736 50.496C197.568 66.048 201.984 83.712 201.984 103.488C201.984 123.264 197.568 140.928 188.736 156.48C179.904 172.032 167.808 184.224 152.448 193.056C137.088 201.696 120 206.016 101.184 206.016ZM101.184 183.264C115.2 183.264 127.776 180 138.912 173.472C150.24 166.944 159.072 157.632 165.408 145.536C171.936 133.44 175.2 119.424 175.2 103.488C175.2 87.36 171.936 73.344 165.408 61.44C159.072 49.344 150.336 40.032 139.2 33.504C128.064 26.976 115.392 23.712 101.184 23.712C86.976 23.712 74.304 26.976 63.168 33.504C52.032 40.032 43.2 49.344 36.672 61.44C30.336 73.344 27.168 87.36 27.168 103.488C27.168 119.424 30.336 133.44 36.672 145.536C43.2 157.632 52.032 166.944 63.168 173.472C74.496 180 87.168 183.264 101.184 183.264Z" fill="#FFFCFC"/>
</svg>
<svg width="138" height="201" viewBox="0 0 138 201" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M105.872 201L58.064 118.92H26.384V201H0.176002V0.263992H64.976C80.144 0.263992 92.912 2.85599 103.28 8.04C113.84 13.224 121.712 20.232 126.896 29.064C132.08 37.896 134.672 47.976 134.672 59.304C134.672 73.128 130.64 85.32 122.576 95.88C114.704 106.44 102.8 113.448 86.864 116.904L137.264 201H105.872ZM26.384 97.896H64.976C79.184 97.896 89.84 94.44 96.944 87.528C104.048 80.424 107.6 71.016 107.6 59.304C107.6 47.4 104.048 38.184 96.944 31.656C90.032 25.128 79.376 21.864 64.976 21.864H26.384V97.896Z" fill="#FFFCFC"/>
</svg>
<svg width="109" height="202" viewBox="0 0 109 202" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.384 22.576V89.68H99.536V111.28H26.384V180.4H108.176V202H0.176002V0.975996H108.176V22.576H26.384Z" fill="#FFFCFC"/>
</svg>
            </div>
           
        </>
    )

}
export  default SvgComp