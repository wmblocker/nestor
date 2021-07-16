/* eslint-disable */
//User Store

const state = {
    user: {},
};

const mutations = {
    setUser: (state, user) => state.user = user
};
const getters = {
    getCurrentUser: (state) => state.user
};
const actions = {
    getUser({commit, dispatch}, id) {
        let user = {};
        const ref = firebase.database().ref("users");
        ref.child(id).get().then((snapshot) => {
             user = snapshot.val()
        })
        return user;
    },
    loginUser({commit, dispatch}, { email, mentor }) {
        const userId = email.substring(0, email.indexOf("@"));
        const ref = firebase.database().ref("users");
        ref.once("value")
            .then(function(snapshot) {
                if(!snapshot.hasChild(userId)){
                    dispatch('createUser', {userId, email, mentor}).then(() => {
                        ref.child(userId).get().then((snapshot) => {
                            commit('setUser', snapshot.val());
                        })
                    })
                } else {
                    ref.child(userId).get().then((snapshot) => {
                        commit('setUser', snapshot.val());
                    })
                }
                sessionStorage.setItem("userId", userId);
            });
    },
    loginUserWithId({commit, dispatch}, userId) {
        if(userId) {
            const ref = firebase.database().ref("users");
            ref.child(userId).get().then((snapshot) => {
                commit('setUser', snapshot.val());
            })
        } else {
            console.error('Login failed');
        }
    },
    updateUser({commit, state, dispatch}, form){
        const ref = firebase.database().ref("users/" + state.user.id );
        ref.update({
            ...form
        }, (error) => {
            if(!error) {
                commit('setUser', form);
            }
        });
    },
    createUser({dispatch}, {userId, email, mentor}) {
        firebase.database().ref('users/' + userId).set({
            id: userId,
            email: email,
            name: '',
            displayName: '',
            avatar: '',
            mentor: mentor,
            interests: [
                'Software Engineering',
                'Networking',
                'Product Design',
                'User Experience'
            ],
            jobTitle: '',
            experience: '',
            description: '',
            state: '',
            city: ''
        }, (error) => {
            if(error) {
                console.error(error);
            }
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