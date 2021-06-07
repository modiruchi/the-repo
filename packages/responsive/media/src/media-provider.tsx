import React, { createContext } from "react";
import { Media, X_LARGE_MEDIA } from "./breakpoints";
import { useFetchMedia } from "./use-fetch-media";

export const mediaContext = createContext<Media>(X_LARGE_MEDIA);

export const MediaProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const media = useFetchMedia();

  return (
    <mediaContext.Provider value={media}>{children}</mediaContext.Provider>
  );
};
