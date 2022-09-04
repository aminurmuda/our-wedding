

function Page({ currentPage, page, index, content }) {
    const isActive = currentPage !== page.value
    let bgColor = ''
    if (index % 2 === 0) {
        bgColor = 'bg-soft-pink'
    } else {
        bgColor = 'bg-soft-pink'
    }
    return (
        <div id={`page-${page.value}`} className={`${bgColor}`} aria-hidden={isActive}>
            <div className="center">
                <div className="page">
                    {content}
                </div>
            </div>
        </div>
    )
}

export default Page;