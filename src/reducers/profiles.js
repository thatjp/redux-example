import { SWITCH_PROFILE } from '../constants/actionTypes'

/*--------------------

profiles() has access to the initial state we define and to the constant SWITCH_PROFILES we import

Make 'profiles' available to reducersIndex by exporting it as a function.

--------------------*/

export default function profiles(state = {profiles:
        {
            prof_id: "1",
            name: "Joe",
            skills: ['Web Development','Design','Film','Music'],
            text: "Lorem ipsum dolor sit amet, at error populo nemore eum. Sale erant albucius no pro. Ei cum alia malorum. Quo dolore primis sententiae ut, pro ea saepe timeam. No eam quaeque ocurreret, at esse magna per. Nusquam erroribus te nec, ne errem nullam assentior has. In ferri alterum pro, et pro iriure tritani. Id debet blandit usu, his no vitae consul ocurreret, in summo eripuit ius. Veri persius eripuit pri in, mediocrem suavitate an duo. Facer regione cu nec, ea vix errem laboramus voluptatibus."
        }
        }, action) {

    switch (action.type) {
        case SWITCH_PROFILE:
             
            return {...state, prof_id: action.payload}
        default:
            return state;
    }
}