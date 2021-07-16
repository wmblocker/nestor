/* eslint-disable */
//User Store

const state = {
    user: {},
};

const mutations = {
    setUser: (state, user) => state.user = user
};
const getters = {
    getUser: (state) => (userID) => state.users[userID],
    getCurrentUser: (state) => state.user
};
const actions = {
    loginUser({commit, dispatch}, { email }) {
        const userId = email.substring(0, email.indexOf("@"));
        const ref = firebase.database().ref("users");
        ref.once("value")
            .then(function(snapshot) {
                if(!snapshot.hasChild(userId)){
                    dispatch('createUser', {userId, email}).then(() => {
                        ref.child(userId).get().then((snapshot) => {
                            commit('setUser', snapshot.val());
                        })
                    })
                } else {
                    ref.child(userId).get().then((snapshot) => {
                        commit('setUser', snapshot.val());
                    })
                }
            });
    },
    createUser({dispatch}, {userId, email}) {
        console.log(email)
        firebase.database().ref('users/' + userId).set({
            id: userId,
            email: email,
            name: '',
            displayName: '',
            avatar: '',
            interests: [],
            jobTitle: '',
            experience: '',
            description: '',
            state: '',
            city: ''
        });
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};