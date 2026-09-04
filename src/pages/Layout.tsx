import { Outlet, Link } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";
import { GraduationCap, Database, Users, Calendar } from "lucide-react";

export function Layout() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans break-keep flex flex-col">
      <header className="bg-slate-900 text-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <GraduationCap className="w-8 h-8 text-amber-400" />
            <div>
              <h1 className="font-bold text-lg leading-tight tracking-tight">센트럴 기숙 학원</h1>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest">Central Boarding Academy</p>
            </div>
          </Link>
          <nav className="flex gap-1 sm:gap-4 text-sm font-medium">
            <Link to="/characters" className="flex items-center gap-1.5 px-3 py-2 rounded-md hover:bg-slate-800 transition-colors">
              <Users className="w-4 h-4" />
              <span className="hidden sm:inline">학생/교사 인적사항</span>
              <span className="sm:hidden">인물</span>
            </Link>
            <Link to="/world" className="flex items-center gap-1.5 px-3 py-2 rounded-md hover:bg-slate-800 transition-colors">
              <Database className="w-4 h-4" />
              <span className="hidden sm:inline">통합 설정 데이터</span>
              <span className="sm:hidden">세계관</span>
            </Link>
            <Link to="/schedule" className="flex items-center gap-1.5 px-3 py-2 rounded-md hover:bg-slate-800 transition-colors">
              <Calendar className="w-4 h-4" />
              <span className="hidden sm:inline">연간 학사 일정</span>
              <span className="sm:hidden">일정</span>
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      <footer className="bg-slate-900 text-slate-400 py-6 text-center text-sm border-t border-slate-800">
        <p>© Central Boarding Academy. All Data Classified.</p>
      </footer>
      
      {/* ScrollRestoration ensures scroll position is maintained on back navigation */}
      <ScrollRestoration />
    </div>
  );
}
