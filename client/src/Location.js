import Icon from '@mdi/react';
import { mdiMapCheckOutline } from '@mdi/js';
function Location() {
    return (
        <div className="pt-3">
            <div>
                <p className="font-1 bold mb-1">Lokasi Acara</p>
                <iframe
                    title="location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.659111296737!2d107.76393931530066!3d-6.564640495252151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e693b62e10f23bf%3A0xdd3da48ef52d8f45!2sGraha%20Sofia!5e0!3m2!1sen!2sid!4v1660714945839!5m2!1sen!2sid"
                    className="maps"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            <p className="mt-1 font-size-1 bold mb-1">Graha Sofia</p>
            <p>Jl. Otto Iskandardinata, Karanganyar, Kec. Subang, Kabupaten Subang, Jawa Barat 41215</p>
            <div className="mt-2">
                <a className="center action-button" href="https://maps.app.goo.gl/Rb9hH9uaaTzxmfQn7" target="_blank" role="button" rel="noreferrer"><Icon size={0.8} path={mdiMapCheckOutline} className="mr-0-5" /> Buka di Google Maps</a>
            </div>
        </div>
    )
}

export default Location

