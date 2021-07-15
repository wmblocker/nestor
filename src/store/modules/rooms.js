/* eslint-disable */
//Rooms Store

const state = {
    rooms: {}
};
const mutations = {};
const getters = {};
const actions = {
    /**
     * Create a new room.
     * @constructor
     * @param {string} roomName - The name of the room.
     */
    createRoom({commit, state, dispatch}, roomName) {
        firebase.database().ref('rooms/' + 'userID').set({
            name: roomName,
            userId: 'userId'
        })
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};