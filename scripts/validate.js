const Ajv = require("ajv");
const ajv = new Ajv();

// const schema = require("../earthengine/schema.json");
// const landcover = require("../earthengine/precipitation.json");

const schema = require("../vectorstyle/schema.json");
const landcover = require("../vectorstyle/voyager.json");

const validate = ajv.compile(schema);

const valid = validate(landcover);
if (!valid) console.log(validate.errors);
