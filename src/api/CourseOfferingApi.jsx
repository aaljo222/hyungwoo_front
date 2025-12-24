import { createTableConfig } from "./commonApi";
import { tableDefinitions } from "./tablesConfig";
import React from "react";

const tableName = "courseOffering";

const extraButtons = [];

var tableDefinition = tableDefinitions[tableName];
tableDefinition = {
  ...tableDefinition,
  allColumns: {
    ...tableDefinition.allColumns,
    searchColumns: {
      one: tableDefinition.allColumns.responseColumns,
    },
  },
};
const config = createTableConfig(tableDefinition, extraButtons);

export default { config };
