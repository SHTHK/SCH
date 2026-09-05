import { Outlet, Link } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";
import { GraduationCap, Database, Users, Calendar } from "lucide-react";

export function Layout() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans break-keep flex flex-col">
      <header className="bg-slate-900 text-white shadow-md sticky top-0 z-50">
        {/* h-16(고정 높이)을 지우고 min-h-[4rem](최소 높이)을 주어 글씨가 넘치지 않게 했습니다 */}
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 min-h-[4rem] flex items-center justify-between">
          <Link to="/" className="flex items-center gap-1.5 sm:gap-2 hover:opacity-80 transition-opacity shrink-0 mr-2">
            <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400 shrink-0" />
            <div className="flex flex-col">
              {/* whitespace-nowrap을 추가하여 폭이 좁아도 강제로 줄이 안 바뀌게 막았습니다 */}
              <h1 className="font-bold text-sm sm:text-lg leading-tight tracking-tight whitespace-nowrap">센트럴 기숙 학원</h1>
              <p className="text-[8px] sm:text-[10px] text-slate-400 uppercase tracking-widest whitespace-nowrap">Central Boarding Academy</p>
            </div>
          </Link>
          <nav className="flex gap-1 sm:gap-4 text-xs sm:text-sm font-medium flex-wrap justify-end sm:flex-nowrap">
            <Link to="/characters" className="flex items-center gap-1 px-2 sm:px-3 py-2 rounded-md hover:bg-slate-800 transition-colors whitespace-nowrap">
              <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">학생/교사 인적사항</span>
              <span className="sm:hidden">인물</span>
            </Link>
            <Link to="/world" className="flex items-center gap-1 px-2 sm:px-3 py-2 rounded-md hover:bg-slate-800 transition-colors whitespace-nowrap">
              <Database className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">통합 설정 데이터</span>
              <span className="sm:hidden">세계관</span>
            </Link>
            <Link to="/schedule" className="flex items-center gap-1 px-2 sm:px-3 py-2 rounded-md hover:bg-slate-800 transition-colors whitespace-nowrap">
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
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
      
      <ScrollRestoration />
    </div>
  );
}
