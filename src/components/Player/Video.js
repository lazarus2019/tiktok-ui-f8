import { useImperativeHandle, useRef, forwardRef } from 'react';

function Video(props, ref) {
  const videoRef = useRef();

  useImperativeHandle(ref, () => ({
    play() {
      videoRef.current.play();
    },
    pause() {
      videoRef.current.pause();
    },
    setVolume(value) {
      videoRef.current.volume = value;
    },
  }));

  return <video ref={videoRef} width="300" loop {...props} />;
}
export default forwardRef(Video);
