require('dotenv').config();
const config = require('./src/config/expressConfig');

const app = config();
app.listen(process.env.PORT, () => console.log('Server is running'));