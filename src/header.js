import me from './css/logo-stuff/ME.svg';
import { render } from '@testing-library/react';
import { Component } from 'react';
import song from './music/Ghost.mp3';
import ReactPlayer from 'react-player';

const audioclips=[{sound: {song},track: "Ghost"}];

class Header extends Component{

    render(){
        return (<div className="main_container-header" >
                <div className="left_maincont-header">
                <h3>Amreet K</h3>
                <h1>ME</h1>
                <div className="preview">
                    {/* <img src={play} alt="" className="state" /> */}
                    <h3>Preview</h3>
                    <ReactPlayer url={song} height="50px" width="380px" playing={false} controls={true} id="reactplayer"/>
                </div>
            </div>
                <div className="Right_maincont-header">
                <img src={me} alt="error loading image" />
                </div>
            </div>);
    }
}
export default Header;