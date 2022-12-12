<template>
  <div class="search_card">
    <img alt="searchcardimg" src="../assets/searchcardimg.svg">
    <div :id="item.username"
         :class="{ active: getSelectedUser && (item.username === getSelectedUser.username || item.id === getSelectedUser.id) }"
         class="search_card__content">
      <span :id="item.username" class="name">{{ item.username }}</span>
      <span :id="item.username" class="email">{{ item.email }}</span>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  props: ['item'],
  computed: {
    ...mapGetters([
      'getSelectedUser',
    ])
  },

}

</script>

<style lang="scss" scoped>
.search_card {
  width: 100%;
  display: flex;
  margin: 20px 0;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  &__content {
    width: 100%;
    padding: 10px 5px;
    border-radius: 0 10px 10px 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;

    .name, .email {
      color: #76787D;
    }
  }
}

.active {
  background: #E0E0E0;
}


</style>