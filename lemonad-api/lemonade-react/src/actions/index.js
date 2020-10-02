export const increment = () => {
    return (dispatch, getState) => {
        dispatch({type:"INCREMENT"});
    }
}

export const decrement = () => {
    return (dispatch, getState) => {
        dispatch({type: "DECREMENT"});
    }
}


