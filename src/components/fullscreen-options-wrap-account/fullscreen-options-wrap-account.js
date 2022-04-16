import '../fullscreen-options-wrap-account/fullscreen-options-wrap-account.scss';

let FullscreenOptionsWrapAccount = () => {
    return (
        <div className="account-form">
            <div className="userpic"></div>
            <div className="username">
                <div className="username__wrap">
                    <p>User</p>
                    <input type="text" className="username__input" />
                </div>
            </div>
            <div className="userrole">
                <div className="userrole__wrap">
                    <p>Role</p>
                    <input type="text" className="userrole__input" />
                </div>
            </div>
            <div className="email">
                <div className="email__wrap">
                    <p>Email</p>
                    <input type="text" className="email__input" />
                </div>
            </div>
            <div className="ctrl-btns">
                <button className="ctrl-btns__save">Save</button>
                <button className="ctrl-btns__cancel">Cancel</button>
            </div>
        </div>
    )
}

export default FullscreenOptionsWrapAccount;