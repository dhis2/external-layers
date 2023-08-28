const Ajv = require("ajv");
const ajv = new Ajv();

const layers = require("../layers.json");

layers.forEach((layer) => {
  const [service, id] = layer.id.split("_");
  const schema = require(`../${service}/schema.json`);
  const item = require(`../${service}/${id}.json`);

  if (schema && item) {
    const validate = ajv.compile(schema);

    const valid = validate(item);

    if (!valid) {
      const messages = validate.errors.map((error) => error.message);
      console.log(`"${service}/${id}" is not valid:`, messages);
    } else {
      console.log(`"${service}/${id}" is valid`);
    }
  } else {
    if (!schema) {
      console.log(`Missing schema for ${layer.id}`);
    }
    if (!item) {
      console.log(`Missing layer for ${layer.id}`);
    }
  }
});
