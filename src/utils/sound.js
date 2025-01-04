const playSound = (soundName) => {
  const audio = new Audio(`/sounds/${soundName}.mp3`);
  audio.volume = 0.2; // Adjust volume to 20%
  audio.play().catch(error => {
    // Silently handle autoplay restrictions
    console.log('Sound play prevented:', error);
  });
};

export const sounds = {
  softClick: () => playSound('soft-click'),
  buttonPop: () => playSound('button-pop'),
  linkHover: () => playSound('link-hover')
}; 