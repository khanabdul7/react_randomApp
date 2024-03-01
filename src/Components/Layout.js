import './Layout.css'
import App from '../App';
const Layout = () => {
    return (
        <div className='layout-container'>
            <header>
                Header
            </header>
            <div className='main'>
                <aside className='left'>Left</aside>
                <main><App /></main>
                <aside className='right'>Right</aside>
            </div>
            <footer>Footer</footer>
        </div>
    )
}

export default Layout