import charAPI from "../../services/charAPI";

export const SUBMIT_FORM = 'SUBMIT_FORM';
export const REQUEST_CHARACTER = 'REQUEST_CHARACTER';
export const FAILED_REQUEST_CHARACTER = 'FAILED_REQUEST_CHARACTER';

export function getCharacter(json) {
  return {
    type: SUBMIT_FORM,
    payload: json[0],
  }
};

export function requestCharacter() {
  return { type: REQUEST_CHARACTER }
};

export function failedRequestCharacter(error) {
  return {
    type: FAILED_REQUEST_CHARACTER,
    payload: error,
  }
};

export function fetchCharacter(character) {
  return async (dispatch) => {
    dispatch(requestCharacter());
    try {
      const char = await charAPI(character);
      dispatch(getCharacter(char))
    } catch(error) {
      dispatch(failedRequestCharacter(error))
    }
  };
};

// THEN E CATCH
// export function fetchCharacter(character) {
//   return (dispatch) => {
//     dispatch(requestCharacter());
//     return charAPI(character)
//       .then(
//         (char) => dispatch(getCharacter(char)),
//         (error) => dispatch(failedRequestCharacter(error)),
//         );
//   };
// };
