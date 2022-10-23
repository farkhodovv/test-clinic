<template>
  <div>
    <div class="wrapper">
        <nav class="main-header navbar navbar-expand navbar-white navbar-light">
        <div class="d-flex justify-content-center w-100">
            <a href="https://t.me/RasulUsmonov" target="_blank" class="text-green" style="font-size: 18px;">
                <img src="@/assets/images/telegram-3713743-3100712.png" width="15">
                Вопросы, ответы и новости        </a>
        </div>
        <ul class="navbar-nav ml-auto">
                </ul>
    </nav>

        <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <a href="https://coronavirus-test.ssv.uz/ru" class="brand-link">
                        <img src="@/assets/images/logo-sidebar-ru.png" alt class="w-100">
                </a>
        <div class="sidebar">
                </div>
    </aside>
        <div class="content-wrapper px-md-4 py-2">
            <div class="content-header">
                    <div class="d-flex flex-md-row flex-column justify-content-between">
            <h1 class="m-0 text-dark">Пациент: {{ client.attributes.full_name }}</h1>
            <div class>
                <button type="button" onclick="print();" class="btn btn-info">
                    <i class="fas fa-print"></i> Распечатать
                </button>
            </div>
        </div>
            </div>
            <div class="d-print-none">
                        </div>
            <div class="content px-2">
                    <div class="row">
            <div class="col-12">
                <div class="card border-flag pt-2 px-2 pb-1 pt-lg-5 px-lg-5 pb-lg-2">
                    <div class="row mb-5">
                        <div class="col-md-5 text-center my-auto font-weight-bold text-uppercase">
                            <h4>Ministry of Health of the Republic of Uzbekistan</h4>
                            <h4>CONFIRMATION OF COVID-19 TEST RESULT</h4>
                        </div>
                        <div class="col-md-2">
                            <div class="mx-auto">
                                <img src="@/assets/fonts/emblem.svg" alt class="w-100">
                            </div>
                        </div>
                        <div class="col-md-5 text-center my-auto font-weight-bold text-uppercase">
                            <h4>Министерство Здравоохранения Республики Узбекистан</h4>
                            <h4>Подтверждение результата теста COVID-19</h4>
                        </div>
                    </div>
                    <div class="my-1">
                        <h5>
                            <strong>ID / Номер: </strong>
                            <span>{{ client.id }}</span>
                        </h5>
                    </div>
                    <div class="my-1">
                        <h5>
                            <strong>Laboratory (name) / Лаборатория (название):
                            </strong>
                            <span>ЧМП "SHIFO-MED-CLINICS"</span>
                        </h5>
                    </div>
                    <div class="my-1">
                        <h5>
                            <strong>Place of sampling / Место забора анализа
                                : </strong>
                            <span>ЧМП "SHIFO-MED-CLINICS"</span>
                        </h5>
                    </div>
                    <div class="my-1">
                        <h5>
                            <strong>Research method / Метод исследования: </strong>
                            <span>Real-Time Polymerase chain reaction method (Real-Time PCR) / Полимеразная цепная реакция в реальном времени (ПЦР)</span>
                        </h5>
                    </div>
                    <hr style="border: 4px solid #bbb">
                                        <div class="my-1">
                            <h5>
                                <strong>Passport / Серия и номер паспорта: </strong>
                                <span>{{ client.attributes.passport }}</span>
                            </h5>
                        </div>
                                    <div class="my-1">
                        <h5>
                            <strong>Full name / Полное имя
                                : </strong>
                            <span>{{ client.attributes.full_name }}</span>
                        </h5>
                    </div>
                    <div class="my-1">
                        <h5>
                            <strong>Birth date / Дата рождения
                                : </strong>
                            <span>{{ client.attributes.date_birth }}</span>
                        </h5>
                    </div>
                    <div class="my-1" v-if="client.attributes.gender">
                        <h5>
                            <strong>Sex / Пол
                                : </strong>
                            <span>
                                        {{ client.attributes.gender }}
                                    </span>
                        </h5>
                    </div>
                    <div class="my-1">
                        <h5>
                            <strong>Analysis date / Дата сдачи анализа
                                : </strong>
                            <span>
                                {{ $dayjs(client.attributes.date_tested).format('YYYY/MM/DD HH:MM') }}
                            </span>
                        </h5>
                    </div>
                                        <div class="my-1 d-flex align-items-baseline">
                            <h5 class="mr-2">
                                <strong>Test result and date / Результат и дата теста
                                    : </strong>
                            </h5>
                            <h4>
                                <span>Negative / Отрицательный</span> 
                                <strong>{{ $dayjs(client.attributes.date_tested).format('YYYY/MM/DD') }}</strong>
                            </h4>
                        </div>
                        <div class="row my-2">
                        <div class="col-md-12" style="text-align: center; width: 323px">
                            <Vue-qr-code v-if="path" :value="path" style="max-width: 323px; height: 244px" />
                        </div>
                    </div>
                    <div class="text-center">
                        <h6 class="text-uppercase">
                            <span>Служба санитарно-эпидемиологического благополучия и общественного здоровья Республики Узбекистан</span>
                        </h6>
                        <h6>
                            <span>Адрес: </span>
                            <span>Tashkent city. Chilanzar district, Bunyodkor street, 46</span>
                        </h6>
                        <h6>
                            <span>Телефон: </span>
                            <a href="tel:998712761606">+998 71 276 16 06</a>
                        </h6>
                        <h6>
                            <span>Email: </span>
                            <a href="mailto:kancelyariyaresdsenm@minzdrav.uz">
                                kancelyariyaresdsenm@minzdrav.uz
                            </a>
                        </h6>
                    </div>
                </div>
            </div>
        </div>
            </div>
        </div>
        <footer class="main-footer d-print-none">
        <div class="float-right d-none d-sm-inline">
            v1.1
        </div>
        <strong>Copyright © <span id="year">2022</span> <a href="https://t.me/farkhodovv" target="_blank">IT MED</a>.</strong> All rights reserved.
    </footer>
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
    items: [{ age: 40, first_name: "Dickerson" }],
    knock_Date: ''
  }),
  async asyncData({ store, route }) {
    await store.dispatch("fetchClient", route.query.id);
  },
  async mounted() {
    this.path = window.location.href;
  },
  computed: {
    ...mapState({
      client: state => state.client
    })
  },
  watch: {
    PO_DeliveryData() {
      let d = new Date();
      d.setDate(d.getDate() - 2);
      this.knock_Date = d.toISOString().slice(0, 10)
    }
  },
  methods: {
    print() {
      window.print();
    }
  }
};
</script>

<style lang="css">
@import url('app.css');
</style>