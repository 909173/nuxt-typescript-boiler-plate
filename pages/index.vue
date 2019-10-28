<template lang="pug">
div.main {{feedStrings}}
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
// import Logo from '~/components/Logo.vue'
// import VuetifyLogo from '~/components/VuetifyLogo.vue'
import { feedStore } from '~/store'
@Component({
  name: 'index'
})
export default class extends Vue {
  get feedStrings(): string[] {
    return feedStore.posts
  }
  mounted() {
    feedStore.addPost('hogehoge')
  }
}
</script>

<style lang="stylus" scoped>
.main {
  background-color: red;
}
</style>
