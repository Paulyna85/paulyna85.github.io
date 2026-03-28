const { createApp } = Vue;
createApp({
  data() {
    return {
      temperatura: "--",
      loading: true,
    };
  },
  methods: {
    async consultarClima() {
      this.loading = true;
      try {
        // API Pública de 7Timer para Santiago, Chile
        const res = await fetch("https://7timer.info");
        const data = await res.json();
        this.temperatura = data.dataseries[0].temp2m;
      } catch (e) {
        console.error("Error", e);
      } finally {
        this.loading = false;
      }
    },
  },
  mounted() {
    this.consultarClima();
  },
}).mount("#app");
