import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    board: [],
    knightPosition: null,
    moves: [],
  },

  mutations: {
    //-----------------------------------------------------
    // Рисуем доску, вызывается при создании компонента App
    //-----------------------------------------------------
    CREATE_BOARD (state) {
      let flag = true
      let defaultColor
      let color

      for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
          if (y === 0) {
            flag = !flag
          }

          if (flag) {
            defaultColor = color = 'white'
          } else {
            defaultColor = color = 'black'
          }

          let id = `${x}${y}`

          state.board.push({ id, defaultColor, color })

          flag = !flag
        }
      }
    },

    //-----------------------------------------------------
    // сброс отметки положения коня
    //-----------------------------------------------------
    RESET_KNIGHT (state) {
      state.board.forEach(item => {
        item.color = item.defaultColor
      })
    },

    //-----------------------------------------------------
    // сброс возможных ходов
    //-----------------------------------------------------
    RESET_MOVES (state) {
      state.moves = []
    },

    //-----------------------------------------------------
    // записываем положение коня и ставим отметку
    //-----------------------------------------------------
    PUT_KNIGHT (state, payload) {
      state.knightPosition = payload
      let position = state.board.find(item => {
        return item.id === payload
      })
      position.color = 'blue'
    },

    //-----------------------------------------------------
    // Находим и записываем возможные ходы
    //-----------------------------------------------------
    CALCULATE_MOVES (state) {
      let x = state.knightPosition[0]
      let y = state.knightPosition[1]

      if (x - 1 >= 0 && y - 2 >= 0) state.moves.push(`${x - 1}${y - 2}`)
      if (x - 2 >= 0 && y - 1 >= 0) state.moves.push(`${x - 2}${y - 1}`)

      if (+x + 1 < 8 && +y + 2 < 8) state.moves.push(`${+x + 1}${+y + 2}`)
      if (+x + 2 < 8 && +y + 1 < 8) state.moves.push(`${+x + 2}${+y + 1}`)

      if (x - 2 >= 0 && +y + 1 < 8) state.moves.push(`${x - 2}${+y + 1}`)
      if (x - 1 >= 0 && +y + 2 < 8) state.moves.push(`${x - 1}${+y + 2}`)

      if (+x + 2 < 8 && y - 1 >= 0) state.moves.push(`${+x + 2}${y - 1}`)
      if (+x + 1 < 8 && y - 2 >= 0) state.moves.push(`${+x + 1}${y - 2}`)
    },

    //-----------------------------------------------------
    // Отрисовываем ходы
    //-----------------------------------------------------
    DRAW_MOVES (state) {
      for (let i of state.moves) {
        let move = state.board.find(item => {
          return item.id === i
        })
        move.color = 'green'
      }
    },
  },

  actions: {

    //-----------------------------------------------------
    // Нажатие на клетку
    //-----------------------------------------------------
    putKnight ({ commit }, payload) {
      commit('RESET_MOVES')
      commit('RESET_KNIGHT', payload)
      commit('PUT_KNIGHT', payload)
      commit('CALCULATE_MOVES', payload)
      commit('DRAW_MOVES')
    },

  },
})
