const download = require('image-downloader');
const path=require("path");
class ImageDownload {

static descargar(nombre,dirname,url,callback){

const options = {
  url: url,
  dest: path.join(dirname,nombre+".jpg")                 // Save to /path/to/dest/image.jpg
}
 
download.image(options)
  .then(({ filename, image }) => {
    console.log('File saved to', filename)
    callback(true,path.join(dirname,nombre+".jpg"))
  }).catch((err) => {
    throw err
  })
 
}
}

module.exports=ImageDownload;