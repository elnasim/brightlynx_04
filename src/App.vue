<template>
  <div id="app">
    <div class="board-wrapper">
      <div class="board-border-top">
        <BoardBorderABC/>
      </div>
      <div class="board-border-right">
        <BoardBorderNum/>
      </div>
      <div class="board-border-bottom">
        <BoardBorderABC/>
      </div>
      <div class="board-border-left">
        <BoardBorderNum/>
      </div>
      <div class="board">
        <BoardItem v-for="item in board" :key="item.id"
                   :defaultColor="item.defaultColor"
                   :id="item.id"
                   :color="item.color"
        />
      </div>
    </div>
  </div>
</template>

<script>

  import BoardItem from './components/BoardItem'
  import BoardBorderABC from './components/BoardBorderABC'
  import BoardBorderNum from './components/BoardBorderNum'

  import { mapState } from 'vuex'

  export default {
    name: 'app',
    components: { BoardBorderNum, BoardBorderABC, BoardItem },
    computed: {
      ...mapState(['board']),
    },
    created () {
      this.$store.commit('CREATE_BOARD')
    },
  }
</script>

<style lang="scss">
  @import "assets/style";

  .board-wrapper {
    display: grid;
    border: 1px solid #000;
    width: 500px;
    margin: 0 auto;
    grid-template-columns: 40px auto 40px;
    grid-template-areas: "bbt bbt bbt" "bbl main bbr" "bbb bbb bbb";
  }

  .board-border-top {
    grid-area: bbt;
  }

  .board-border-right {
    grid-area: bbr;
  }

  .board-border-bottom {
    grid-area: bbb;
  }

  .board-border-left {
    grid-area: bbl;
  }

  .board {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    border: 1px solid #000;
    grid-area: main;
  }
</style>
