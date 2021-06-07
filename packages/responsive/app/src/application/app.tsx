import React, { useEffect } from 'react';
import { useMedia } from '../../../media/src/media-consumer';

export const App = () => {

    const media = useMedia();
    useEffect(()=>{
        console.log("media===", media.name, media.breakpoint);
    })
    return (
        <div>
            Hiiiii
        </div>
    )
}
