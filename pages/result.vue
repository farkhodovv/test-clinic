<template>
  <div>
    <div class="loader" v-if="path === ''">
      <img src="/img/loader.svg" alt="" />
    </div>
    <div class="header">
      <div class="container">
        <div
          class="row align-items-center justify-content-between first-header"
        >
          <nuxt-link to="/users" class="logo-wrap">
            <img src="/img/logo.svg" alt="tut logo" />
          </nuxt-link>
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
    <!-- <div class="print-header">
      <div class="container">
        <div class="d-flex align-items-center justify-content-between">
          <span class="mr-4"
            >Частное медицинское предприятие "JIZZAX-SHIFO" <br />
            Адрес: г.Джизак, Махалля Кимёгар. Телефон: +998 72 226 90 97
          </span>
          <div class="logo-wrap">
            <img src="/img/logo.svg" alt="tut logo" />
          </div>
          <span
            >Узбекистон республикаси согликни <br />
            саклаш вазирлиги ҚТУТ буйичамуассасакоди <br />
            91514 Уз.РССВ 25.12.2017. № 777 буйрук билан тасдикланган <br />
            №1 ракамли тиббий хужжат шакли</span
          >
        </div>
      </div>
    </div> -->
    <div class="body">
      <img class="background-image" src="/img/bg.svg" alt="" />
      <div class="container">
        <div>
          <div
            class="body__header d-flex align-items-center flex-column justify-content-center pt-3"
          >
            <b>
              Covid-19 Koronavirus infeksiyasiga tekshiruv natijalari haqida
            </b>
            <h1>Ma'lumotnoma</h1>

            <i>Справка о сдачи анализа на коронавирус Covid-19</i>
            <p>Certificate of testing for coronavirus Covid-19</p>
          </div>
          <div
            class="body__qr d-flex align-items-center justify-content-between"
          >
            <div class="laboratorys">
              <div>
                <p>Name of laboratory:</p>
                <b>
                  Laboratoriya nomi:
                  <span class="special">"JIZZAX SHIFO” klinikasi</span>
                </b>
                <br />
                <i>Наименование лаборатории:</i>
              </div>
            </div>
            <div class="qr">
              <Vue-qr-code :value="path" />
            </div>
          </div>
        </div>
        <div class="table">
          <table class="my-4" style="width:100% ; background:transparent;">
            <tr>
              <th>
                <p>Full name:</p>
                <p>Familiya Ism Sharif:</p>
                <p>Фамилия, имя, отечество:</p>
              </th>
              <td>
                {{ client.full_name }}
              </td>
            </tr>
            <tr>
              <th>
                <p>Date of birth:</p>
                <p>Tug'ilgan sanasi:</p>
                <p>Дата рождения:</p>
              </th>
              <td>
                {{ client.date_birth }}
              </td>
            </tr>
            <tr>
              <th>
                <p>Passport series and number:</p>
                <p>Passport seriya va raqami:</p>
                <p>Серия и номер паспорта:</p>
              </th>
              <td>
                {{ client.passport }}
              </td>
            </tr>
            <tr>
              <th>
                <p>Phone number:</p>
                <p>Telefon raqami:</p>
                <p>Номер телефона:</p>
              </th>
              <td>
                {{ client.phone }}
              </td>
            </tr>
            <tr>
              <th>
                <p>Date tested:</p>
                <p>Tekshirilgan sana:</p>
                <p>Дата тестирования:</p>
              </th>
              <td>
                {{ client.date_tested }}
              </td>
            </tr>
            <tr>
              <th>
                <p>Research method:</p>
                <p>Tekshiruv usuli:</p>
                <p>Метод исследования:</p>
              </th>
              <td>
                {{ client.type_of }}
              </td>
            </tr>
            <tr>
              <th>
                <p>The result of laboratory analysis:</p>
                <p>Laborator taxlil natijasi:</p>
                <p>Результат лабораного анализа:</p>
              </th>
              <td>
                {{ client.result }}
              </td>
            </tr>
          </table>

          <div class="laboratory">
            <div>
              <i
                >[UZ] COVID-19 koronavirusga tekshiruv O'zbekiston Respublikasi
                Sog'liqni Saqlash Vazirligi Sanitariya-epiddemialogik
                osoyishtalik Markazi bilan 04.08.2020yil tuzilgan No 1-7/2826
                sonli shartnomaga asosan amalga oshirilgan.
              </i>
              <b>
                [RUS]Тестирование на коронавирус COVID-19 проводилось в
                соответствии с договором No 1-7/2826 от 04.08.2020г с Центром
                Санитарно эпидемиологического надзора Министерства
                Здравохранения РУз
              </b>
              <p>
                [EN] Testing for coronavirus Covid-19 was carried out in
                accoradance with the contract No 1-7/2826 of 04.08.2020 with the
                Center for Sanitary and Epidemiological Surveilance Ministry of
                Health of the Republic of Uzbekistan
              </p>
            </div>
          </div>
          <div
            class="buttons d-flex mt-3 align-items-start justify-content-between"
          >
            <span
              >Частное медицинское предприятие "JIZZAX-SHIFO" <br />
              Адрес: г.Джизак, Махалля Кимёгар. Телефон: +998 72 226 90 97</span
            >
            <div class="d-flex">
              <button class="print" @click="print">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  heigth="20px"
                  viewBox="0 0 20 20"
                >
                  <g fill="none">
                    <path
                      d="M5 4.5A1.5 1.5 0 0 1 6.5 3h7A1.5 1.5 0 0 1 15 4.5V5h.5A2.5 2.5 0 0 1 18 7.5v5a1.5 1.5 0 0 1-1.5 1.5H15v1.5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 5 15.5V14H3.5A1.5 1.5 0 0 1 2 12.5v-5A2.5 2.5 0 0 1 4.5 5H5v-.5zm9 0a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5V5h8v-.5zm-8 7v4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5z"
                      fill="#626262"
                    />
                  </g></svg
                >Распечатать
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueQrCode from "vue-weblineindia-qrcode";
import { mapState } from "vuex";
export default {
  name: "result",
  components: {
    VueQrCode
  },
  data: () => ({
    path: "",
    items: [{ age: 40, first_name: "Dickerson" }]
  }),
  async asyncData({ store, route }) {
    await store.dispatch("fetchClient", route.query.id);
  },
  async mounted() {
    this.path = window.location.href;
    // if (!this.$route.query.id) {
    //   // console.log(this.$route.query.id);
    //   window.location.href = "https://jizzax-shifo.herokuapp.com/admin";
    // }
  },
  computed: {
    ...mapState({
      client: state => state.client
    })
  },
  methods: {
    print() {
      window.print();
    }
  }
};
</script>

<style lang="scss" scoped>
.loader {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);
  z-index: 100;

  img {
    width: 30%;
  }
}
.background-image {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 70%;
  height: 100%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}
.special {
  color: red;
  margin-left: 80px;
  font-weight: 600;
}
.doc {
  font-weight: 600;
  margin-left: 50px;
}
@media print {
  .body {
    margin: 150px 0;
  }
  @page {
    size: A4;
    margin: 0;
  }
  .laboratory {
    display: block !important;
  }
  .header {
    display: none;
  }
  .print-header {
    display: block !important;
  }
  .buttons {
    display: none !important;
  }
  .about {
    display: none !important;
  }
  .body__qr {
    justify-content: flex-end !important;
  }
  .background-image {
    display: none !important;
  }
}
h1 {
  font-size: 32px;
}
.laboratory {
  display: none;
}
.print-header {
  display: none;
  padding: 20px 0 20px 0;
  border-bottom: 3px solid black;
  margin-bottom: 30px;
  span {
    text-align: center;
    font-weight: 600;
  }
  .logo-wrap {
    margin: 0;
    width: 550px;
    height: auto;
  }
  img {
    width: 100%;
  }
}
button {
  background: none;
  padding: 5px 10px;
  border: 1px solid black;
  box-shadow: 0 0 15px rgba(black, 0.2);
  display: flex;
  border-radius: 3px;
  transition: 0.2s all;
  svg {
    margin-right: 5px;
  }
  &:hover {
    box-shadow: 0 0 5px rgba(black, 0.1);
  }
}
.buttons {
  span {
    width: 431px;
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
th p {
  white-space: nowrap;
}
table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
}
th,
td {
  padding: 5px;
  text-align: left;
}
td {
  text-align: center;
  vertical-align: middle;
}
.body {
  position: relative;
}
.footer {
  box-shadow: 0 0 5px rgb(black, 0.15);
  padding: 20px 0;
}
@media screen and (max-width: 767px) {
  h1 {
    font-size: 20px;
  }
  .buttons {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center !important;

    div {
      margin-top: 20px;
    }
  }
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
  .buttons {
    span {
      width: 300px;
    }
  }
}
@media screen and (max-width: 576px) {
  .buttons {
    span {
      width: 250px;
    }
  }
  h1 {
    font-size: 16px;
    text-align: center;
  }
  .body__qr {
    display: flex;
    flex-direction: column;
  }
  th p {
    white-space: normal !important;
  }
}
</style>
