import react from "react";
import spotify from './css/logo-stuff/Spotify.svg';
import Youtube from './css/logo-stuff/Youtube.svg';
import apple from './css/logo-stuff/applemusic.svg';
import deezer from './css/logo-stuff/deezer.svg';
import itunes from './css/logo-stuff/itunes_store.svg';
import insta from './css/logo-stuff/instagram.svg';
import facebook from './css/logo-stuff/facebook.svg';

class MyBody extends react.Component {
    render() {
        return (
            <div className="links">
                <div className="button">
                    <img src={spotify} alt="error loading" className="image" id="spotify" />
                    <a href="https://open.spotify.com/artist/7o81QZ0hP1WgKj7N5DF4oM?si=sL_L1GPnSV-rOJIGLFKI7A&dl_branch=1" className="link-redirect">Stream</a>
                </div>
                <div className="button">
                    <img src={Youtube} alt="error loading" className="image" id="YOutube" />
                    <a href="https://www.youtube.com/watch?v=c9r7JfjmwiM" className="link-redirect">Watch</a>
                </div>
                <div className="button">
                    <img src={apple} alt="error loading" className="image" id="apple" />
                    <a href="https://music.apple.com/us/artist/amreet-k/1558357037" className="link-redirect">Stream</a>
                </div>
                {/* <div className="button">
                    <img src={deezer} alt="error loading" className="image" id="deezer" />
                    <a href="https://open.spotify.com/artist/7o81QZ0hP1WgKj7N5DF4oM?si=sL_L1GPnSV-rOJIGLFKI7A&dl_branch=1" className="link-redirect">Stream</a>
                </div> */}
                <div className="button">
                    <img src={itunes} alt="error loading" className="image" id="itunes" />
                    <a href="https://music.apple.com/us/artist/amreet-k/1558357037" className="link-redirect">Stream</a>
                </div>
                <div className="button">
                    <img src={insta} alt="error loading" className="image" id="insta" />
                    <a href="https://www.instagram.com/akmaniac123/https://www.instagram.com/akmaniac123/" className="link-redirect">follow</a>
                </div>
                <div className="button">
                    <img src={facebook} alt="error loading" className="image" id="facebook" />
                    <a href="https://www.facebook.com/amreetkumar.khuntis.1/" className="link-redirect">follow</a>
                </div>
            </div>
        );
    }
}
export default MyBody;