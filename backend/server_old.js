// // Import du package http de node
// // Ancienne commande ES5 =>
// // const http = require('http');
// // Nouvelle commande ES6 =>
// import { createServer } from 'http';

// const server = createServer((req, res) => {
//     // Méthode end() pour renvoyer une réponse
//     res.end('Voilà la réponse du serveur !');
// });

// // Le serveur écoute le port défini dans une variable d'environnement.
// // Si cette varaible n'est pas définie, c'est le port 3000 (de développement) qui est utilisé.
// server.listen(process.env.PORT || 3000);