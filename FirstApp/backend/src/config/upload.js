const multer = require('multer');
const path = require('path'); 

module.exports = {
    //como o multer vai receber e gerenciar os arquivos ou imagens
    storage: multer.diskStorage({
        //_dirname informa o diretorio do arquivo atual
        destination: path.resolve(__dirname, '..', '..', 'uploads'), //informar qual a pasta que sera salvo os arquivos
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname, ext);
            
            cb(null, `${name}-${Date.now()}${ext}`)
        }
    }),


};