import '../fullscreen-options-wrap-password/fullscreen-options-wrap-password.scss';

let FullscreenOptionsWrapPassword = () => {
    return (
        <div className="pass-form">
            <div className="current-pass">
                <div className="current-pass__wrap">
                    <p>Current password</p>
                    <input type="text" className="current-pass__input" />
                </div>
            </div>
            <div className="new-pass">
                <div className="new-pass__wrap">
                    <p>New password</p>
                    <input type="text" className="new-pass__input" />
                </div>
            </div>
            <div className="confirm-pass">
                <div className="confirm-pass__wrap">
                    <p>Confirm password</p>
                    <input type="text" className="confirm-pass__input" />
                </div>
            </div>
            <div className="ctrl-btns">
                <button className="ctrl-btns__save">Save</button>
                <button className="ctrl-btns__cancel">Cancel</button>
            </div>
        </div>
    )
}

export default FullscreenOptionsWrapPassword;