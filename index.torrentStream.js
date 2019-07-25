var bytesNode = require('bytes');
var torrentStream = require('torrent-stream');

var magnetURI = 'magnet:?xt=urn:btih:5bf66772f3900b6e96bacf4332379a227a3af89d&dn=Batman.Hush.2019.1080p.WEB-DL.DD5.1.H264-FGT&tr=http%3A%2F%2Ftracker.trackerfix.com%3A80%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2790&tr=udp%3A%2F%2F9.rarbg.to%3A2770';
var engine = torrentStream(magnetURI, {
  path: '/tmp/',
  upload: 0
});

const TICK_TIME = 250;

engine.on('ready', function() {
  engine.files.forEach(function(file) {
    console.log('filename:', file.name);
    var stream = file.createReadStream();
  });

  setInterval(() => {
    var speed = engine.swarm.downloadSpeed();
    console.log('speed: ', bytesNode(speed));
  }, TICK_TIME);
});
