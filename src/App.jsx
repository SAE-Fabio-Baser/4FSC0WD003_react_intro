import React from "react";
import TodoList from "./TodoList";
import Footer from "./Footer";
import Navbar from "./Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <main className="flex w-full justify-center py-8">
        <TodoList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
