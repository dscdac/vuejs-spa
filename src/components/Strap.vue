<template>

  <input type="checkbox" v-model="checked">
  <label for="checked">Open only one at a time.</label>

  <accordion :one-at-atime="checked">
    <panel header="Panel #1" :is-open="true">
      .r sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum d
    </panel>
    <panel header="Panel #2">
      ..r sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum d
    </panel>
    <panel header="Panel #3">
      ...r sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum d
    </panel>
    <panel header="Panel #4">
      ....r sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum d
    </panel>
  </accordion>
</template>


<script>
import { accordion, panel, alert, carousel, slider, modal, popover } from 'vue-strap'
import Strap from './Strap.vue'
export default {
  components:{
    'Strap': Strap,
    'alert': alert,
    'accordion': accordion,
    'panel': panel,
    'carousel': carousel,
    'slider': slider,
    'modal': modal,
    'popover': popover
  },
  data() {
    return {checked: false}
  }
};

//let checked=false;
</script>


<style>

</style>
