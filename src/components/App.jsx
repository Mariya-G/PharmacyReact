import React, { useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import Information from "./Information";
import Footer from "./Footer";
import Cabinet from "./Cabinet";
import { Routes, Route } from "react-router-dom";

function App() {
  const nameUser = '';
  const textForName = '';
  const [isStreachHeader, setIsStreachHeader] = useState(false); // Для растягивания шапки при скрытии боковой панели
  const [isOpenSidebar, setIsOpenSidebar] = useState(true); // Боковая панель
  const [isStreachContent, setIsStreachContent] = useState(false); // Для растягивания контента при скрытии боковой панели
  const [windowWidth, setWidowWidth] = useState(window.innerWidth); // Ширина экрана
  const [inputName, setInputName] = useState(nameUser);
  const [inputTextArea, setInputTextArea] = useState(textForName);
  // Отслеживание ширины экрана, ниже 700 боковая панель сворачивается, а свыше 700 по умолчанию открыта
  useEffect(() => {
    const handleResize = () => {
      setWidowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    if (window.innerWidth > 700) {
      setIsStreachHeader(false);
      setIsOpenSidebar(true);
      setIsStreachContent(false);
    } else {
      setIsStreachHeader(true);
      setIsOpenSidebar(false);
      setIsStreachContent(true);
    }
    const isContentStreach = window.innerWidth < 700;
    setIsStreachContent(isContentStreach);

    return ()=> {
      window.removeEventListener('resize', handleResize);
    }
  }, [windowWidth]);

// Изменения состояний шапки, боковой панели и контента
  const handleWholeScreen = () => {
    setIsOpenSidebar((prevState) => !prevState);
    setIsStreachHeader((prevState) => !prevState);
    setIsStreachContent((prevState) => !prevState);
  };
 
  

useEffect(()=> {
  const savedName = localStorage.getItem('inputName');
  const savedText = localStorage.getItem('textArea')
    if (savedName) {
    setInputName(savedName);
  }
  if (savedText) {
    setInputTextArea(savedText);
  }
}, [setInputName, setInputTextArea]);

  return (
    <div className="page">
      <Sidebar 
        onChange={handleWholeScreen} 
        isOpenSidebar={isOpenSidebar}
        windowWidth={windowWidth}
      />
      <Header 
      isStreachHeader={isStreachHeader}
      savedName={inputName}
      setInputName={setInputName}
      />
      <section
        className={`content ${isStreachContent ? "content-streach" : ""}`}
      >
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/sub-menu-1" element={<Information />} />
          <Route path="/sub-menu-2" element={<Information />} />
          <Route path="/sub-menu-3" element={<Information />} />
          <Route path="/sub-menu-4" element={<Information />} />
          <Route path="/sub-menu-5" element={<Information />} />
          <Route path="/sub-menu-6" element={<Information />} />
          <Route path="/sub-menu-7" element={<Information />} />
          <Route path="/cabinet" element={
            <Cabinet 
            inputName={inputName} 
            setInputName={setInputName}
            setInputTextArea={setInputTextArea}
            inputTextArea={inputTextArea}
            />}
            />
        </Routes>
      </section>
      <Footer />
    </div>
  );
}

export default App;
