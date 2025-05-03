const mongoose = require("mongoose");

const uri =
  "mongodb+srv://MongoDb:1234@eticaretdb.q8lwr.mongodb.net/?retryWrites=true&w=majority&appName=ETicaretDb";

const connection = () => {
  mongoose
    .connect(uri, {})
    .then(() => console.log("MongoDb bağlantısı başarılı"))
    .catch((err) => console.log("Bağlantı hatası! Hata: " + err.message));
};

module.exports = connection;
