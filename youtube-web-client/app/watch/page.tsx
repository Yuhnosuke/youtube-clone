'use client'

import { useSearchParams } from 'next/navigation'

export const Watch = () => {
  const videoPrefix = 'https://storage.googleapis.com/youtube-clone-processed-videos-bucket/'
  const videoSrc = useSearchParams().get('v')

  return (
    <div>
      <h1>Watch Page</h1>
      {<video controls src={videoPrefix + videoSrc} />}
    </div>
  )
}

export default Watch
