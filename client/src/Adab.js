function Location() {
    const list = [
        { id: 1, isActive: true, message: 'Tamu ikhwan & akhwat terpisah', icon: 'asdasd' },
        { id: 2, isActive: true, message: 'Gunakan Pakaian yang Sopan & Menutup Aurat', icon: 'asdasd' },
        { id: 3, isActive: true, message: 'Mendoakan Pengantin', icon: 'asdasd' },
        { id: 4, isActive: true, message: 'Perhatikan Adab Makan & Minum', icon: 'asdasd' },
        { id: 5, isActive: true, message: 'Tidak mengambil foto/video kedua mempelai tanpa izin', icon: 'asdasd' },
        { id: 6, isActive: true, message: 'Tidak datang berdua dengan pasangan non mahrom (belum menikah) (QS. Al-Isra : 32)', icon: 'asdasd' },
        { id: 7, isActive: true, message: 'Dilarang merokok', icon: 'asdasd' },
    ]

    return (
        <div className="mt-3">
            <div>
                <p className="font-1 bold m-1">Adab Walimah</p>
            </div>
            <div class="grid-container">
                {list.map(item => {
                    return (
                        <div key={item.id} class="grid-item">{item.message}</div>
                    )
                })}
            </div>
        </div>
    )
}

export default Location