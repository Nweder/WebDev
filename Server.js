const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors()); 
app.use(express.json()); 


const projects = [
    { id: 1, title: "Find Word in File", description: "This is my favorite project. It helps to find words and count them in a text.", image: "word-file.png" },
    { id: 2, title: "Chat App", description: "A real-time chat application using WebSockets.", image: "chat-app.png" },
    { id: 3, title: "Portfolio Website", description: "A personal website showcasing my skills and projects.", image: "portfolio.png" }
];


app.get('/api/projects', (req, res) => {
    res.json(projects);
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
