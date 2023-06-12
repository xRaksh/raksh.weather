const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 5431;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
    console.log(`http://localhost:${PORT}`);
 });