# code-ninjas

Practice projects from [Shaun](https://github.com/iamshaunjp)'s awesome developer tutorials.

## Overview

This repository contains learning projects built with React Native and Expo, following tutorials by Shaun. The main app, "Shelfie," is a bookshelf management tool that allows users to register, log in, and manage their book collection.

## Features

- User authentication (register, login)
- Dashboard for managing books
- Add, view, and edit book details
- User profile management
- Responsive UI with custom components

## Tech Stack

- React Native
- Expo
- TypeScript
- Appwrite (backend services)

## Getting Started

1. Install dependencies:
   ```
   npm install
   ```
2. Start the Expo development server:
   ```
   npx expo start
   ```
3. Follow the prompts to run the app on your device or emulator.

## Appwrite Setup

To run this project locally, you will need to set up an Appwrite account and create a new project:

1. Sign up at [Appwrite](https://appwrite.io/) and log in to the console.
2. Create a new project for your app.
3. In your Appwrite project, create a database and a collection for storing book data.
4. Note your Project ID, API Endpoint, Database ID, and Collection ID.
5. Add these values to your `.env` file or Expo environment using the environment variables listed below.

## Environment Variables

The following environment variables are required for the app to function correctly. Add them to your `.env` file or configure them in your Expo environment:

```
EXPO_PUBLIC_APPWRITE_PROJECT_ID
EXPO_PUBLIC_APPWRITE_ENDPOINT
EXPO_PUBLIC_DATABASE_ID
EXPO_PUBLIC_COLLECTION_ID
EXPO_PUBLIC_ENDPOINT
```

## Folder Structure

- `shelfie/` - Main app source code
  - `app/` - Application pages and layouts
  - `components/` - Reusable UI components
  - `contexts/` - React context providers
  - `hooks/` - Custom React hooks
  - `lib/` - Utility libraries (e.g., Appwrite integration)
  - `assets/` - Images and icons

## License

This project is for educational purposes.
