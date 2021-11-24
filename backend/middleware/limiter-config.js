const  rateLimit  =  require ('express-rate-limit') ;

const max  =  rateLimit ( { 
  windowMs : 5  *  60  *  1000 ,  // délai en ms 
  max : 3, // 3 tentatives authorisées
  message : "Votre compte a été bloqué. Veuillez contacter votre administrateur."
} ) ;

module.exports = {max} ;