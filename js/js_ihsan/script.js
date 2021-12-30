// Library particleJS
particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#8c54fb" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#8c54fb" },
      polygon: { nb_sides: 5 },

    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#9600ff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas", 
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});

// Library buatan
const $ = (className) => {
  
  this.elms = document.getElementsByClassName(className);

  this.scale = (elm) => {
    if (elm.className.includes('scale')) {
      elm.classList.remove('scale');
    } else {
      elm.classList.add('scale')
    }
  } 

  this.rotate = (elm) => {
    if (elm.className.includes('rotate')) {
      elm.classList.remove('rotate');
    } else {
      elm.classList.add('rotate')
    }
  }
  
  this.translate = (elm) => {
    if (elm.className.includes('translate')) {
      elm.classList.remove('translate');
    } else {
      elm.classList.add('translate')
    }
  } 
  this.click = (animation) => {
     // Animasi pertama : scale perbesar
    if (this.elms && this.elms.length && animation === 'toggle-scale-1') {
      for (let i = 0; i < this.elms.length; i++) {
        const elm = this.elms[i];
        elm.addEventListener('click', this.scale.bind(this, elm));
      }
    }
    // Animasi kedua : rotasi
    if (this.elms && this.elms.length && animation === 'toggle-rotate-2') {
      for (let i = 0; i < this.elms.length; i++) {
        const elm = this.elms[i];
        elm.addEventListener('click', this.rotate.bind(this, elm));
      }
    }
    // Animasi ketiga : scale perkecil
    if (this.elms && this.elms.length && animation === 'toggle-scale-3') {
      for (let i = 0; i < this.elms.length; i++) {
        const elm = this.elms[i];
        elm.addEventListener('click', this.scale.bind(this, elm));
      }
    }
    // Animasi keempat : Geser ke kanan
    if (this.elms && this.elms.length && animation === 'toggle-translate-4') {
      for (let i = 0; i < this.elms.length; i++) {
        const elm = this.elms[i];
        elm.addEventListener('click', this.translate.bind(this, elm));
      }
    }
     // Animasi keempat : Geser ke kiri
    if (this.elms && this.elms.length && animation === 'toggle-translate-5') {
      for (let i = 0; i < this.elms.length; i++) {
        const elm = this.elms[i];
        elm.addEventListener('click', this.translate.bind(this, elm));
      }
    }
    // Animasi kelima : Geser ke atas
    if (this.elms && this.elms.length && animation === 'toggle-translate-6') {
      for (let i = 0; i < this.elms.length; i++) {
        const elm = this.elms[i];
        elm.addEventListener('click', this.translate.bind(this, elm));
      }
    }
      // Animasi keenam : Geser ke bawah
    if (this.elms && this.elms.length && animation === 'toggle-translate-7') {
      for (let i = 0; i < this.elms.length; i++) {
        const elm = this.elms[i];
        elm.addEventListener('click', this.translate.bind(this, elm));
      }
    }
  }

  return this
}


