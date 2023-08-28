const Ajv = require("ajv");
const ajv = new Ajv();

// const schema = require("../earthengine/schema.json");
// const landcover = require("../earthengine/precipitation.json");

const schema = require("../service/xyz/schema.json");
const landcover = require("../service/xyz/voyager.json");

const validate = ajv.compile(schema);

const valid = validate(landcover);
if (!valid) console.log(validate.errors);
