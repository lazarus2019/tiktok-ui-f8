import { forwardRef, useImperativeHandle, useRef } from 'react';
import classNames from 'classnames/bind';

import styles from './Video.module.scss';


const cx = classNames.bind(styles);

function Video(props, ref) {
  const videoRef = useRef();

  useImperativeHandle(ref, () => ({
    play() {
      videoRef.current.play();
    },
    pause() {
      videoRef.current.pause();
    },
  }));

  return (
    <div className={cx('wrapper')}>
      <div className={cx('video-container')}>
        <video ref={videoRef} width="300" className={cx('video')} {...props}></video>
        {props.children}        
      </div>
    </div>
  );
}

export default forwardRef(Video);
