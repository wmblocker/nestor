/* eslint-disable */
//Rooms Store

const state = {
    rooms: {}
};
const mutations = {
    setRooms: (state, rooms) => state.rooms = rooms
};
const getters = {
    getRooms: (state) => state.rooms,
    getRoomById: (state) => (roomId, mentorId) => state.rooms[mentorId][roomId],
    getRoomsByMentorId: (state) => (mentorId) => state.rooms[mentorId]
};
const actions = {
    /**
     * Create a new room.
     * @constructor
     * @param {string} roomName - The name of the room.
     */
    createRoom({commit, state, dispatch, rootState, rootActions}, form) {
        const { id } = rootState.User.user;
        const formattedFormName = form.name.replace(/[^a-zA-Z]/g, '');
        const roomID = `${id}-${formattedFormName}`;
        const timestamp = firebase.firestore.Timestamp.now();
        firebase.database().ref('rooms/' + id + '/' + roomID).set({
            name: form.name,
            description: form.description,
            detailedDescription: form.detailedDescription,
            userId: id,
            open: true,
            participants: {},
            created: timestamp,
            updated: timestamp
        }).then(() => {
            dispatch('Mentors/createMentor', id, {root: true}).then(() => {
                dispatch('updateRooms')
            })
        });
    },
    updateRooms({commit, state}) {
        const dbRef = firebase.database().ref();
        dbRef.child('rooms').get().then((snapshot) => {
            if(snapshot.exists()) {
                commit('setRooms', snapshot.val());
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