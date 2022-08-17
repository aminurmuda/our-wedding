

function Page({ page, index, content }) {
    return (
        <div id={`page-${page.value}`} className={`center ${index % 2 === 1 ? 'bg-soft-lilac' : 'bg-cream'}`}>
            <div className="page">
                {content}
            </div>
        </div>
    )
}

export default Page;