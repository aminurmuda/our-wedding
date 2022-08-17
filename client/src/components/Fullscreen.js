import { mdiFullscreen, mdiFullscreenExit } from '@mdi/js';
import { useState } from 'react'
import Icon from '@mdi/react';


function Fullscreen() {
    const [isFullscreen, setIsFullscreen] = useState(false)

    function requestFullscreen() {
        document.documentElement.requestFullscreen();
        console.log('set to fullscreen')
        setIsFullscreen(true)
    }

    function exitFullscreen() {
        document.exitFullscreen()
        console.log('set to fullscreen')
        setIsFullscreen(false)
    }

    const ButtonFullscreen = () => {
        return (<button className="round-button center" onClick={requestFullscreen}>
            <Icon path={mdiFullscreen} size={1} color="black" />
        </button>)
    }

    const ButtonExitFullscreen = () => {
        return (<button className="round-button center" onClick={exitFullscreen}>
            <Icon path={mdiFullscreenExit} size={1} color="black" />
        </button>)
    }

    return (
        <div className="floating-fullscreen-toggle">
            {isFullscreen ? <ButtonExitFullscreen /> : < ButtonFullscreen />}
        </div>
    )
}

export default Fullscreen;