GameHub
GameHub is a fun, modern web portal to play classic and modern games online.
It features a Node.js/Express backend and a frontend that loads all games dynamically from the backend API.

🎮 Features
Play classic games like Tic Tac Toe, Minesweeper, Snake, Sudoku, 2048, and more!

Responsive, retro-styled UI powered by Tailwind CSS and Font Awesome.

Add or remove games easily: one change in your backend, and the frontend updates automatically.

🚀 Getting Started
1. Clone the repo
bash
git clone https://github.com/AdityaDV8448/GameHub.git
cd GameHub
2. Install backend dependencies
bash
npm install
3. Start the server
bash
npm start
This will:

Serve the API at http://localhost:3000/api/games

Serve the frontend at http://localhost:3000

🛠️ Project Structure
text
GameHub/
├── public/
│   └── index.html        # Frontend (served statically)
├── server.js             # Express backend and API
├── package.json
└── README.md
