const isEmpty = require("is-empty");

export default {
    setCurrentUser: (state, action) => {
        state.isAuthenticated = !isEmpty(action.payload);
        state.user = action.payload;
    },
    setUserLoading: (state) => {
        state.loading = true
    }
}