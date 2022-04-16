import './leftbar-usercard.scss'

let UserCard = () => {
    return (
        <div className="leftbar__user-card">
            <div className="leftbar__user-ico"></div>
            <div className="leftbar__current-info">
                <div className="leftbar__user-name">Username</div>
                <div className="leftbar__user-role">Role</div>
            </div>
            <div className="leftbar__options">
                <svg width="27" height="18" viewBox="0 0 27 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 17H25.5M1 9H25M1 1H25" stroke="white" stroke-opacity="0.3" stroke-width="2"
                        stroke-miterlimit="1.30541" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
        </div>
    )
}

export default UserCard;