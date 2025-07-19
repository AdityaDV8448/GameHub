const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Example GET route for listing games
app.get('/api/games', (req, res) => {
  res.json([
    {
      name: 'Tic Tac Toe',
      url: 'https://playtictactoe.org/',
      category: 'board',
      img: 'https://storage.googleapis.com/a1aa/image/EuelcMf8QeNTdJa7dT7DYup0vui6SAKjBzkcv8cxHU4oCf7OB.jpg'
    },
    {
      name: '2048',
      url: 'https://2048game.com/',
      category: 'puzzle',
      img: 'https://storage.googleapis.com/a1aa/image/ZfOSLjJUNcSaAiA3s7xHCe0ZfLNVwcX9ryMODIjh3Em8Cf7OB.jpg'
    },
    {
      name: 'Snake',
      url: 'https://playsnake.org/',
      category: 'arcade',
      img: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Nokia_6110_Snake_game.png'
    },
    {
      name: 'Minesweeper',
      url: 'https://minesweeper.online/',
      category: 'puzzle',
      img: 'https://storage.googleapis.com/a1aa/image/xOkJAtnUNEpxJtpHI1IgNfGoam0wX7A0772yto3On7xwwfuTA.jpg'
    },
    {
      name: 'Sudoku',
      url: 'https://sudoku.com/',
      category: 'puzzle',
      img: 'https://storage.googleapis.com/a1aa/image/ymw3QI0yG3aHM9ye8kweeOeMxesczSopuNFghmYmatrPL83dC.jpg'
    }
  ]);
});

// POST for scores (placeholder)
app.post('/api/score', (req, res) => {
  console.log(req.body);
  res.json({ success: true });
});

// Serve static frontend
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Game Hub backend running on http://localhost:${PORT}/`);
});
