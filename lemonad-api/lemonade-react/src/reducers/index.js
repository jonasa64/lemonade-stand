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
            return {
                price: action.payload.price,
                lemonUsed: action.payload.lemonUsed,
                type: action.payload.type,
                amount: action.payload.amount

            }

        case "TOTAL_LEMONS":
            return {
                totalLemons: action.payload
            }
        default:
            return state;
    }
}

export default rootReducer;
