import { X_LARGE_MEDIA, Media, getMediaByWindowSize } from "./breakpoints";
import { useState, useEffect, useCallback } from "react";

export const useFetchMedia = () => {
  
  const [media, setMedia] = useState<Media>(X_LARGE_MEDIA);
  let timeOutHandler: number = 0;

  const handleScreenResize = useCallback(() => {
    clearTimeout(timeOutHandler);
    timeOutHandler = window.setTimeout(() => {
      setMedia(
        window ? getMediaByWindowSize(window.innerWidth) : X_LARGE_MEDIA
      );
    }, 100);
  }, [timeOutHandler]);

  useEffect(() => {
    window.addEventListener("resize", handleScreenResize);

    return () => {
      window.removeEventListener("resize", handleScreenResize);
      clearTimeout(timeOutHandler);
    };
  }, []);

  return media;
};
