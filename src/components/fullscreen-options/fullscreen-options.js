import '../fullscreen-options/fullscreen-options.scss';

import FullscreenOptionsLeftbar from '../fullscreen-options-leftbar/fullscreen-options-leftbar';
import FullscreenOptionsCurrentHeader from '../fullscreen-options-current/fullscreen-options-current'
import FullscreenOptionsWrap from '../fullscreen-options-wrap/fullscreen-options-wrap';

let FullscreenOptions = () => {
    return (
        <div className='fullscreen-options'>
            <FullscreenOptionsLeftbar></FullscreenOptionsLeftbar>
            <FullscreenOptionsCurrentHeader></FullscreenOptionsCurrentHeader>
            <FullscreenOptionsWrap></FullscreenOptionsWrap>
        </div>
    )
}

export default FullscreenOptions;