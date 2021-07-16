/* eslint-disable */
//Mentors Store

const state = {
    mentors: {},
    mentor: {}
};
const mutations = {
    setMentors: (state, mentors) => state.mentors = mentors,
    setMentor: (state, mentor) => state.mentor = mentor
};
const getters = {
    getMentor: state => state.mentor,
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
    updateCurrentMentor({commit, state, dispatch, rootState, rootActions}, mentorId) {
        const ref = firebase.database().ref("users");
        ref.child(mentorId).get().then((snapshot) => {
            commit('setMentor', snapshot.val())

        })
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
    updateMentor({commit, state, dispatch}, payload){
        const ref = firebase.database().ref("mentors/" + state.mentor.id );

        const update = {
            ...payload
        };

        ref.update(update, (error) => {
            if(!error) {
                dispatch('updateMentors');
            }
        });
    },
    incrementRating({commit, state, dispatch}) {
        dispatch('updateMentor', {
            rating: ++state.mentors[state.mentor.id].rating
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