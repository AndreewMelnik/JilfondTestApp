<template>
  <div class="main">
      <TheHeader/>
    <div class="search">
      <UserSearch/>
      <UserSearchInfo/>
    </div>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import UserSearch from "./components/UserSearch.vue";
import UserSearchInfo from "./components/UserSearchInfo.vue";


export default {
  components: { TheHeader,UserSearchInfo,UserSearch},
}
</script>

`
<style lang="scss" scoped>
.main {
  box-sizing: border-box;
  padding: 2% 3%;
  height: 100vh;
  background: #F5F5F5;
  display: flex;
  flex-direction: column;
}

.search {
  background: #FDFDFD;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  color: black;
  display: flex;
  height: 90vh;
  width: 100%;
  max-height: 90vh;
}

</style>
