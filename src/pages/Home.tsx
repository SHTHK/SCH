import { Link } from "react-router-dom";
import { Users, Database, Calendar, GraduationCap } from "lucide-react";

export function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] gap-8">
      <div className="text-center space-y-4 max-w-2xl">
        <div className="mx-auto w-20 h-20 bg-slate-900 rounded-2xl flex items-center justify-center shadow-lg mb-6">
          <GraduationCap className="w-12 h-12 text-amber-400" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          센트럴 기숙 학원 통합 인트라넷
        </h1>
        <p className="text-lg text-slate-600">
          학원 교직원 및 학생 열람용 설정 데이터베이스입니다. 열람하고자 하는 카테고리를 선택해주십시오.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mt-8">
        <Link
          to="/characters"
          className="group relative flex flex-col items-center p-8 bg-white rounded-2xl border-2 border-slate-200 shadow-sm hover:border-amber-400 hover:shadow-xl hover:-translate-y-1 transition-all"
        >
          <div className="absolute top-4 right-4 text-slate-300 group-hover:text-amber-400 transition-colors">
            <Users className="w-6 h-6" />
          </div>
          <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Users className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">캐릭터 설정</h2>
          <p className="text-center text-slate-500">
            학생 및 교직원의 인적 사항, 스탯 기록 및 개인 프로필을 열람합니다.
          </p>
        </Link>

        <Link
          to="/world"
          className="group relative flex flex-col items-center p-8 bg-white rounded-2xl border-2 border-slate-200 shadow-sm hover:border-amber-400 hover:shadow-xl hover:-translate-y-1 transition-all"
        >
          <div className="absolute top-4 right-4 text-slate-300 group-hover:text-amber-400 transition-colors">
            <Database className="w-6 h-6" />
          </div>
          <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Database className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">세계관 설정</h2>
          <p className="text-center text-slate-500">
            센트럴 학원 및 배경 세계관의 기본 지침 및 설정 자료를 열람합니다.
          </p>
        </Link>

        <Link
          to="/schedule"
          className="group relative flex flex-col items-center p-8 bg-white rounded-2xl border-2 border-slate-200 shadow-sm hover:border-amber-400 hover:shadow-xl hover:-translate-y-1 transition-all"
        >
          <div className="absolute top-4 right-4 text-slate-300 group-hover:text-amber-400 transition-colors">
            <Calendar className="w-6 h-6" />
          </div>
          <div className="w-16 h-16 bg-rose-50 text-rose-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Calendar className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">학원 일정</h2>
          <p className="text-center text-slate-500">
            연간 진행되는 주요 학사 일정과 행사, 평가 등의 항목을 열람합니다.
          </p>
        </Link>
      </div>
    </div>
  );
}
