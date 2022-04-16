import './leftbar-chatlist.scss'

let Chatlist = () => {
    return (
        <div className="leftbar__chatlist">
            <div className="leftbar__chat">
                <div className="leftbar__chat-ico"></div>
                <p className="leftbar__chat-name">EZ Team</p>
                <div className="leftbar__unread-msgs">10</div>
            </div>
        </div>
    )
}

export default Chatlist;