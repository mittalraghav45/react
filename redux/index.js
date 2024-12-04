const BUY_CAKE = 'BUY_CAKE';

function buyCake(){
    return{
        type:BUY_CAKE,
        info:'First redux action'
    }
}

const initialState=
{
    numberOfCakes:10
}

const reducer(state=initialState,action)=>
{
    switch(action.type)
    {
        case BUY_CAKE:
        return{
            ...state,
            numberOfCakes:state.numberOfCakes-1
        }
        default:
            return state;
    }
}




//An action is an object with a type property

//reducers specify how the app's sytate changes in resoonse to actions sent to the store, its like (prevState,action)=>newState  , we get a neww state returned