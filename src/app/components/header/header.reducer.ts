import { Action } from '@ngrx/store';

export interface HeaderState {
  toggled: boolean;
}

export function headerReducer(state = {toggled: false}, action: Action) {
  switch (action.type) {
    case 'TOGGLE_DROPDOWN':
      return {...state, toggled: !state.toggled};
  }
}
