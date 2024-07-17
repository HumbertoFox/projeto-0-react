const express = require('express');
const { PrismaClient } = require('@prisma/client');
const bodyParser = require('bodyParser');

const PORT = process.env.PORT || 3000;
const app = express();
const prisma = new PrismaClient();

app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});