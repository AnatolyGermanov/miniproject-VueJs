

export const userModule = {
    state: () => ({
        isAuth: false,
        user: {},
    }),
    mutations: {
        setIsAuth(state, isAuth) {
            state.isAuth = isAuth;
        },
        setUser(state, user) {
            state.user = user;
        }
    },
    getters: {
      userId: state => state.user.id,
    },
    namespaced: true
}