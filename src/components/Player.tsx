import { ChangeEvent, useEffect, useRef, useState } from "react";
import Pause from "../assets/svg/Pause";
import PlayArrow from "../assets/svg/PlayArrow";
import SkipNext from "../assets/svg/SkipNext";
import SkipPrev from "../assets/svg/SkipPrev";
import VolumeOff from "../assets/svg/VolumeOff";
import VolumeUp from "../assets/svg/VolumeUp";
import { Music } from "./helpers/data";
import { formatDurationDisplay } from "./helpers/functions/formatDurationDisplay";

export default function Player({ data }: { data: Music[] }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [index, setIndex] = useState(0);
  const [currentSound, setCurrentSound] = useState(data[index]);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentProgress, setCurrentProgress] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [muted, setMuted] = useState(false);

  function togglePlayPause() {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      audioRef.current?.play();
      setIsPlaying(true);
    }
  }

  function toggleMute() {
    if (!audioRef.current) return;
    if (muted) {
      audioRef.current.muted = false;
      setMuted(false);
    } else {
      audioRef.current.muted = true;
      setMuted(true);
    }
  }

  function handleCurrentProgress(
    _event: ChangeEvent<HTMLInputElement>,
    newValue: number | number[]
  ) {
    if (!audioRef.current) return;
    audioRef.current.currentTime = newValue as number;
  }

  function handleVolume(
    _event: ChangeEvent<HTMLInputElement>,
    newValue: number | number[]
  ) {
    if (!audioRef.current) return;
    if (newValue === 0) {
      setMuted(true);
    } else {
      setMuted(false);
    }
    audioRef.current.volume = newValue as number;
  }

  function handleNext() {
    if (!audioRef.current) return;
    let i = index;
    if (data.length - 1 < i + 1) {
      i = 0;
    } else {
      i += 1;
    }
    setIndex(i);
  }

  function handlePrev() {
    let i = index;
    if (i - 1 < 0) {
      i = data.length - 1;
    } else {
      i -= 1;
      setIndex(i);
    }
  }

  useEffect(() => {
    if (!audioRef.current) return;
    setCurrentSound(data[index]);
    audioRef.current.src = currentSound.url;
    audioRef.current.play();
  }, [currentSound, data, index]);

  return (
    <section className="text-slate-50 text-xl flex flex-col lg:flex-row justify-center items-center max-w-screen-xl m-2 sm:m-4 rounded-sm bg-gradient-to-br from-[rgba(120,0,0,1)] to-[rgba(193,18,31,0.5)] py-2 px-2">
      <audio
        autoPlay={false}
        ref={audioRef}
        preload="metadata"
        onDurationChange={(e) => setDuration(e.currentTarget.duration)}
        onCanPlay={(e) => {
          e.currentTarget.volume = volume;
        }}
        onPlaying={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={handleNext}
        onTimeUpdate={(e) => setCurrentProgress(e.currentTarget.currentTime)}
        onVolumeChange={(e) => setVolume(e.currentTarget.volume)}
        muted={muted}
      >
        <source type="audio/mpeg" src={currentSound.url}></source>
      </audio>
      <div className="flex w-full justify-start gap-x-3 flex-col lg:w-1/3 lg:ml-4">
        <p>Musica: {currentSound.nome}</p>
        <p>Artista: {currentSound.artista}</p>
      </div>
      <div className=" flex items-center gap-x-6 justify-center w-full rounded-sm lg:w-2/3 bg-gradient-to-br from-[rgba(120,0,0,1)] to-[rgba(193,18,31,0.5)]">
        <div className="flex flex-col items-center p-2 w-1/2">
          <div className="flex w-full">
            <span aria-label="anterior" onClick={handlePrev}>
              <SkipPrev />
            </span>
            <input
              className="w-full"
              type="range"
              value={currentProgress}
              onChange={(e) => handleCurrentProgress(e, Number(e.target.value))}
              max={duration}
              min={0}
              step={0.1}
            />
            <span aria-label="proxima" onClick={handleNext}>
              <SkipNext />
            </span>
            <span aria-label="play/pause" onClick={togglePlayPause}>
              {!isPlaying ? <PlayArrow /> : <Pause />}
            </span>
          </div>
          <div className="flex justify-between px-2 w-full text-sm">
            <p>{formatDurationDisplay(currentProgress)}</p>
            <p>{formatDurationDisplay(duration)}</p>
          </div>
        </div>
        <input
          className="p-1 w-16 sm:w-32"
          type="range"
          onChange={(e) => handleVolume(e, Number(e.target.value))}
          max={1}
          min={0}
          step={0.1}
          value={volume}
        />
        <span onClick={toggleMute}>{muted ? <VolumeOff /> : <VolumeUp />}</span>
      </div>
    </section>
  );
}
