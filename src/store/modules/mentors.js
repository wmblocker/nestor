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
    /**
     * Get current mentor
     * @description Get current mentor
     */
    getMentor: state => state.mentor,
    /**
     * Get all mentors
     * @description Get all mentors
     * @returns mentors
     */
    getMentors: state => state.mentors,
    /**
     * Get a mentor using userId
     * @description Get a mentor using userId
     * @param userId - ID of the user
     * @returns mentor
     */
    getMentorById: state => userId => state.mentors[userId]
};
const actions = {
    /**
     * Create a mentor
     * @description Create a mentor from a userId
     * @param user - ID of the user
     */
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
    /**
     * Update the Current Mentor.
     * @description Update the current mentor with a user object
     * @param mentorId - ID of the mentor
     */
    updateCurrentMentor({commit, state, dispatch, rootState, rootActions}, mentorId) {
        const ref = firebase.database().ref("users");
        ref.child(mentorId).get().then((snapshot) => {
            commit('setMentor', snapshot.val())

        })
    },
    /**
     * Update Mentors.
     * @description Retrieve updated mentors
     */
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
    /**
     * Update Mentor.
     * @description Update a mentor  and retrieve updated mentors
     * @param payload - Object that correlates with mentor object
     */
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
    /**
     * Increment Rating.
     * @description Give the current mentor a good rating
     */
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