# Real-Time Chat Application

A real-time chat application built using **Django**, **React**, and **Django Channels** for WebSocket-based communication. The app allows users to send and receive messages instantly in chat rooms and private conversations, with a clean and responsive design.

## Features

- **Real-Time Messaging**: Send and receive messages instantly without page refresh.
- **Chat Rooms**: Public and private chat rooms for group conversations.
- **Private Messaging**: Direct messaging between users.
- **Message History**: All messages are stored and displayed when entering a room.
- **User Authentication**: Secure login and registration functionality.
- **Mobile-Friendly**: Fully responsive and optimized for mobile devices.

## Technologies Used

- **Backend**:  
  - Django: Python-based web framework for building the back-end API.
  - Django Channels: Real-time communication with WebSockets.
  - PostgreSQL: Database for storing messages, users, and room data.
  
- **Frontend**:  
  - React: JavaScript library for building the user interface.
  - WebSocket API: Enables real-time communication in the frontend.

- **Others**:  
  - Redis: Used as a channel layer for Django Channels.
  
## Setup & Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/real-time-chat-app.git
   cd real-time-chat-app
