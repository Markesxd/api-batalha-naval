require('dotenv').config();
const config = require('./src/config/expressConfig');

const app = config();

app.listen(3333, () => console.log('Server running'))
