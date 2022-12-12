<template>
  <div class="user_search">
    <div class="user_search__input">
      <h2>Поиск сотрудников</h2>
      <input
          v-model="inputValue"
          placeholder="Введите Id или имя"
          type="text"
          @input="inputAction"
      >
    </div>
    <div class="user_search__results">
      <h2>Результаты</h2>
      <div v-if="users.length === 0"
           class="error">{{ message }}
      </div>
      <UserSearchCard
          v-for="item in users"
          v-else :id="item.username"
          :key="item.username"
          :item="item"
          @click="select"/>
    </div>

  </div>
</template>

<script>
import UserSearchCard from "./UserSearchCard.vue";
import {mapActions} from 'vuex'


export default {
  components: {UserSearchCard,},
  data() {
    return {
      users: [],
      message: 'начните поиск',
      inputValue: '',
    }
  },

  methods: {
    ...mapActions(['selectUser']),
    inputAction(e) {

      if (e.target.value.indexOf(',')) {
        this.inputValue = e.target.value.split(',')
      } else {
        this.inputValue = e.target.value
      }
      if (this.users.length == 0 && this.inputValue != '') {
        this.message = 'ничего не найдено'
      } else {
        this.message = 'начните поиск'
      }
      this.users = []
      this.inputValue.forEach((el) => {
        this.axios.get(`https://jsonplaceholder.typicode.com/users?id=${el}`).then(res1 => {
          if (res1.data.length !== 0) {
            this.users.push(res1.data[0])
          } else {
            this.axios.get(`https://jsonplaceholder.typicode.com/users?username=${el}`).then(res2 => {
              if (res2.data.length !== 0) {
                this.users.push(res2.data[0])
              }
            })
          }
        })
      })
    },
    select(e) {
      let activeUser = this.users.filter(el => el.username === e.target.id)
      this.selectUser(activeUser[0])
    }
  }
}
</script>

<style lang="scss" scoped>
.user_search {
  display: flex;
  flex-direction: column;
  width: 30vw;
  min-width: 300px;
  white-space: nowrap;
  padding: 20px;

  .user_search__input {
    display: flex;
    flex-direction: column;
  }

  h2 {
    font-weight: 600;
    font-size: 16px;
    line-height: 140%;
    color: #333333;
  }

  input {
    padding: 16px 24px;
    margin: 18px 0;
    font-size: 14px;
    color: rgba(118, 120, 141, 0.99);
    border: 1.5px solid #E9ECEF;
    border-radius: 8px;

  }

  .error {
    font-size: 14px;
    color: rgba(118, 120, 141, 0.99);
  }
}

.loader {

}

.user_search__results {
  padding: 0 5px;
}
</style>