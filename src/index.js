import app from './app.js';
import { connectDB } from './dbs.js';


connectDB();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});