const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('.')); // 현재 디렉토리를 정적 파일 경로로 설정

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
