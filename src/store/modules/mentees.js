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
    /**
     * Get current mentee
     * @description Get current mentee
     */
    getMentee: state => state.mentee,
    /**
     * Get all Mentees
     * @description Get all mentees
     * @returns mentees
     */
    getMentees: state => state.mentees,
    /**
     * Get a mentee using userId
     * @description Get a mentee using userId
     * @param userId - ID of the user
     * @returns mentee
     */
    getMenteeById: state => userId => state.mentees[userId]
};
const actions = {
    /**
     * Create a mentee
     * @description Create a mentee from a userId
     * @param user - ID of the user
     */
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
    /**
     * Update the Current Mentee.
     * @description Update the current mentee with a user object
     * @param menteeId - ID of the mentee
     */
    updateCurrentMentee({commit, state, dispatch, rootState, rootActions}, menteeId) {
        const ref = firebase.database().ref("users");
        ref.child(menteeId).get().then((snapshot) => {
            commit('setMentee', snapshot.val())

        })
    },
    /**
     * Update Mentees.
     * @description Retrieve updated mentees
     */
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
    /**
     * Update Mentee.
     * @description Update a mentee  and retrieve updated mentees
     * @param payload - Object that correlates with mentee object
     */
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
    /**
     * Increment Rating.
     * @description Give the current mentee a good rating
     */
    incrementRating({commit, state, dispatch}) {
        dispatch('updateMentee', {
            rating: ++state.mentees[state.mentee.id].rating
        });
    },
    /**
     * Subscribe to a Room.
     * @description Subscibe the current user to a room and add them as a mentee
     */
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