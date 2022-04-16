import './app.scss';
import Leftbar from '../leftbar/leftbar';
import Header from '../header/header';
import Rightbar from '../rightbar/rightbar';
import FullscreenOptions from '../fullscreen-options/fullscreen-options';

function App() {
    return (
        <div>
            <div className="main">
                <Leftbar></Leftbar>
                <Header></Header>
                <Rightbar></Rightbar>
            </div>
            <FullscreenOptions></FullscreenOptions>
        </div>
        
       
    )
}

export default App;