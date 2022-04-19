import '../styles/globals.css'
import {useEffect} from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(()=>{  
  window.addEventListener("load", function(){
    const anim1 = setTimeout(()=>{
      animateLoaderContainer();
    },2500)
    const anim2 = setTimeout(()=>{
      closeLoaderContainer();
    },3500)
    return function cleanup(){
      clearTimeout(anim1)
    clearTimeout(anim2)
    }
  });
  },[])
  const animateLoaderContainer = ()=>{
      const loaderCon = document.querySelector("#loader");
      loaderCon.style.opacity = 0
      // loaderCon.style.display = "none"
  }
  const closeLoaderContainer = ()=>{
    const loaderCon = document.querySelector("#loader");
    // loaderCon.style.opacity = 0
    loaderCon.style.display = "none"
}
  return (
    <>
    <div id="loader" className="bg-black w-screen transition-[2s] top-0 left-0 h-screen fixed z-50 flex justify-center items-center content-center place-content-center">
    <object type="image/svg+xml" className="w-6 h-6 lg:w-20 lg:h-20 " data="/images/Loading_State.svg">svg-animation</object>
    </div>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
