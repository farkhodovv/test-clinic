<template>
  <div>
    <div class="header">
      <div class="container">
        <div
          class="row align-items-center justify-content-between first-header"
        >
          <div class="logo-wrap">
            <img src="/img/logo.svg" alt="tut logo" />
          </div>
          <a href="tel:+99890325825" class="phone">
            <i class="phone__icon">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5707 8.70285C10.904 8.70285 10.2494 8.59858 9.62915 8.39359C9.3252 8.28992 8.95155 8.38503 8.76604 8.57556L7.54169 9.49981C6.1218 8.74187 5.24718 7.86753 4.49959 6.45829L5.39664 5.26585C5.62971 5.0331 5.7133 4.6931 5.61315 4.37409C5.40728 3.75053 5.3027 3.09626 5.3027 2.42932C5.30273 1.94751 4.91076 1.55554 4.42898 1.55554H2.42929C1.94751 1.55554 1.55554 1.94751 1.55554 2.42929C1.55554 7.95172 6.04827 12.4444 11.5707 12.4444C12.0525 12.4444 12.4444 12.0525 12.4444 11.5707V9.57657C12.4444 9.09482 12.0524 8.70285 11.5707 8.70285Z"
                  fill="white"
                />
              </svg>
            </i>
            <span class="ml-2 phone__number">+998 72 226 90 97</span>
          </a>
        </div>
      </div>
    </div>
    <div class="body container mt-3">
      <div class="body__header d-flex justify-content-center">
        <h1>Тест топширганлар руйхати</h1>
      </div>
      <form class="search" @submit.prevent="">
        <div class="form-group form-group-with-ico d-flex my-4">
          <div>
            <b-form-input
              v-model="search"
              placeholder="qidirish ..."
            ></b-form-input>
          </div>
        </div>
      </form>
      <b-table
        id="my-table"
        striped
        :fields="fields"
        :items="allclients"
        responsive="lg"
        stacked="md"
      >
        <template v-slot:cell(index)="data">
          <div>{{ data.index + 1 }}</div>
        </template>
        <template v-slot:cell(full_name)="data">
          {{ data.item.full_name }}
        </template>
        <template v-slot:cell(phone)="data">
          {{ data.item.phone }}
        </template>
        <template v-slot:cell(date_birth)="data">
          {{ data.item.date_birth }}
        </template>
        <template v-slot:cell(passport)="data">
          <span>{{ data.item.passport }}</span>
        </template>
        <template v-slot:cell(id)="data">
          <nuxt-link :to="`/?id=${data.item.passport}`">
            <i>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.3"
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  fill="#3699FF"
                />
                <path
                  d="M13 11C13 10.4477 12.5523 10 12 10C11.4477 10 11 10.4477 11 11V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V11Z"
                  fill="#3699FF"
                />
                <path
                  d="M13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9C12.5523 9 13 8.55228 13 8Z"
                  fill="#3699FF"
                />
              </svg>
            </i>
            <span class="seemore-btn">
              chop etish
            </span>
          </nuxt-link>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "users",
  data: () => ({
    search: "",
    fields: [
      { key: "index", label: "№" },
      { key: "full_name", label: "ISM/Familiya" },
      { key: "phone", label: "Telefon raqami" },
      { key: "date_birth", label: "Tugilgan sanasi" },
      { key: "passport", label: "Passport raqami" },
      { key: "id", label: "Batafsil" }
    ],
    path: ""
  }),
  async mounted() {
    await this.$store.dispatch("fetchAllClients");
  },
  methods: {
    async performSearch(query) {
      if (this.search !== "") {
        await this.$store.dispatch("filterAllClients", query);
      } else {
        await this.$store.dispatch("fetchAllClients");
      }
    }
  },
  watch: {
    search(query) {
      if (this.timeoutQuery) {
        clearTimeout(this.timeoutQuery);
      }
      this.timeoutQuery = setTimeout(() => this.performSearch(query), 500);
    }
  },
  computed: {
    ...mapState({
      allclients: state => state.allclients
    })
  }
};
</script>

<style lang="scss" scoped>
.form-group-with-ico {
  display: flex;
  align-items: center;
  input {
    margin-right: 10px;
    padding: 5px;
  }
}
.header {
  padding: 20px 0;
  box-shadow: 0 5px 10px rgb(black, 0.15);

  .logo-wrap {
    width: 250px;
    height: auto;
    img {
      max-width: 100%;
    }
  }
  .phone {
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 25px;
    border-right: 2px solid #007bff;
    justify-content: space-between;
    border-left: 2px solid #e40044;
    text-decoration: none;
    transition: 0.5s;
    &:hover {
      border-right: 2px solid #e40044;
      border-left: 2px solid #007bff;
    }
    &__icon {
      background: #008bd0;
      padding: 5px;
      width: 35px;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      svg {
        width: 100%;
      }
    }
    &__number {
      color: #e40044;
    }
  }
}
</style>
