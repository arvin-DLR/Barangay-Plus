import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json({ limit: "30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://brgyplus:bluesoulx89@barangay-plus.zmk0p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> app.listen(PORT, () => console.log('Server running on port: ' + PORT)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);





