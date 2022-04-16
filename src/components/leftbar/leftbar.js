import './leftbar.scss';
import UserCard from '../leftbar-usercard/leftbar-usercard';
import Navigation from '../leftbar-nav/leftbar-nav';
import Chatlist from '../leftbar-chatlist/leftbar-chatlist'
import AsideNotifi from '../aside-notifi/aside-notifi';
import AsideOptions from '../aside-options/aside-options';

let Leftbar = () => {
    return (
        <div className="leftbar" >
            <UserCard></UserCard>
            <Navigation></Navigation>
            <Chatlist></Chatlist>
            <AsideNotifi></AsideNotifi>
            <AsideOptions></AsideOptions>
        </div >
    )
}

export default Leftbar;