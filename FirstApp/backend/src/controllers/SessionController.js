const User = require('../models/User');
//index, show, store, update, destroy

module.exports = {

    //create a session
    async store(req, res){ //funcao assincrona, pois algo na funcao demora pra ser executado
        const { email } = req.body; //desestruturacao, recurso do javaScript onde eu removo esse tipo de escrita
                                    //const email = req.body.email; 

        let user = await User.findOne({ email });
        
        if(!user){
            const user = await User.create({ email }); //a execucao so sera proceguida apos ser concluida essa linha de comando.
        }

        return res.json(user);
    }
}