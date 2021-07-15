/* eslint-disable */
//Mentors Store

const state = {
    mentors: {}
};
const mutations = {
    setMentors: (state, mentors) => state.mentors = mentors
};
const getters = {
    getMentors: state => state.mentors,
    getMentorById: state => userId => state.mentors[userId]
};
const actions = {
    createMentor({commit, state, dispatch}, userId) {
        const timestamp = firebase.firestore.Timestamp.now();

        if(!state.mentors[userId]) {
            firebase.database().ref('mentors/' + userId).set({
                rating: 0,
                created: timestamp,
                updated: timestamp
            }).then(() => {
                dispatch('updateMentors')
            });
        }
    },
    updateMentors({commit, state}) {
        const dbRef = firebase.database().ref();
        dbRef.child('mentors').get().then((snapshot) => {
            if(snapshot.exists()) {
                commit('setMentors', snapshot.val());
            }
        }).catch((error) => {
            console.error(error);
        });
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};