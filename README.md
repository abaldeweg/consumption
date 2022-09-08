# baldeweg/consumption

List of consumed materials.

## Install with Docker

Run the container with Docker or something similar.

Make sure to pass the env vars as args to the container.

Following is an example config for Docker Compose.

```yaml
// docker-compose.yml

version: "3.8"
services:
  web:
    build:
      context: ./
      args:
        - VUE_APP_BASE_URL=${VUE_APP_BASE_URL}
        - VUE_APP_PRODUCTS=${VUE_APP_PRODUCTS}
        - VUE_APP_UNITS=${VUE_APP_INVENTORY}
        - VUE_APP_SHARE_MAIL=${VUE_APP_SHARE_MAIL}
        - AUTH=${AUTH}
    restart: unless-stopped
    ports:
      - ${CONTAINER_PORT:-9000}:80
```

```env
// .env

COMPOSE_PROJECT_NAME=consumption
CONTAINER_PORT=9000

VUE_APP_BASE_URL=/
VUE_APP_PRODUCTS=milk,coffee,cola
VUE_APP_UNITS=carton,piece,can,ml,l,g,kg
VUE_APP_SHARE_MAIL=
```

## Env Vars

- VUE_APP_BASE_URL - The Base URL, in case the app is installed in a subdirectory.
- VUE_APP_PRODUCTS - Your products as comma separated values e.g. `milk,coffee,cola`
- VUE_APP_UNITS - Your units as comma separated values e.g. `carton,piece,can,ml,l,g,kg`
- VUE_APP_SHARE_MAIL - Default address for share by mail
- AUTH - The value will be written to `/usr/local/apache2/.htpasswd`

## Architecture

All Code needs to be checked. For that Linter, CI-Tools, Unit-Tests and E2E-Tests should be in place. Security Alerts for dependencies should be active and Best Practices for coding needs to be followed. As frameworks was chosen VueJS because of their free license and wide spread. The resulting code should also be released under a free license.
