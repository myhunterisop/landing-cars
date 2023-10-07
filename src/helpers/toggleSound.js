export const toggleSound = (audioElement) => {
    if (audioElement) {
        if (audioElement.volume > 0) {
            audioElement.volume = 0;
        } else {
            audioElement.volume = 0.05;
        }
    }
};