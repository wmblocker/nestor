/* eslint-disable */
//Mentees Store

const state = {
    mentees: {},
    mentee: {}
};
const mutations = {
    setMentees: (state, mentees) => state.mentees = mentees,
    setMentee: (state, mentee) => state.mentee = mentee
};
const getters = {
    getMentee: state => state.mentee,
    getMentees: state => state.mentees,
    getMenteeById: state => userId => state.mentees[userId]
};
const actions = {
    createMentee({commit, state, dispatch}, userId) {
        const timestamp = firebase.firestore.Timestamp.now();

        if(!state.mentees[userId]) {
            firebase.database().ref('mentees/' + userId).set({
                rating: 0,
                created: timestamp,
                updated: timestamp
            }).then(() => {
                dispatch('updateMentees')
            });
        }
    },
    updateCurrentMentee({commit, state, dispatch, rootState, rootActions}, menteeId) {
        const ref = firebase.database().ref("users");
        ref.child(menteeId).get().then((snapshot) => {
            commit('setMentee', snapshot.val())

        })
    },
    updateMentees({commit, state}) {
        const dbRef = firebase.database().ref();
        dbRef.child('mentees').get().then((snapshot) => {
            if(snapshot.exists()) {
                commit('setMentees', snapshot.val());
            }
        }).catch((error) => {
            console.error(error);
        });
    },
    updateMentee({commit, state, dispatch}, payload){
        const ref = firebase.database().ref("mentees/" + state.mentee.id );

        const update = {
            ...payload
        };

        ref.update(update, (error) => {
            if(!error) {
                dispatch('updateMentees');
            }
        });
    },
    incrementRating({commit, state, dispatch}) {
        dispatch('updateMentee', {
            rating: ++state.mentees[state.mentee.id].rating
        });
    },
    subscribeToRoom({commit, state, dispatch, rootState}, payload) {
        const timestamp = firebase.firestore.Timestamp.now();
        const { id } = rootState.User.user;
        firebase.database().ref('mentees/' + id + '/' + payload.roomId).set({
            roomId: payload.roomId,
            active: true,
            created: timestamp,
            updated: timestamp
        }).then(() => {
            dispatch('updateMentees');
            dispatch('Rooms/updateRoom', {
                roomId: payload.roomId,
                mentorId: payload.mentorId,
                open: false
            }, { root: true })
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