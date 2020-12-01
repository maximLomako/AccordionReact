type ActionType = {
  type: string
}

type StateType = {
  collapsed: boolean
}

export const TOGGLE_CONSTANT = "TOGGLE_COLLAPSED";
export const reducer = (state: StateType, action: ActionType): StateType => {

  switch (action.type) {
    case TOGGLE_CONSTANT:
      return {
        ...state,
        collapsed: !state.collapsed
      };
    default:
      throw new Error("Bad action type");
  }
}


