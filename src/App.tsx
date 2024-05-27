import { useState } from 'react';
import styles from './App.module.scss';
import { Header } from './components/header/header';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <Header />
        </div>
    );
}

export default App;
