<template>
  <div class="board-border-abc">
    <div class="board-border-item">A</div>
    <div class="board-border-item">B</div>
    <div class="board-border-item">C</div>
    <div class="board-border-item">D</div>
    <div class="board-border-item">E</div>
    <div class="board-border-item">F</div>
    <div class="board-border-item">G</div>
    <div class="board-border-item">H</div>
  </div>
</template>

<script>
  export default {
    name: 'BoardBorderABC',
  }
</script>

<style scoped lang="scss">
  .board-border-abc {
    display: flex;
    font-weight: bold;
    justify-content: space-between;
    padding: 0 60px;
    height: 40px;
    align-items: center;
  }

</style>
