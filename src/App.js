import Header from './header';
import './css/style.css'
import Mybody from './MyBody';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Amreet K</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        <Header />
        <Mybody />
    </div>
  );
}

export default App;
