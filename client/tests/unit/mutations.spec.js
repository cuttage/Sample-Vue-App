function incrementSwitchCounter (state) {
  state.statistics[0].switchCounter++;
}
function boolSwitchCurrentStatus (state) {
  state.statistics[0].switchCurrentStatus = !state.statistics[0].switchCurrentStatus;
}
function setSwitchLastStatus (state, payload) {
  state.statistics[0].switchLastStatus = payload;
}

test('"increment" increments state by 1', () => {
  const state = {
    statistics: [
      {
        switchCounter: 0,
        switchCurrentStatus: false,
        switchLastStatus: null,
        id: 1
      }
    ]
  }
  incrementSwitchCounter(state)
  expect(state.statistics[0].switchCounter).toBe(1)
})

test('change state to true', () => {
  const state = {
    statistics: [
      {
        switchCounter: 0,
        switchCurrentStatus: false,
        switchLastStatus: null,
        id: 1
      }
    ]
  }
  boolSwitchCurrentStatus(state)
  expect(state.statistics[0].switchCurrentStatus).toBe(true)
})

test('change state to false', () => {
  const state = {
    statistics: [
      {
        switchCounter: 0,
        switchCurrentStatus: false,
        switchLastStatus: null,
        id: 1
      }
    ]
  }
  setSwitchLastStatus(state, state.statistics[0].switchCurrentStatus)
  expect(state.statistics[0].switchLastStatus).toBe(false)
})
