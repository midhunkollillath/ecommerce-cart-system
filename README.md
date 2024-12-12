# Ecommerce Cart System

## Setup Instructions

### Prerequisites
- **Node.js version**: 20.10.0
  - You can manage Node.js versions using [nvm](https://github.com/nvm-sh/nvm). 
  - Install the correct version by running:
    ```bash
    nvm install 20.10.0
    nvm use 20.10.0
    ```

### Backend Setup

1. Rename the `env` file to `.env` inside the `backend` folder.
   - The `.env` file contains important environment variables .

2. Navigate to the `backend` folder and install the required Node.js modules:
    ```bash
    cd backend
    npm install
    ```

3. Run the backend development server:
    ```bash
    npm run dev
    ```
    - This will start the backend server in development mode.

### Frontend Setup

1. Navigate to the `frontend` folder:
    ```bash
    cd frontend
    ```

2. Install the required Node.js modules:
    ```bash
    npm install
    ```

3. Start the frontend development server:
    ```bash
    npm start
    ```
    - This will start the frontend server and open the application in your browser.

---

### Notes

- Make sure to use **Node.js version 20.10.0** to avoid any version-related issues.
- Ensure the `.env` file is properly configured with the correct environment variables for the backend.
