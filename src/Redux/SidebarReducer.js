

let InitialState = {


}

const SidebarReducer = (state = InitialState, action) => {
    switch (action.type) {

        // case UPDATE_SORTING: {
        //     return {...state,sorting:action.sorting}
        // }

        default:
            return state;
    }
};

// export const UpdateSorting = (sorting) => ({type: UPDATE_SORTING, sorting});


export default SidebarReducer