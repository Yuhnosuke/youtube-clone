# youtube-clone

This is a demo project to build a simple YouTube-clone application inspired by [NeetCode](https://neetcode.io/).

## Tech Stack

- [TypeScript](https://www.typescriptlang.org/docs/)
- [Next.js](https://nextjs.org/docs)
- [Express.js](https://expressjs.com/)
- [Docker](https://docs.docker.com/)
- [FFmpeg](https://ffmpeg.org/documentation.html)
- [Firebase Authentication](https://firebase.google.com/docs/auth)
- [Firebase Functions](https://firebase.google.com/docs/functions)
- [Firebase Firestore](https://firebase.google.com/docs/firestore)
- [Google Cloud Storage](https://cloud.google.com/storage/docs)
- [Google Cloud Pub/Sub](https://cloud.google.com/pubsub/docs)
- [Google Cloud Run](https://cloud.google.com/run/docs)

## Architecture

<img width="1086" height="666" alt="Screenshot 2025-08-04 at 11 29 14" src="https://github.com/user-attachments/assets/9c5e599d-8b9b-4f9e-8da9-d13bc12a7034" />


### Frontend

- Next.js (TypeScript) is used to build the frontend UI
- Users can upload videos and view uploaded content.
- The frontend interacts with the backend through HTTPS endpoints and Firebase Authentication.

### Authentication

- Firebase Authentication handles user registration and login.
- ID tokens issued by Firebase are attached to requests from the frontend for authorization.

### Video Upload & Processing Flow

1. The frontend requests a signed URL from a Firebase Function (generateUploadUrl).
2. The file is uploaded directly to Google Cloud Storage using the signed URL.
3. Once uploaded, a Cloud Storage trigger (or similar mechanism) sends a message to a Pub/Sub topic (video-uploads-topic), including metadata like filename.
4. A Cloud Run service (video-processing-service) is subscribed to this topic.
5. Cloud Run receives the message and downloads the raw video file.
6. The video is processed using FFmpeg (e.g., transcoding to 360p).
7. The processed video is uploaded back to Cloud Storage.
8. Firestore is updated with metadata about the processed video.

### Infrastructure Components

- Cloud Run: Serverless container runtime that handles video processing and host web client.
- Cloud Pub/Sub: Message queue used to trigger video processing asynchronously.
- Cloud Storage: Stores both raw and processed videos.
- Firebase Functions: Used to generate signed URLs and act as lightweight API endpoints.
- Firestore: Stores video metadata such as title, URL, user, etc.

## Acknowledgment

Many thanks [NeetCode](https://neetcode.io/) for clear and great educational content.
