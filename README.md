# FFLPlayer-Sample

이 샘플은 Multi DRM으로 패키징된 HLS, DASH 영상을 어떻게 실행하는지 보여주는 샘플파일입니다.
FFL-Player는 웹에서만 지원되면 아래 두가지 경우에 따라 다르게 설정됩니다.

<br/><br/>

## FlipFlop 외부 비디오 재생

외부 비디오 재생의 경우 기본적으로 video.js libaray 사용법과 크게 다르지 않습니다.
[videojs-sample.js](https://github.com/jocoos-dev/FFLPlayer-Sample/blob/main/js/videojs-sample.js)를 따라 이용해 주시기 바랍니다.

<br/><br/>

## 내부 비디오 재생 (준비중)

내부 비디오를 재생하는 경우 DRM의 유무에 따라 재생 시나리오가 달라집니다.

### DRM이 적용되지 않은 비디오

비디오와 Streaming Token을 확인하여 권한을 체크한 후 권한이 유효하면 비디오를 실행합니다.

### DRM이 적용된 비디오

비디오와 Streaming Token 뿐 아니라 라이선스 정책에 따라 유효성을 체크한 후 비디오를 실행합니다.
또한, 브라우저에 따라 정책이 달라질 수 있습니다.

1. MPEG-DASH CENC로 암호화된 비디오
   DRM으로 암호화된 DASH 컨텐츠는 PlayReady의 경우 (Edge), Widevine의 경우 (Chrome, FireFox) 브라우저에서 재생하도록 설정됩니다.

2. HLS FPS(FairPlay Streaming)로 암호화된 비디오
   DRM으로 암호화된 HLS 컨텐츠는 Mac OS X (10.10 or later)버전에서 Safari 브라우저에서 재생하도록 설정됩니다.
