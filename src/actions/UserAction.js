import api  from "./api";

export const ACTION_TYPES = {
  CREATE: "CREATE",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
  FETCH: "FETCH",

}

export const fetchAll = () => dispatch => {
  api.user().fetchAll()
    .then(response => {
      dispatch({
        type: ACTION_TYPES.FETCH,
        paylaod: response.data
      })
    })
    .catch(err => {
      console.log(err)
    })
}