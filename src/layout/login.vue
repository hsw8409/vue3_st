<template>
  <h1>로그인화면</h1>
  <label>아이디</label> <input type="text" v-model="user_id" /><br />
  {{ user_id }}
  <label>비밀번호</label> <input type="text" v-model="user_pw" /><br />
  <button @click="Submit">로그인</button>
</template>


<script>
export default {
  data() {
    return {
      user_id: "",
    };
  },
};
</script>