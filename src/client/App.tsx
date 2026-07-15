import AdminPage from './pages/AdminPage';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img src="/logo-small.png" alt="cinaworker" className="header-logo" />
        <h1>cinaworker Admin</h1>
      </header>
      <main className="app-main">
        <AdminPage />
      </main>
    </div>
  );
}
