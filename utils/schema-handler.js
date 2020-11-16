import { model } from "mongoose";

// this utility function is to avoid errors in overwriting a model if it already exists
// pass both the schemaId and the schema model to check if the schema already exists
// else instantiate a new schema
const schemaHandler = (schemaId, schemaModel) => {
  let schema;
  try {
    schema = model(schemaId);
  } catch (error) {
    schema = model(schemaId, schemaModel);
  }
  return schema;
};

export default schemaHandler;
