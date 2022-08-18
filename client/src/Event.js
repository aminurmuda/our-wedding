import Icon from '@mdi/react';
import { mdiMapMarkerOutline, mdiCalendarOutline } from '@mdi/js';
import Countdown from './components/Countdown';
function Event() {
    const date = new Date('10/22/2022, 10:00:00 AM')
    const targetDate = date.getTime();

    return (
        <div className="mt-3">
            <div>
                <p className="font-1 bold m-1">Akad Nikah</p>
                <p className="font-size-1 mt-1">Pukul 10.00 - 11.30 WIB</p>
            </div>
            <div>
                <p className="font-1 bold m-1">Walimah</p>
                <p className="font-size-1 mt-1">Pukul 12.30 - 14.00 WIB</p>
            </div>
            <div className="mt-1">
                <p className='center font-size-1'><Icon size={0.8} path={mdiCalendarOutline} className="mr-0-5" /> Sabtu, 22 Oktober 2022</p>
                <p className="center font-size-1"><Icon size={0.8} path={mdiMapMarkerOutline} className="mr-0-5" /> di Graha Sofia</p>
            </div>

            {/* <div className="mt-3">
                <a className="action-button" target="_blank" href="https://calendar.google.com/event?action=TEMPLATE&tmeid=MXBiNnBpM3Fra2RpYzkwbm00bzg4b2Q4c2QgYW1pbnVybXVkYUBt&tmsrc=aminurmuda%40gmail.com" rel="noreferrer">Ingatkan Saya</a>
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