import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import TimeEntries from './components/TimeEntries.vue'
import LogTime from './components/LogTime.vue'
import Modal from './components/Modal.vue'
import Strap from './components/Strap.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { accordion, panel, alert, carousel, slider, modal, popover } from 'vue-strap'


// We want to apply VueResource and VueRouter
// to our Vue instance
Vue.use(VueResource)
Vue.use(VueRouter)


/*
console.log("Registrando componente");
new Vue(
  el: '#app',
  components:{
  'alert': alert,
  'accordion': accordion,
  'panel': panel,
  'carousel': carousel,
  'slider': slider,
  'modal': modal,
  'popover': popover
});
console.log("----------------------");
*/




// register modal component
Vue.component('modal', {
  template: Modal.template,
  props: {
    show: {
      type: Boolean,
      required: true,
      twoWay: true
    }
  }
})

//Vue.component('modal', Modal);

 // Routing!
const router = new VueRouter()

// Pointing routes to the components they should use
router.map({
  '/home': {
    component: Home
  },
  '/time-entries': {
    component: TimeEntries,
    subRoutes: {
    '/log-time': {
      component: LogTime
      }
    }
  },
  '/strap': {
    component: Strap
  }
})

// Any invalid route will redirect to home
router.redirect({
  '*': '/home'
})


router.start(App, '#app')
