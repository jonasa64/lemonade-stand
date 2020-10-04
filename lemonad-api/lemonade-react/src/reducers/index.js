const initialState = {
    totalLemons: 0,
    price: 0,
    lemonUsed : 0 ,
    type : '',
    amount : 0
}



function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "BUY":
            return action.payload;

        case "TOTAL_LEMONS":
            return {
                ...state,
                totalLemons: action.payload
            }

        case "ORDER":
            return {
                ...state,
                price: action.payload.price,
                lemonUsed: action.payload.lemonUsed,
                type: action.payload.type,
                amount: action.payload.amount
            }
        default:
            return state;
    }
}

export default rootReducer;
