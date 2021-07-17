/* eslint-disable */
//Rooms Store

const state = {
    rooms: {}
};
const mutations = {
    setRooms: (state, rooms) => state.rooms = rooms
};
const getters = {
    /**
     * Get Rooms
     * @return All rooms created
     */
    getRooms: state => state.rooms,
    /**
     * Get a room using a mentorId and roomId
     * @param {string} mentorId - ID of the mentor
     * @param {string} roomId - ID of the rooom
     * @return A Room object
     */
    getRoomById: state => (roomId, mentorId) => state.rooms[mentorId][roomId],
    /**
     * Get Rooms by Mentor ID(userId)
     * @param {string} mentorId - ID of the mentor
     * @return Rooms created by a mentor
     */
    getRoomsByMentorId: state => (mentorId) => state.rooms[mentorId]
};
const actions = {
    /**
     * Create a new room.
     * @param {Object} form - Fields from a form that correlate with room model
     */
    createRoom({commit, state, dispatch, rootState, rootActions}, form) {
        const { id } = rootState.User.user;
        const formattedFormName = form.name.replace(/[^a-zA-Z]/g, '');
        const roomID = `${id}-${formattedFormName}`;
        const timestamp = firebase.firestore.Timestamp.now();
        firebase.database().ref('rooms/' + id + '/' + roomID).set({
            name: form.name,
            roomId: roomID,
            description: form.description,
            detailedDescription: form.detailedDescription,
            userId: id,
            image: '',
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
    /**
     * Update rooms.
     * @description Retrieve a list of updated rooms
     */
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
    /**
     * Update rooms.
     * @description Update a specific room
     * @param {Object} payload - Object with keys that correlate to room object
     */
    updateRoom({commit, state, dispatch}, payload){
        const ref = firebase.database().ref("rooms/" + payload.mentorId + '/' + payload.roomId );
        ref.update({
            ...payload
        }, (error) => {
            if(!error) {
                dispatch('updateRooms')
            }
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