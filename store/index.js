// import vuex from 'vuex'

// const store = {
//     state:{
//         msg:'testing vuex'
//     }
// }

// export default function(){
//     return new vuex.Store(store)
// }
export const state = ()=>({
    msg1:'index.js state'
})
export const mutations = {
    test(state,arg){
        state.msg1 = arg
    }
}