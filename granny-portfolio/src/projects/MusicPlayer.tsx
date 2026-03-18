import { useState, useRef, useEffect } from "react";
import TRACKS from "../config/tracks";

export default function MusicPlayer() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.2);
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentTrack = TRACKS[currentTrackIndex];

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const playTrack = (index: number) => {
    setCurrentTrackIndex(index);
    setIsPlaying(true);
  };

  const skipTrack = (direction: 1 | -1) => {
    let nextIndex = currentTrackIndex + direction;
    if (nextIndex < 0) nextIndex = TRACKS.length - 1; // loop to end
    if (nextIndex >= TRACKS.length) nextIndex = 0; // loop to start
    setCurrentTrackIndex(nextIndex);
    setIsPlaying(true);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleScrubberClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percent = clickX / rect.width;
    const newTime = percent * duration;

    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play().catch(() => setIsPlaying(false));
    }
  }, [currentTrackIndex]);

  const formatTime = (timeInSeconds: number) => {
    if (isNaN(timeInSeconds)) return "0:00";
    const mins = Math.floor(timeInSeconds / 60);
    const secs = Math.floor(timeInSeconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const metalButton = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    background: "linear-gradient(to bottom, #f8f8f8 0%, #d4d4d4 100%)",
    border: "1px solid #777",
    boxShadow:
      "inset 0 1px 2px rgba(255,255,255,0.9), 0 2px 4px rgba(0,0,0,0.3)",
    cursor: "pointer",
    color: "#444",
  };

  const progressPercent = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div
      style={{
        width: "calc(100% + 24px)",
        height: "calc(100% + 24px)",
        display: "flex",
        flexDirection: "column",
        background:
          "linear-gradient(to bottom, #e2e2e2 0%, #cecece 50%, #b8b8b8 100%)",
        padding: "16px",
        fontFamily: '"Lucida Grande", Geneva, sans-serif',
        userSelect: "none",
        margin: "-12px",
      }}
    >
      <audio
        ref={audioRef}
        src={currentTrack.src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => skipTrack(1)}
      />

      <div
        style={{
          background: "#0a0a0a",
          borderRadius: "4px",
          border: "1px solid #444",
          borderBottom: "1px solid #fff",
          boxShadow: "inset 0 4px 10px rgba(0,0,0,0.8)",
          display: "flex",
          flexDirection: "column",
          padding: "12px",
          marginBottom: "16px",
        }}
      >
        <div
          style={{
            color: "#88ff88",
            textShadow: "0 0 5px rgba(136, 255, 136, 0.5)",
            fontSize: "14px",
            fontWeight: "bold",
            letterSpacing: "1px",
            textAlign: "center",
            marginBottom: "12px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {isPlaying ? "▶ " : "❚❚ "} {currentTrack.title}
        </div>

        {/* scrubber */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              fontSize: "11px",
              color: "#88ff88",
              fontWeight: "bold",
              width: "30px",
            }}
          >
            {formatTime(currentTime)}
          </div>

          <div
            onClick={handleScrubberClick}
            style={{
              flex: 1,
              height: "14px",
              background: "#333",
              borderRadius: "7px",
              boxShadow:
                "inset 0 2px 4px rgba(0,0,0,0.6), 0 1px 0 rgba(255,255,255,0.2)",
              position: "relative",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                width: `${progressPercent}%`,
                height: "100%",
                background:
                  "linear-gradient(to bottom, #b3d4ff 0%, #66a3ff 100%)",
                borderRadius: "7px",
                boxShadow:
                  "inset 0 1px 2px rgba(255,255,255,0.5), 0 0 8px rgba(102, 163, 255, 0.6)",
                transition: "width 0.1s linear", // Smooth gliding
              }}
            />
          </div>

          <div
            style={{
              fontSize: "11px",
              color: "#88ff88",
              fontWeight: "bold",
              width: "35px",
              textAlign: "right",
            }}
          >
            -{formatTime(duration - currentTime)}
          </div>
        </div>
      </div>

      {/* playback */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        {/* volume */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            width: "80px",
          }}
        >
          <span style={{ fontSize: "12px", color: "#555" }}>🔈</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => {
              const val = parseFloat(e.target.value);
              setVolume(val);
              if (audioRef.current) audioRef.current.volume = val;
            }}
            style={{ width: "100%", cursor: "pointer" }}
          />
        </div>

        {/* buttons */}
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <button
            onClick={() => skipTrack(-1)}
            style={{
              ...metalButton,
              width: "32px",
              height: "32px",
              fontSize: "12px",
            }}
          >
            {"<<"}
          </button>

          <button
            onClick={togglePlay}
            style={{
              ...metalButton,
              width: "44px",
              height: "44px",
              fontSize: "16px",
              paddingLeft: isPlaying ? "0" : "4px",
            }}
          >
            {isPlaying ? "❚❚" : "▶"}
          </button>

          <button
            onClick={() => skipTrack(1)}
            style={{
              ...metalButton,
              width: "32px",
              height: "32px",
              fontSize: "12px",
            }}
          >
            {">>"}
          </button>
        </div>

        <div style={{ width: "80px" }} />
      </div>

      {/* tracklist */}
      <div
        style={{
          flex: 1,
          background: "#fff",
          border: "1px solid #999",
          borderTopColor: "#666",
          boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1)",
          overflowY: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            background: "linear-gradient(to bottom, #f0f0f0 0%, #dcdcdc 100%)",
            borderBottom: "1px solid #999",
            padding: "4px 12px",
            fontSize: "11px",
            fontWeight: "bold",
            color: "#444",
          }}
        >
          <div style={{ flex: 1 }}>Name</div>
        </div>

        {TRACKS.map((track, index) => {
          const isSelected = index === currentTrackIndex;
          return (
            <div
              key={track.id}
              onClick={() => playTrack(index)}
              style={{
                padding: "6px 12px",
                fontSize: "12px",
                cursor: "pointer",
                background: isSelected
                  ? "#3875d7"
                  : index % 2 === 0
                    ? "#f2f6fa"
                    : "#ffffff",
                color: isSelected ? "#fff" : "#000",
                display: "flex",
                alignItems: "center",
              }}
            >
              {isSelected && (
                <span style={{ marginRight: "8px", fontSize: "10px" }}>▶</span>
              )}
              {!isSelected && (
                <span style={{ width: "16px", marginRight: "8px" }} />
              )}
              {track.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}
