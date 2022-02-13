export const SHOW_LOADER = 'SHOW_LOADER';
export const HIDE_LOADER = 'HIDE_LOADER';

const defaultState = {
  loading: false,
};

export const appReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loading: true };
    case HIDE_LOADER:
      return { ...state, loading: false };
    default:
      return state;
  }
};
