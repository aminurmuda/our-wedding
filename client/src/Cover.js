function Cover({ onClick }) {

    return (
        <div className="center fullheight">
            <div>
                <p className="font-size-2 slide-up">The Wedding of</p>
                <div className="mt-2 mb-2 shine scale-up">
                    Nita & Amin
                </div>
                <p className="font-size-1 slide-up">Kepada Yth.</p>
                <p className="font-size-2 bold fade-in">Alvin Wardhana</p>
                <p className="font-size-1 slide-up">di Tempat</p>
                <button className="action-button mt-2 slide-down" onClick={onClick}>Buka Undangan</button>
            </div>
        </div>
    )
}

export default Cover