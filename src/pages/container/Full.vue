<template>
  <div class="app animated fadeIn">
    <div class="container-fluid">
        {{$route.path}}
        <router-view :key="$route.path" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'Full',

  data () {
    return {
    }
  },

}
</script>
