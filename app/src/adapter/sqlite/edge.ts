import { $console } from "bknd/core";
import type { Connection } from "bknd/data";
import { libsql } from "../../data/connection/sqlite/LibsqlConnection";

export function sqlite(config: { url: string }): Connection {
   $console.info("Using libsql", config);
   return libsql(config);
}
