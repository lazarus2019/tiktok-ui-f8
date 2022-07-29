import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Video.module.scss';
import { PlayVideoIcon, PauseVideoIcon, VolumeFullVideoIcon, VolumeMuteVideoIcon } from '../Icons';
import Video from './Video';

const cx = classNames.bind(styles);

function Player({ src }) {
  const [play, setPlay] = useState(false);
  const [volume, setVolume] = useState(100);
  const [muted, setMuted] = useState(false);

  const videoRef = useRef();

  useEffect(() => {
    if (muted) setVideoVolume(0);
  }, [muted]);

  const handlePlay = () => {
    setPlay(!play);
    videoRef.current.play();
  };

  const handlePause = () => {
    setPlay(!play);
    videoRef.current.pause();
  };

  const handleVolume = (e) => {
    console.log('child', e);
    e.stopPropagation();
    console.log('child2', e);
    const value = e.target.value;
    setVideoVolume(value);
  };

  const handleMute = () => {
    console.log('parent');
    if (muted) {
      setVideoVolume(20);
    }
    setMuted(!muted);
  };

  const setVideoVolume = (value) => {
    setVolume(value);
    videoRef.current.setVolume(parseFloat(value / 100));
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('video-container')}>
        <Video ref={videoRef} src={src} />

        <div className={cx('actions')}>
          {play ? (
            <span className={cx('icon', 'play-btn')} onClick={handlePause}>
              <PauseVideoIcon />
            </span>
          ) : (
            <span className={cx('icon', 'play-btn')} onClick={handlePlay}>
              <PlayVideoIcon />
            </span>
          )}

          <span className={cx('icon', 'volume-btn')} onClick={handleMute}>
            {muted ? <VolumeMuteVideoIcon /> : <VolumeFullVideoIcon />}
            <div className={cx('volume-control')}>
              <div className={cx('volume-field')}>
                <input
                  value={volume}
                  onChange={(e) => handleVolume(e)}
                  min="0"
                  max="100"
                  step="5"
                  type="range"
                  className={cx('volume-range')}
                />
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Player;
