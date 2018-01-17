
export function switchProfiles() {
    return function(dispatch) {
        dispatch({type:'SWITCH_PROFILE', payload:"testing"})
    }
}