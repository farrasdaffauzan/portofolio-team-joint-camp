particlesJS();

<<<<<<< HEAD

=======
/*
>>>>>>> 302cd1b3b88cfc7d55678bea3bfcb84901b98bae
function() {

    pJS.interactivity.mouse.click_pos_x = pJS.interactivity.mouse.pos_x;
    pJS.interactivity.mouse.click_pos_y = pJS.interactivity.mouse.pos_y;
    pJS.interactivity.mouse.click_time = new Date().getTime();
  
    if (pJS.interactivity.events.onclick.enable) {
  
      switch (pJS.interactivity.events.onclick.mode) {
  
        case 'push':
          if (pJS.particles.move.enable) {
            pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb, pJS.interactivity.mouse);
          } else {
            if (pJS.interactivity.modes.push.particles_nb == 1) {
              pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb, pJS.interactivity.mouse);
            } else if (pJS.interactivity.modes.push.particles_nb > 1) {
              pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb);
            }
          }
          break;
  
        case 'remove':
          pJS.fn.modes.removeParticles(pJS.interactivity.modes.remove.particles_nb);
          break;
  
        case 'bubble':
          pJS.tmp.bubble_clicking = true;
          break;
  
        case 'repulse':
          pJS.tmp.repulse_clicking = true;
          pJS.tmp.repulse_count = 0;
          pJS.tmp.repulse_finish = false;
          setTimeout(function() {
            pJS.tmp.repulse_clicking = false;
          }, pJS.interactivity.modes.repulse.duration * 1000)
          break;
  
      }
  
    }
  
  }
  function(e) {
<<<<<<< HEAD

=======
>>>>>>> 302cd1b3b88cfc7d55678bea3bfcb84901b98bae
    pJS.interactivity.mouse.pos_x = null;
    pJS.interactivity.mouse.pos_y = null;
    pJS.interactivity.status = 'mouseleave';
  
  }
  function(e) {

    if (pJS.interactivity.el == window) {
      var pos_x = e.clientX,
        pos_y = e.clientY;
    } else {
      var pos_x = e.offsetX || e.clientX,
        pos_y = e.offsetY || e.clientY;
    }
  
    pJS.interactivity.mouse.pos_x = pos_x;
    pJS.interactivity.mouse.pos_y = pos_y;
  
    if (pJS.tmp.retina) {
      pJS.interactivity.mouse.pos_x *= pJS.canvas.pxratio;
      pJS.interactivity.mouse.pos_y *= pJS.canvas.pxratio;
    }
  
    pJS.interactivity.status = 'mousemove';
  
  }
<<<<<<< HEAD
  */
=======
 */ 
>>>>>>> 302cd1b3b88cfc7d55678bea3bfcb84901b98bae
