import './App.css';
import Header from './component/Header';
import Home from './component/Home'
import Grid from '@material-ui/core/Grid';

function App() {
    return (
        <Grid container  >
            <Header />
            <Home />
        </Grid>
    );
}

export default App;
