const sounds = ['Applause', 'Boo', 'Gasp', 'Tada', 'Victory', 'Wrong']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', () => {
        stop_song()
        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
})

function stop_song(){
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0
    })

    
}