import { useState, useEffect } from "react";

type VideoType = {
  id: { videoId: string };
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      medium: { url: string };
    };
  };
};

type Error = {
  message: string;
};
const API_Key = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY; // Access the API key from the environment variable
const VIDEO_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=art%20tutorial&type=video&key=${API_Key}`;

export default function Videos() {
  const [videos, setVideos] = useState<VideoType[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(VIDEO_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setVideos(data.items);
      } catch (error: any) {
        setError({ message: error.message });
      }
    };
    fetchVideos();
  }, []);

  return (
    <div className="my-4">
      {error && <p className="text-red-500">{error.message}</p>}
      <div>
        {videos.length === 0 ? (
          <p>Loading videos...</p>
        ) : (
          <ul className="grid grid-cols-3 gap-4 max-sm:grid-cols-2 ">
            {videos.map((video) => (
              <li
                key={video.id.videoId}
                className="p-2 bg-white rounded shadow"
              >
                <a
                  href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={video.snippet.thumbnails.medium.url}
                    alt={video.snippet.title}
                    className="mb-2 rounded w-full"
                  />
                  <h3 className="text-lg ">{video.snippet.title}</h3>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );

}
