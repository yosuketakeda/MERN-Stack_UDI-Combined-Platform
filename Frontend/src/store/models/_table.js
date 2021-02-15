// import authApi from '../../api/auth';
// import { toast } from 'react-toastify';
// import UserService from '../../services/UserService';
// import AuthService from '../../services/AuthService';

export const table = {
  state: {
    full_table_view: false,
    set_contract_freeze: false,
    set_waterfall_freeze: false,
    errors: "",
  },
  reducers: {
    updateState(state, payload, name) {
      return { ...state, [name]: payload };
    },
    updateError(state, payload) {
      return { ...state, errors: payload };
    },
  },
  effects: (dispatch) => ({}),
};
