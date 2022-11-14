const options = {};

// getPlayer를 이용해 videojs 인스턴스를 사용할 수 있습니다.
const player = fflPlayer('my-player', options, function onPlayerReady() {
  // videojs의 기능을 그대로 사용할 수 있습니다.
  videojs.log('Your player is ready!');

  player.src('http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4');

  // 이곳의 this는 videojs instance를 가리킵니다.
  this.play();

  // 이곳에 바로 이벤트를 등록할 수 있습니다.
  this.on('ended', function () {
    videojs.log('Awww...over so soon?!');
  });
}).getPlayer();
