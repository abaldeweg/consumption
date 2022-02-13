<template>
  <b-app>
    <b-masthead>
      <b-masthead-item type="center">
        <router-link :to="{ name: 'index' }">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 200 200"
            class="logo"
          >
            <path
              d="M 27.435547 7.4355469 A 20 20 0 0 0 7.4355469 27.435547 L 7.4355469 172.56445 A 20 20 0 0 0 27.435547 192.56445 L 172.56445 192.56445 A 20 20 0 0 0 192.56445 172.56445 L 192.56445 27.435547 A 20 20 0 0 0 172.56445 7.4355469 L 27.435547 7.4355469 z M 100 30 A 9.999999 9.999999 0 0 1 110 40 L 125 40 L 125 45 L 150 45 L 150 170 L 50 170 L 50 45 L 75 45 L 75 40 L 90 40 A 9.999999 9.999999 0 0 1 100 30 z M 60 55 L 60 160 L 140 160 L 140 55 L 125 55 L 125 60 L 75 60 L 75 55 L 60 55 z M 70 70 L 130 70 L 130 85 L 70 85 L 70 70 z M 70 100 L 130 100 L 130 115 L 70 115 L 70 100 z M 70 130 L 130 130 L 130 145 L 70 145 L 70 130 z "
            />
          </svg>
        </router-link>
      </b-masthead-item>
    </b-masthead>

    <slot />
  </b-app>
</template>

<script>
export default {
  name: 'layout',
}
</script>

<style scoped>
.logo {
  fill: var(--color-primary-10);
}
</style>
