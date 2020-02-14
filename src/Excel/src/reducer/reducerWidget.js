const widgetInitState = {
  filetovalidate: ''
}

export const reducerWidget = (state = widgetInitState, action) => {
  switch (action.type) {
    case 'CHECK':
      return {
        ...state,
        filetovalidate: action.payload.filename
      }
    default:
      break
  }
  if (action.type === 'CHECK') {
    return {
      ...state,
      filetovalidate: action.payload.filename
    }
  }
  return state
}
