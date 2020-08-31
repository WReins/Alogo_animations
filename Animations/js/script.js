var dressage = bodymovin.loadAnimation({
  container: document.getElementById('dressage'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'dressage.json'
})

var jump = bodymovin.loadAnimation({
  container: document.getElementById('jump'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'jump.json'
})

var run = bodymovin.loadAnimation({
  container: document.getElementById('run'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'run.json'
})

var run = bodymovin.loadAnimation({
  container: document.getElementById('idle'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'idle.json'
})
