import React from 'react';

import { mediaContext } from './media-provider';

export const useMedia = () => React.useContext(mediaContext);