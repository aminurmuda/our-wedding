import Icon from '@mdi/react';
import { mdiMapMarkerOutline } from '@mdi/js';
import Countdown from './components/Countdown';
function Event() {
    const date = new Date('10/22/2022, 10:00:00 AM')
    const targetDate = date.getTime();

    return (
        <div className="mt-3">
            <div>
                <p className="font-1 m-1">Akad Nikah</p>
                <p className="font-size-1 mt-1">Pukul 10.00 WIB</p>
            </div>

            <div>
                <p className="font-1 m-1">Walimah</p>
                <p className="font-size-1 mt-1">Pukul 12.30 WIB</p>
            </div>

            <div className="flex space-around font-size-2 bold px-2 mt-1">
                <p>Sabtu, 22 Oktober 2022</p>
            </div>

            <p className="mt-1 center font-size-1"><Icon size={0.8} path={mdiMapMarkerOutline} /> di Graha Sofia</p>
            {/* <div className="mt-3">
                <a className="maps-link" target="_blank" href="https://calendar.google.com/event?action=TEMPLATE&tmeid=MXBiNnBpM3Fra2RpYzkwbm00bzg4b2Q4c2QgYW1pbnVybXVkYUBt&tmsrc=aminurmuda%40gmail.com" rel="noreferrer">Ingatkan Saya</a>
            </div> */}

            <p className="mt-2 mb-1">
                Maha Suci Allah ‘Azza wa Jalla yang menautkan dua hati dalam ikatan suci pernikahan. Semoga pernikahan ini bisa menjadi langkah awal kami untuk dapat berkumpul bersama kaum mukminin di syurga kelak. Aamiin.
            </p>
            <p className="font-1 m-1">Hitung Mundur Acara</p>
            <Countdown targetDate={targetDate} />
        </div >


    )
}

export default Event