import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Academy from "./pages/Academy.jsx";
import Proxy from "./pages/Proxy.jsx";
import Blog from "./pages/Blog.jsx";
import NotFound from "./pages/NotFound.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import PageTransition from "./components/PageTransition.jsx";
import ChatWidget from "./components/ChatWidget.jsx";
import ScrollTopButton from "./components/ScrollTopButton.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <PageTransition />
        <ChatWidget />
        <ScrollTopButton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/proxy" element={<Proxy />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
}
