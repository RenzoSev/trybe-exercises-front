import { 
  SUBMIT_FORM, 
  REQUEST_CHARACTER, 
  FAILED_REQUEST_CHARACTER 
} from "../actions/submitForm";

const INITIAL_STATE = { 
  loading: false,
  error: '',
  character: {
    name: '',
    gender: '',
    aliases: [],
    books: [],
  },
};

function formReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_CHARACTER: 
    return { ...state, loading: true }
    case SUBMIT_FORM:
      return { ...state, loading: false, character: action.payload }
    case FAILED_REQUEST_CHARACTER: 
      return { ...state, loading: false, error: action.payload }
      default:
      return state; 
  }
}

export default formReducer;
