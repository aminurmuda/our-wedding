import Icon from '@mdi/react';
import { mdiMapMarkerOutline, mdiCalendarOutline, mdiCalendarCheckOutline } from '@mdi/js';
import Countdown from './components/Countdown';
function Event() {
    const date = new Date('10/22/2022, 10:00:00 AM')
    const targetDate = date.getTime();
    const text = 'Acara+Pernikahan+Nita+%26+Amin'
    const dates = '20221022T100000/20221022T140000'
    const details = 'Resepsi+acara+pernikahan+Nita+%26+Amin%0D%0AGraha+Sofia%2C+Jl.+Otto+Iskandardinata%2C+Karanganyar%2C+Kec.+Subang%2C+Kabupaten+Subang%2C+Jawa+Barat+41215%0D%0Ahttps%3A%2F%2Fgoo.gl%2Fmaps%2FXWYrHyXxTLNh4KiD7'
    const location = 'Graha+Sofia'
    const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${text}&details=${details}&dates=${dates}&location=${location}`

    return (
        <div className="pt-3">
            <div>
                <p className="font-1 bold">Akad Nikah</p>
                <p className="font-size-1 mt-1">Pukul 10.00 - 11.30 WIB</p>
            </div>
            <div>
                <p className="font-1 bold mt-1">Walimah</p>
                <p className="font-size-1 mt-1">Pukul 12.30 - 14.00 WIB</p>
            </div>
            <div className="mt-1">
                <p className='center font-size-1'><Icon size={0.8} path={mdiCalendarOutline} className="mr-0-5" /> Sabtu, 22 Oktober 2022</p>
                <p className="center font-size-1"><Icon size={0.8} path={mdiMapMarkerOutline} className="mr-0-5" /> di Graha Sofia</p>
            </div>
            <p className="mt-2 mb-1">
                Maha Suci Allah ‘Azza wa Jalla yang menautkan dua hati dalam ikatan suci pernikahan. Semoga pernikahan ini bisa menjadi langkah awal kami untuk dapat berkumpul bersama kaum mukminin di syurga kelak. Aamiin.
            </p>
            <p className="font-1 m-1">Hitung Mundur Acara</p>
            <Countdown targetDate={targetDate} />
            <div className="mt-3">
                <a className="action-button center" target="_blank" href={url} rel="nofollow noreferrer" role="button"><Icon size={0.8} path={mdiCalendarCheckOutline} className="mr-0-5" />Simpan ke Google Calendar</a>
            </div>
        </div >


    )
}

export default Event