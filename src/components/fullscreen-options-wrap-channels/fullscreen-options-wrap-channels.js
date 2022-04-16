import '../fullscreen-options-wrap-channels/fullscreen-options-wrap-channels.scss';

let FullscreenOptionsChannelSettings = () => {
    return (
        <div className="channel-settings">
            <p className="channel-settings__header">Select channel</p>
            <div className="selected-channel">
                <p className='selected-channel__header'>Select channel</p>
                <div className="selected-channel-box">
                    <select name="" id="" className="selected-channel__select">
                        <option value="">EZ Team</option>
                    </select>
                </div>
                <div className="channel-name">
                    <p className='channel-name__header'>Channel name</p>
                    <div className="channel-name-box">
                        <input type="text" placeholder="EZ Team" className="channel-name-box__input" />
                    </div>
                </div>
            </div>
            <div className="profiles-settings">
                <p className='profiles-settings__header'>Profile settings</p>
                <div className='profiles-settings-choice'>
                    <p className='profiles-settings-choice__header'>Choose profile</p>
                    <select name="" id="" className='profiles-settings__select'>
                        <option value="">Admin</option>
                    </select>
                </div>
                <div className="profiles-settings-setname">
                    <p className='profiles-settings-setname__header'>Profile name</p>
                    <div>
                        <input type="text" placeholder="Admin" className="profiles-settings-setname__input" />
                    </div>
                </div>
                <div className="profiles-settings-users">
                    <p className='profiles-settings-users__header'>Users</p>
                    <div className="profiles-settings-users__list">
                        <p>User 1</p>
                    </div>
                </div>
                <div className="profiles-settings-rights">
                    <p className="profiles-settings-rights__header">Rights</p>
                    <div className="profiles-settings-rights__wrap">
                        <input type="checkbox" className=""></input>
                        <p>Role 1</p>
                    </div>
                    <div className="profiles-settings-rights__wrap">
                        <input type="checkbox" className=""></input>
                        <p>Role 2</p>
                    </div>
                    <div className="profiles-settings-rights__wrap">
                        <input type="checkbox" className=""></input>
                        <p>Role 3</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullscreenOptionsChannelSettings;