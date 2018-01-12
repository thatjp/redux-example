function BioReducer(state = [
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
],action) {
    switch (action.type) {
        case 'OTHER_TITLES':

            return

        case 'SWITCH_PROFILE':
            
            console.log('Switch Profiles')
    
        default:
            return state;
    }
}

function WorkReducer(state = [
    {
        id: '1-fca2',
        name: 'JP Harris',
        titles: ['Bartender, Resident Inspector, Full-Stack Web Developer'],
        text: "BioText For JP",
        responsibilities:['Things','things','thing','Other thing'],
    },
    {
        id: '1-fca2',
        name: 'Frank Sinatra',
        titles: ['Jets QB, President of USA, Jimmy Johns Sandwich Builder'],
        text: "BioText For JP",
        responsibilities:['Things','things','thing','Other thing'],
    }
],action) {
    switch (action.type) {
        case value:
            
            break;
    
        default:
            break;
    }
}