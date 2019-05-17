<template>
  <div class="board-border-num">
    <div class="board-border-item">8</div>
    <div class="board-border-item">7</div>
    <div class="board-border-item">6</div>
    <div class="board-border-item">5</div>
    <div class="board-border-item">4</div>
    <div class="board-border-item">3</div>
    <div class="board-border-item">2</div>
    <div class="board-border-item">1</div>
  </div>
</template>

<script>
  export default {
    name: 'BoardBorderNum',
  }
</script>

<style scoped lang="scss">
  .board-border-num {
    display: flex;
    flex-direction: column;
    font-weight: bold;
    justify-content: space-between;
    text-align: center;
    padding: 18px 0;
    height: 100%;
  }

</style>
