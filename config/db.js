const mongoose = require("mongoose");


mongoose.connect(
  process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

.then(()=> console.log("connection a la base de donner reussie"))
.catch ((err)=> console.log(err))