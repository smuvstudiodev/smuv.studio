import '../styles/globals.css'
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {

    window.addEventListener("load", function () {
    const body = document.querySelector('body');

      const anim1 = setTimeout(() => {
        animateLoaderContainer();
      }, 2500)
      const anim2 = setTimeout(() => {
        closeLoaderContainer();
      }, 3500);

      body.classList.add("scroll-none");
      body.classList.add("h-screen");
      body.classList.add("overflow-hidden");

      return function cleanup() {
        clearTimeout(anim1)
        clearTimeout(anim2);
        body.classList.remove("scroll-none");
        body.classList.remove("h-screen")
        body.classList.remove("overflow-hidden")
      }
    });
  }, [])
  // useEffect(() => {
  //   const body = document.querySelector('body');
  //   if (isOpen) {
  //     body.classList.add("scroll-none");
  //     body.classList.add("h-screen")
  //     body.classList.add("overflow-hidden")
  //   } else {
  //     body.classList.remove("scroll-none");
  //     body.classList.remove("h-screen")
  //     body.classList.remove("overflow-hidden")
  //   }
  // }, [isOpen])
  const animateLoaderContainer = () => {
    const loaderCon = document.querySelector("#loader");
    loaderCon.style.opacity = 0
    // loaderCon.style.display = "none"
  }
  const closeLoaderContainer = () => {
    const body = document.querySelector('body');
    const loaderCon = document.querySelector("#loader");
    // loaderCon.style.opacity = 0
    loaderCon.style.display = "none"
    body.classList.remove("scroll-none");
    body.classList.remove("h-screen")
    body.classList.remove("overflow-hidden")
  }
  return (
    <>
      <div id="loader" className="bg-black w-screen transition-[2s] top-0 left-0 min-h-screen h-full fixed z-50 flex justify-center items-center content-center place-content-center">
        <object type="image/svg+xml" className="w-20 h-20 lg:w-32 lg:h-32 " data="/images/Loading_State.svg">svg-animation</object>
      </div>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
