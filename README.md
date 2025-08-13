# code-ninjas

Practice projects from [Shaun](https://github.com/iamshaunjp)'s awesome developer tutorials.

## Overview

This repository contains learning projects and exercises inspired by Shaun's tutorials. The main focus is on building practical coding skills through hands-on development.

## Projects

- `ninja-goals/`: A React Native (Expo) app for tracking coding goals with Firebase backend.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/vr1e/code-ninjas.git
   cd code-ninjas/ninja-goals
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   - Copy `.env.example` to `.env`
   - Add your Firebase configuration values to `.env`

4. Start the development server:
   ```bash
   npm start
   ```

## Environment Variables

Create a `.env` file with your Firebase configuration:

```env
EXPO_PUBLIC_FIREBASE_API_KEY=your_api_key_here
EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
EXPO_PUBLIC_FIREBASE_PROJECT_ID=your_project_id_here
EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
EXPO_PUBLIC_FIREBASE_APP_ID=your_app_id_here
```

## Technologies Used

- React Native (Expo)
- TypeScript
- Firebase Firestore

## License

This project is for educational purposes.
