var raml = require("raml-1-parser");

raml.loadApi("./example_2/api.raml", {rejectOnErrors: true}).then(parsedResult => {
    console.log(JSON.stringify(parsedResult, null, 2));
}, error => {
    console.log(error);
});
