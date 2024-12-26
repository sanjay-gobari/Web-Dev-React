
export function smoothScroll(containerRef,options){
  if(!containerRef)return
  const container = containerRef.current;
  let velocity = 0;
  let acce=options.acce; //acceleration rate
  let isScrolling = false; //setting initial scrolling to false
  const friction =options.friction; // Controls deceleration speed
  let animationFrame;

  //checking wheel value and animate
  const handleWheel = (event) => { 
    velocity += (event.deltaY * acce);
    if (!isScrolling) {
      isScrolling = true;
      animateScroll();
    }
  };

  const animateScroll = () => {
    if (Math.abs(velocity) > 0.1) {
      container.scrollTop += velocity;
      velocity *= friction;
      animationFrame = requestAnimationFrame(animateScroll);
    } else {
      isScrolling = false;
      velocity = 0;
    }
  };

  container.addEventListener('wheel', handleWheel);

  return () => {
    container.removeEventListener('wheel', handleWheel);
    cancelAnimationFrame(animationFrame);
  };
}