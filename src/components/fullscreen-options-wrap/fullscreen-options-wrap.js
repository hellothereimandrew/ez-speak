import '../fullscreen-options-wrap/fullscreen-options-wrap.scss';
import FullscreenOptionsWrapAccount from '../fullscreen-options-wrap-account/fullscreen-options-wrap-account';
import FullscreenOptionsWrapPassword from '../fullscreen-options-wrap-password/fullscreen-options-wrap-password';
import FullscreenOptionsWrapQuality from '../fullscreen-options-wrap-quality/fullscreen-options-wrap-quality';
import FullscreenOptionsChannelSettings from '../fullscreen-options-wrap-channels/fullscreen-options-wrap-channels';

let FullscreenOptionsWrap = () => {
    return (
        <div className="fullscreen-options__wrap">
            <FullscreenOptionsWrapAccount></FullscreenOptionsWrapAccount>
            <FullscreenOptionsWrapPassword></FullscreenOptionsWrapPassword>
            <FullscreenOptionsWrapQuality></FullscreenOptionsWrapQuality>
            <FullscreenOptionsChannelSettings></FullscreenOptionsChannelSettings>
        </div>
    )
}

export default FullscreenOptionsWrap;