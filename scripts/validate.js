const Ajv = require("ajv");
const ajv = new Ajv();

const schema = require("../google-earth-engine/schema.json");
const landcover = require("../google-earth-engine/landcover.json");

const validate = ajv.compile(schema);

const valid = validate(landcover);
if (!valid) console.log(validate.errors);
