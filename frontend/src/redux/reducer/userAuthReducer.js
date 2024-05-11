const initialState = {
    user : null,
}

const userAuthReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'USER_LOGIN':
            return{
                user : action.payload
            }
        case 'USER_LOGOUT':
            return{
                user : null
            }
        default:
            return state
    }
}


export default userAuthReducer;