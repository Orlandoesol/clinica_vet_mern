export const MONGODB_URI = 
    process.env.MONGODB_URI || 'mongodb://localhost:27017/clinica_veterinariaDB';

export const PORT = process.env.PORT || 4000;

export const TOKEN_SECRET = process.env.TOKEN_SECRET || 'token-secret-1234';