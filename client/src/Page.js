

function Page({ page, index, content }) {
    let bgColor = ''
    if (index > 0 && index % 2 === 0) {
        bgColor = 'bg-soft-lilac'
    } else if (index > 0 && index % 2 === 1) {
        bgColor = 'bg-soft-pink'
    }
    return (
        <div id={`page-${page.value}`} className={`center ${bgColor}`}>
            <div className="page">
                {content}
            </div>
        </div>
    )
}

export default Page;