<template>
  <div class="header">
    <span class="header__title">Жилфонд</span>
    <span class="header__subtitle">Пользователь</span>
  </div>
</template>

<script>
export default {
  name: "TheHeader"
}
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  margin: 30px 0;

  &__title {
    font-style: normal;
    font-weight: 800;
    font-size: 35px;

    color: #E31F24;

  }

  &__subtitle {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #333333;
  }
}
</style>