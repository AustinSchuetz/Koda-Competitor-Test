// import firebaseApp from '~/firebase/app'
//
// export default function ({store}) {
//     firebaseApp.auth().onAuthStateChanged((user) => {
//         console.log('[AUTH PLUGIN] onAuthStateChanged:', user)
//         if (user) {
//             store.commit('saveUID', user.uid);
//             store.commit('saveProfileData', user.uid);
//         }
//     })
// }