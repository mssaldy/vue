new Vue({
  el: '#vue-app',
  data: {
    name: 'Saldy',
    job: 'Web Developer'
  },
  methods: {
    greet: function(time) {
      return 'Good ' + time + ' ' + this.name;
    }
  }
})
