export const setOfflineData = (offline_data)=>({
    type:"SET_OFFLINE_DATA",
    offline_data
 })

 export const SetFirstPlay = (play_first)=>({
     type:"SET_FIRST_PLAY",
     play_first
 })

 export const SetNewReleases = (new_releases)=>({
     type:'SET_NEW_RELEASES',
     new_releases
 })

 //SET_TOKEN
 export const setToken = (token)=>({
    type:"SET_TOKEN",
    token
 })

 export const SetUser = (user)=>({
    type:"SET_USER",
    user
 })

 export const setPlaylists = (userPlaylist)=>({
     type:"SET_PLAYLISTS",
     userPlaylist
 })

 export const addPlaylist = (playlist)=>({
     type:"ADD_PLAYLIST",
     playlist
 })

 export const SetRecent = (recentPlayed)=>({
     type:"SET_RECENTS",
     recentPlayed
 })
 export const setError = (error)=>({
     type:"SET_ERROR",
     error
 })

 export const setDevice = (device)=>({
     type:"SET_DEVICE",
     device
 })
 export const setDrop = (dropdown)=>({
     type:"SET_DROPDOWN",
     dropdown
 })
 export const SetCurrentSong = (currentSong)=>({
     type:"SET_CURRENT_TRACK",
     currentSong
 })
 

 export const setActivePage = (activePage)=>({
     type:"SET_ACTIVE_PAGE",
     activePage
 })

 //SET_CATEGORIES
//  export const setCategories = (categories)=>({
//     type:"SET_CATEGORIES",
//     categories
// })

// export const setRecommendation = (recommendations)=>({
//     type:"SET_RECOMENDATION",
//     recommendations
// })

//SET_ACCESS_TOKEN
// export const setAccessToken = (accessToken)=>({
//     type:"SET_ACCESS_TOKEN",
//     accessToken
//  })

 export const SetPlaying= (playing)=>({
     type:"SET_PLAYING",
     playing
 })

//  export const setDevices = (devices)=>({
//      type:"SET_DEVICES",
//      devices
//  })

//  export const setDeviceToggle = (isDevices)=>({
//      type:"SET_DEIVICE_TOGGLE",
//      isDevices
//  })

 export const setActiveDevice = (activeDevice)=>({
     type:"SET_ACTIVE_DEVICE",
     activeDevice
 })

//  export const setRandomRecommendation = (randomRecommendation)=>({
//      type:'SET_RANDOM_RECOMMENDATIONS',
//      randomRecommendation
//  })

//  export const setToast = (isToast)=>({
//      type:"SET_TOAST",
//      isToast
//  })

//  export const setModal = (isModal)=>({
//      type:"SET_MODAL",
//      isModal
//  })