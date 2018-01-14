import { SWITCH_PROFILES } from '../constants/ActionTypes'

const initialState = [
        {
            id: '1-fca2',
            name: 'JP Harris',
            titles: ['Bartender, Resident Inspector, Full-Stack Web Developer'],
            text: "BioText For JP"
        },
        {
            id: '1-fca2',
            name: 'Frank Sinatra',
            titles: ['Jets QB, President of USA, Jimmy Johns Sandwich Builder'],
            text: "BioText For JP"
        }
    ]

/*--------------------

profiles() has access to the initial state we define and to the constant SWITCH_PROFILES we import

Make 'profiles' available to reducersIndex by exporting it as a function.

--------------------*/

export default function profiles(state = initialState, action) {
    switch (action.type) {
        case 'SWITCH_PROFILE':
            
            console.log(state[0].name)
    
        default:
            return state;
    }
}