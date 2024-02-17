import React from 'react'
import { useState } from 'react';
import { hbimgList } from './herodata.js';


// const Hero = () => {
//   return (
//     <div>
//       <img></img>
//     </div>
//   )
// }


// 

const HeroBanner = () => {
    const [index, setIndex] = useState(0);
    const hasNext = index < hbimgList.length - 1;
    const hasLast = index > 0;
    const image = hbimgList[index];
    // return (
    //     <div>
    //         <img src={Top} alt='sss'/> 
    //     </div>
    // )
    // try use data
    // { hbimgList.map ((image) => ( this function gonna loop all img data
    return (
        <div>
          
                <div key ={image.name}>
                    <img onClick={nextClick} className=""
                    src={image.url} 
                    alt={image.alt}
                    style={{width:'100%',height:'auto'}} />
        </div>

    </div>
    );


    function nextClick() {
        if (hasNext) {
          setIndex(index + 1);
        } else {
          setIndex(0); 
        }
      }


    //   function lastClick() {
    //     if(goLast) {
    //         setIndex(index +1 ;)
    //     } else {
    //         setIndex(0);
    //     }
    //   }


};

export default HeroBanner;