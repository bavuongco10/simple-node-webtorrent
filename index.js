var WebTorrent = require('webtorrent');
var bytesNode = require('bytes');

var client = new WebTorrent();

// var magnetURI = 'magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel';
var magnetURI = 'magnet:?xt=urn:btih:5bf66772f3900b6e96bacf4332379a227a3af89d&dn=Batman.Hush.2019.1080p.WEB-DL.DD5.1.H264-FGT&tr=http%3A%2F%2Ftracker.trackerfix.com%3A80%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2790&tr=udp%3A%2F%2F9.rarbg.to%3A2770';

client.add(magnetURI, {path: '/tmp/'}, function (torrent) {
  torrent.on('download', function (bytes) {
    console.log(' progress: ' + (torrent.progress * 100).toFixed(2) + '|speed: ' + bytesNode(torrent.downloadSpeed))
  });

  torrent.on('done', function () {
    console.log('torrent download finished')
  })
});
