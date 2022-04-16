import '../fullscreen-options-wrap-quality/fullscreen-options-wrap-quality.scss';

let FullscreenOptionsWrapQuality = () => {
    return (
        <div className="quality-settings">
            <div className="audio">
                <p className="audio__header">Microphone</p>
                <div className="audio-box">
                    <div className="input">
                        <div className="input-box">
                            <p className="input-box__header">Input</p>
                            <select name="" id="" className="input__select">
                                <option value="">Auto</option>
                            </select>
                        </div>
                        <div className="input__volume">
                            <div>
                                <p>Volume</p>
                                <div className="slidecontainer">
                                    <input type="range" min="1" max="100" value="50" className="slider"></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="output">
                        <div className="output-box">
                            <p className="output-box__header">Output</p>
                            <select name="" id="" className="output__select">
                                <option value="">Auto</option>
                            </select>
                        </div>
                        <div className="output__volume">
                            <div>
                                <p>Volume</p>
                                <div className="slidecontainer">
                                    <input type="range" min="1" max="100" value="50" className="slider"></input>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="video">
                <p className="video__header">Video</p>
                <div className="resolution-box">
                    <p className="resolution-box__header">Resolution</p>
                    <select name="" id="" className="resolution-box__select">
                        <option value="">Auto</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default FullscreenOptionsWrapQuality;