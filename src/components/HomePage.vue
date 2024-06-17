<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
<!--      <font-awesome-icon icon="clock" style="text-align: center" />-->
    </div>
  </div>
</template>

<script>
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  name: 'HomePage',
  props: {
    msg: String
  },
  components: {
    // FontAwesomeIcon
  }
}
</script>