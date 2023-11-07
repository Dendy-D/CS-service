#!/bin/bash

set -e

pathToMigrations="./database/migrations"

export PGPASSWORD=${DB_PASSWORD//\"/}

host=${DB_HOST_NAME//\"/}
port=$DB_PORT
dbName=${DB_NAME//\"/}
userName=${DB_USERNAME//\"/}

waitForLoadingDatabase() {
  attempts=0
  maxAttempts=30
  until psql -h "$host" -p "$port" -d "$dbName" -U "$userName" -c "\l" >/dev/null 2>&1;
  do
    ((attempts++))
    if (( attempts >= maxAttempts )); then
      echo "Error: Database did not become available within the specified time"
      exit 1
    fi
    echo "Waiting for the database to be available (attempt $attempts/$maxAttempts)..."
    sleep 1
  done
  echo "Database is now available"
}

waitForLoadingDatabase

executeMigrations() {
  for migration in $pathToMigrations/*.sql;
  do
    psql -h "$host" -p "$port" -d "$dbName" -U "$userName" -f "$migration"
  done
}

executeMigrations 

yarn dev
