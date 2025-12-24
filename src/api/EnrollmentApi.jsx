import axios from "axios";
import { createTableConfig } from "./commonApi";
import { tableDefinitions } from "./tablesConfig";
import React from "react";

const tableName = "enrollment";

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
