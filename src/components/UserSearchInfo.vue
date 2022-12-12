<template>
  <div :class="{ defaultInfo: getSelectedUser === null }" class="search-info">
    <span v-if="getSelectedUser === null">Выберите сотрудника, чтобы посмотреть его профиль</span>
    <div v-else class="search-info__user">
      <div class="search-info__user__img item" style="">
        <img alt="user_photo" src="../assets/userphoto.svg">
      </div>
      <div class="search-info__user__description item">
        <div class="name">{{ getSelectedUser.name }}</div>
        <div class="subtitles">email: <span>{{ getSelectedUser.email }}</span></div>
        <div class="subtitles">phone: <span>{{ getSelectedUser.phone }}</span></div>
        <div class="subtitles about">О себе:</div>
        <div class="about">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    </div>


  </div>
</template>


<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'getSelectedUser',
    ])
  },
}
</script>

<style lang="scss" scoped>
.search-info {
  display: flex;
  padding: 3% 3%;
  font-size: 14px;
  line-height: 17px;
  color: rgba(118, 120, 141, 0.99);
  border-left: 1px solid #E0E0E0;
  overflow-y: auto;
  width: 100%;

  &::-webkit-scrollbar {
    width: 0;
  }
}

.defaultInfo {
  justify-content: center;
  align-items: center;
  padding-top: 0;
}

.search-info__user {
  display: flex;

  .item {
    margin: 0 2%;
    width: 50%;

    img {
      width: 100%;
    }
  }
}

.search-info__user__description {
  display: flex;
  flex-direction: column;

  .name {
    font-size: 16px;
    line-height: 140%;
    color: #000000;
  }

  .subtitles {
    line-height: 140%;
    color: #333333;
    margin: 5px 0;

    span {
      color: rgba(118, 120, 141, 0.99);
      font-weight: 500;
    }

    .about {
      margin: 15px 0;
    }
  }

  .about {
    margin-top: 20px;
    line-height: 17px;
  }
}


@media (max-width: 900px) {
  .search-info__user {
    flex-direction: column;

    .item {
      width: 100%;
    }
  }
}
</style>