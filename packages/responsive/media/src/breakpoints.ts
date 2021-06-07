export interface Media {
    breakpoint: number;
    name: BreakpointName;
}

// export type Breakpoint = 'xs' | 's' | 'm' | 'l' | 'xl';
export type BreakpointName = 'X_SMALL_MEDIA' | 'SMALL_MEDIA' | 'MEDIUM_MEDIA' | 'LARGE_MEDIA' | 'X_LARGE_MEDIA';

export const X_SMALL_MEDIA: Media = { breakpoint: 0, name: 'X_SMALL_MEDIA' };
export const SMALL_MEDIA: Media = { breakpoint: 576, name: 'SMALL_MEDIA' };
export const MEDIUM_MEDIA: Media = { breakpoint: 768, name: 'MEDIUM_MEDIA' };
export const LARGE_MEDIA: Media = { breakpoint: 992, name: 'LARGE_MEDIA' };
export const X_LARGE_MEDIA: Media = { breakpoint: 1200, name: 'X_LARGE_MEDIA' };

// The ordering should be maintained from smallest to largest
export const medias: Media[] = [
    X_LARGE_MEDIA,
    LARGE_MEDIA,
    MEDIUM_MEDIA,
    SMALL_MEDIA,
    X_SMALL_MEDIA
];

export const getMediaByWindowSize = (windowWidth: number): Media => {

    const currentMedia = medias.find((media) => media.breakpoint <= windowWidth);

    return currentMedia ?? X_LARGE_MEDIA;
}


