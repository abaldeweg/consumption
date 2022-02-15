# baldeweg/consumption

List of consumed material.

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
        - VUE_APP_I18N_LOCALE=${VUE_APP_I18N_LOCALE}
        - VUE_APP_I18N_FALLBACK_LOCALE=${VUE_APP_I18N_FALLBACK_LOCALE}
        - VUE_APP_BASE_URL=${VUE_APP_BASE_URL}
        - VUE_APP_INVENTORY=${VUE_APP_INVENTORY}
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

VUE_APP_I18N_LOCALE=en-US
VUE_APP_I18N_FALLBACK_LOCALE=en-US
VUE_APP_BASE_URL=/
VUE_APP_INVENTORY=milk (package),coffee,cola
VUE_APP_SHARE_MAIL=
```

## Env Vars

- VUE_APP_I18N_LOCALE - The locale e.g. `de-DE`
- VUE_APP_I18N_FALLBACK_LOCALE - Like `VUE_APP_I18N_LOCALE`, but as a last resort
- VUE_APP_BASE_URL - The Base URL, in case the app is installed in a subdirectory.
- VUE_APP_INVENTORY - Your inventory as comma separated values e.g. `milk (package),coffee,cola`
- VUE_APP_SHARE_MAIL - Default address for share by mail
- AUTH - The value will be written to `/usr/local/apache2/.htpasswd`

## Architecture

All Code needs to be checked. For that ESLint, SonarQube, CI-Tools, Unit-Tests and E2E-Tests should be in place. Security Alerts for dependencies should be active and Best Practices for coding needs to be followed. As framework was chosen VueJS because of the free license and wide spread. The resulting code should also be released under a free license.
