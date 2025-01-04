let isMuted = false;

const playSound = (soundName) => {
  if (isMuted) return;
  
  const audio = new Audio(`/sounds/${soundName}.mp3`);
  audio.volume = 0.2;
  audio.play().catch(error => {
    console.log('Sound play prevented:', error);
  });
};

export const sounds = {
  softClick: () => playSound('soft-click'),
  buttonPop: () => playSound('button-pop'),
  linkHover: () => playSound('link-hover'),
  toggleMute: () => {
    isMuted = !isMuted;
    return isMuted;
  },
  isMuted: () => isMuted
}; 