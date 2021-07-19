//Actions
const ADD_ITEM = 'item/ADD_ITEM';

//Action Creator
export const addItem = (item) => {
    return {
        type:ADD_ITEM, payload:item
    }
}
//Reducer
const initialState = {
    items:[
        {
            id:'1',
            name:'김지구'
        }
    ]
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case ADD_ITEM:
        // state.items.push(payload)
        const newItems = [...state.items,payload];
        return { ...state, items:newItems }

    default:
        return state
    }
}

