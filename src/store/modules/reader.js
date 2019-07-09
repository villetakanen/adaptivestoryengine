import shop from '../../api/shop';

// initial state
// shape: [{ id, quantity }]
const state = {
  bookmark: null,
  title: null
};

export default {
    namespaced: true,
    state
};