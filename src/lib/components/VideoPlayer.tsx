import ReactPlayer from "react-player";

export default function ReactVideoPlayer({ url }: { url: string }) {
  return (
    <div className="w-full mx-auto h-full">
      <ReactPlayer
        src={url}
        controls
        style={{ width: "100%", height: "auto", aspectRatio: "16/9" }}
      />
    </div>
  );
}
