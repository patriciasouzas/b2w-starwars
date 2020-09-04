const app = require("./app/app")
const port = process.env.port || 8000;

app.listen(port, function () {
    console.log('server running on port ', port)
});
