
import Icon from '@mdi/react';

function Navbar(props) {
    const { menu, page, setPage } = props

    const isActive = (item) => {
        return item === page
    }

    const NavbarItem = (props) => {
        return (
            <div className={`navbar-item ${isActive(props.item.value) ? 'is-active' : ''}`} onClick={() => { goToPage(props.item.value) }}>
                <div>
                    <Icon path={props.item.icon}
                        size={1} />
                    <p className="menu-label">
                        {props.item.label}
                    </p>
                </div>
            </div>
        )
    }

    const goToPage = (index) => {
        setPage(index)
        document.querySelector(`#page-${index}`).scrollIntoView({
            behavior: 'smooth'
        });
    }

    return (
        <div className="navbar-container">
            <div className="float">
                <div className='scroll-bar'>
                    <div className="navbar">
                        {menu.map(item => {
                            return (
                                <NavbarItem key={item.value} item={item} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;