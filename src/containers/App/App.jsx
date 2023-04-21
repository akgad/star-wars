import styles from './App.module.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Header from '@components/Header'

import routesConfig from '@routes/routesConfig'

const App = () => {
    return (
        <>
            <BrowserRouter basename='/star-wars/'>
                <div className={styles.container}>

                    <Header />

                    <Routes>
                        {routesConfig.map((route, index) => (
                            <Route key={index} path={route.path} element={route.element} />
                        ))}

                    </Routes>

                </div>

            </BrowserRouter>

        </>
    )
}


export default App;
