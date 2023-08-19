import './App.css';
import {Route, Routes} from "react-router-dom";
import PostCreationPage from "./pages/PostCreationPage/PostCreationPage.js";
import PostsPage from "./pages/PostPage/PostsPage.js";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Layout from "./components/Layout";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<PostsPage/>}/>
                    <Route path="/post" element={<PostCreationPage/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
