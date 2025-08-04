import { httpsCallable } from 'firebase/functions'
import { functions } from './firebase'

const generateUploadUrlFunction = httpsCallable<
  { fileExtension: string | undefined },
  { url: string }
>(functions, 'generateUploadUrl')

export async function uploadVideo(file: File) {
  const response = await generateUploadUrlFunction({
    fileExtension: file.name.split('.').pop(),
  })

  // Upload the file to the signed URL
  const uploadResult = await fetch(response?.data?.url, {
    method: 'PUT',
    body: file,
    headers: {
      'Content-Type': file.type,
    },
    cache: 'no-cache',
  })

  return uploadResult
}

const getVideosFunction = httpsCallable(functions, 'getVideos')

export type Video = {
  id?: string
  uid?: string
  filename?: string
  status?: 'processing' | 'processed'
  title?: string
  description?: string
}

export async function getVideos() {
  const response = await getVideosFunction()
  return response.data as Video[]
}
