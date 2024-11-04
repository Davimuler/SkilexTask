import './App.css';
import {ContentContainer} from "./Components/Content/ContentContainer";

function App() {
    return (
        <div className="App">
            <header className="header">
                ShopName
            </header>
            <div className="main">
                <aside className="sidebar">
                    Sidebar
                </aside>
                <main className="content">
                  <ContentContainer/>
                </main>
            </div>
        </div>
    );
}

export default App;
