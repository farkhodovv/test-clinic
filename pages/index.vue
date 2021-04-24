<template>
  <div class="container">
    <div class="row justify-content-center align-items-center">
      <div class="col-md-6">
        <div class="login d-flex flex-column align-items-center">
          <h3 class="mb-4">Login</h3>
          <b-form-input type="text" v-model="login" class="mb-3"></b-form-input>

          <b-form-input v-model="password" type="password"></b-form-input>
          <span class="error" v-if="counter > 0"
            >Login yoki parol noto'g'ri(sizda {{ 3 - counter }} urunish
            qoldi)</span
          >
          <b-button
            @click="checkPass"
            class="mt-3 w-100"
            variant="outline-primary"
            :disabled="!login || !password"
            >Kirish</b-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    login: "",
    password: "",
    counter: 0,
    logined: false
  }),
  methods: {
    checkPass() {
      if (this.login === "jizzaxshifo7696" && this.password === "jizzaxshifo7696") {
        const formData = {
          login: this.login,
          password = this.password
        }
        localStorage.setItem("login", JSON.stringify(formData));

        this.$router.push("/users");
      } else {
        this.counter = this.counter + 1;
        if (this.counter === 3) {
          window.location.href = "https://jizzax.herokuapp.com/admin";
        }
      }
    }
  },
  mounted() {
    if (localStorage.getItem("login")) {
      const signInfo = JSON.parse(localStorage.getItem("login"))
      if (signInfo.login === "jizzaxshifo7696" && signInfo.password === "jizzaxshifo7696" ) {
        this.$router.push("/users");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.error {
  margin-top: 10px;
  color: red;
}
.login {
  margin: 50% 0;
  box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.71);
  padding: 40px 15px;
  border-radius: 12px;
}
@media screen and (max-width: 576px) {
  .phone {
    display: none !important;
  }
  .first-header {
    display: flex;
    align-items: center !important;
    justify-content: center !important;
  }
}
</style>
