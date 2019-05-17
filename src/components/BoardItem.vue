<template>
  <div class="board-item" :style="`background-color: ${color}`"
       @click="_putKnight"
  ></div>
</template>

<script>

  export default {
    name: 'BoardItem',
    props: ['color', 'id', 'defaultColor'],
    methods: {
      _putKnight () {
        this.$store.dispatch('putKnight', this.id)
      },
    },
  }
</script>

<style scoped lang="scss">
  .board-item {
    width: 12.5%;
    overflow: hidden;

    &::before {
      content: '';
      float: left;
      padding-top: 100%;
    }
  }

</style>
