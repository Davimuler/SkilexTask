import './App.css';
import { ContentContainer } from "./Components/Content/ContentContainer";
import { SidebarContainer } from "./Components/Sidebar/SidebarContainer";
import { useState } from "react";

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="App">
            <header className="header">
                ShopName
            </header>
            <div className="main">
                <aside className={`sidebar ${!isSidebarOpen ? 'collapsed' : ''}`}>
                    <SidebarContainer isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
                </aside>
                <main className={`content ${!isSidebarOpen ? 'expanded' : ''}`}>
                    <ContentContainer />
                </main>
            </div>
        </div>
    );
}

export default App;
