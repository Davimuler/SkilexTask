import './App.css';
import { ContentContainer } from "./Components/Content/ContentContainer";
import { SidebarContainer } from "./Components/Sidebar/SidebarContainer";
import { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
    const isSidebarOpen = useSelector((state) => state.Sidebar.isSidebarOpened);


     console.log("RENDER");
    return (
        <div className="App">
            <header className="header">
                ShopName
            </header>
            <div className="main">
                <aside className={`sidebar ${!isSidebarOpen ? 'collapsed' : ''}`}>
                    <SidebarContainer isSidebarOpen={isSidebarOpen} />
                </aside>
                <main className={`content ${!isSidebarOpen ? 'expanded' : ''}`}>
                    <ContentContainer />
                </main>
            </div>
        </div>
    );
}

export default App;
