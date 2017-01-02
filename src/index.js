import './index.css'

const audioNode = document.getElementById('audio')
const playButtonNode = document.getElementById('playButton')

playButtonNode.addEventListener('click', event => {
  if (audioNode.paused) {
    audioNode.play()
  } else {
    audioNode.pause()
    audioNode.currentTime = 0
  }
})
