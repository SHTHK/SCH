import { useParams, useNavigate } from "react-router-dom";
import { characters } from "../data";
import { ArrowLeft, Lock, Unlock } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";

function StatBar({ label, value }: { label: string; value: number }) {
  // 100을 최대치로 스탯에 따라 그래프가 바뀌고, 각 단계마다 색깔 다르게
  let colorClass = "bg-rose-500";
  if (value > 20 && value <= 40) colorClass = "bg-orange-500";
  else if (value > 40 && value <= 60) colorClass = "bg-amber-500";
  else if (value > 60 && value <= 80) colorClass = "bg-emerald-500";
  else if (value > 80) colorClass = "bg-indigo-500";

  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm font-medium">
        <span className="text-slate-700">{label}</span>
        <span className="text-slate-900">{value} / 100</span>
      </div>
      <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden">
        <div
          className={cn("h-full transition-all duration-1000 ease-out", colorClass)}
          style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
        />
      </div>
    </div>
  );
}

export function CharacterDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showSecret, setShowSecret] = useState(false);

  const character = characters.find((c) => c.id === id);

  if (!character) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-slate-800">문서를 찾을 수 없습니다.</h2>
        <button
          onClick={() => navigate("/characters")}
          className="mt-4 px-4 py-2 bg-slate-900 text-white rounded-md hover:bg-slate-800"
        >
          돌아가기
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="font-medium">명부로 돌아가기</span>
      </button>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col md:flex-row">
        {/* Profile Image - 2:3 Aspect Ratio */}
        <div className="w-full md:w-2/5 lg:w-1/3 bg-slate-100 border-b md:border-b-0 md:border-r border-slate-200">
          <div className="w-full aspect-[2/3] relative">
            <img
              src={character.imageUrl || `https://placehold.co/800x1200/1e293b/ffffff?text=${encodeURIComponent(character.name)}`}
              alt={character.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Info Section */}
        <div className="w-full md:w-3/5 lg:w-2/3 p-6 md:p-8 flex flex-col">
          <div className="mb-6 flex justify-between items-start">
            <div>
              <p className="text-amber-600 font-bold text-sm tracking-wider uppercase mb-1">
                {character.group}
              </p>
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                {character.name}
              </h1>
            </div>
            <div className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-md text-xs font-bold text-slate-500 tracking-widest">
              ID: {character.id.toUpperCase()}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-8 text-sm md:text-base">
            <div>
              <span className="block text-slate-500 text-xs mb-1">성별</span>
              <span className="font-medium text-slate-900">{character.gender}</span>
            </div>
            <div>
              <span className="block text-slate-500 text-xs mb-1">나이</span>
              <span className="font-medium text-slate-900">{character.age}</span>
            </div>
            <div>
              <span className="block text-slate-500 text-xs mb-1">종족</span>
              <span className="font-medium text-slate-900">{character.race}</span>
            </div>
            <div>
              <span className="block text-slate-500 text-xs mb-1">클래스</span>
              <span className="font-medium text-slate-900">{character.className}</span>
            </div>
          </div>

          <div className="mb-8">
            <span className="block text-slate-500 text-xs mb-1">상세 정보</span>
            <p className="font-medium text-slate-900 leading-relaxed bg-slate-50 p-4 rounded-lg border border-slate-100 whitespace-pre-wrap">
              {character.info}
            </p>
          </div>

          <div className="mt-auto pt-6 border-t border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              시뮬레이션 스탯 평가
            </h3>
            <div className="space-y-4">
              <StatBar label="물리력 (Physical)" value={character.physical} />
              <StatBar label="방어력 (Defense)" value={character.defense} />
              <StatBar label="마력 (Magic)" value={character.magic} />
            </div>
          </div>
        </div>
      </div>

      {/* Secret Info Tab */}
      {character.secretInfo && (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <button
            onClick={() => setShowSecret(!showSecret)}
            className={cn(
              "w-full px-6 py-4 flex items-center justify-between font-bold text-left transition-colors",
              showSecret ? "bg-rose-50 text-rose-900 border-b border-rose-100" : "bg-slate-50 text-slate-700 hover:bg-slate-100"
            )}
          >
            <span className="flex items-center gap-2">
              {showSecret ? <Unlock className="w-5 h-5 text-rose-600" /> : <Lock className="w-5 h-5" />}
              [기밀 보안 문서] 추가 정보 열람
            </span>
            <span className="text-xs font-normal px-2 py-1 bg-white rounded border border-slate-200 shadow-sm">
              {showSecret ? "보안 해제됨" : "클릭하여 해제"}
            </span>
          </button>
          
          {showSecret && (
            <div className="p-6 bg-white animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="border-l-4 border-rose-500 pl-4 py-1">
                <p className="text-slate-800 leading-relaxed font-medium">
                  {character.secretInfo}
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
