import axios from 'axios';

export const buy = (data) => {
    return (dispatch, getState) => {
        axios.post('http://localhost:5001/cups', data )
            .then((data) => {
                console.log(data.data.data);
                dispatch({type: "BUY", payload: data.data.data});
            }).catch((err) => {
                console.log(err);
        })
    }
}


export const getOrder = () => {

    return (dispatch, getState) => {
        axios.get('http://localhost:5001/order')
            .then((data) => {
                console.log(data.data.order);
                dispatch({type: "ORDER", payload: data.data.order});
            }).catch((err) => {
            console.log(err);
        })
    }
}

export const getTotalLemons = () => {

    return (dispatch, getState) => {
        axios.get('http://localhost:5001/lemons')
            .then((data) => {
                dispatch({type: "TOTAL_LEMONS", payload: data.data.lemons});
            }).catch((err) => {
            console.log(err);
        })
    }
}


