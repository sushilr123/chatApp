const dotenv=require('dotenv');
dotenv.config({path:'./config.env'});

require("./config/dbconfig");

let app = require("./app");
const PORT = process.env.PORT_NUMBER || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});