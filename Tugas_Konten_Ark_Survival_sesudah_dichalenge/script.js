const boxes = document.querySelectorAll('.box')
const audioButtons = document.querySelectorAll('.audio-button'); // Untuk Audio
let currentSound = null;

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes(){
    const triggerRight = window.innerWidth / 5 * 4; 

    boxes.forEach(box => {
        const boxLeft = box.getBoundingClientRect().left; // Mengambil posisi elemen dari kiri
        if (boxLeft < triggerRight) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    })
}

audioButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Mengambil elemen audio yang berada setelah tombol
        const audio = button.nextElementSibling;
        playSound(audio);
    });
});

function playSound(sound) {
    if (currentSound && !currentSound.paused) {
        currentSound.pause();
        currentSound.currentTime = 0;
    }
    if (sound) {
        sound.play();
        currentSound = sound;
    }
}