import { useParams, Link } from "react-router-dom";
import { characters } from "../data";
import { ArrowLeft, Shield, Sword, Zap, BookOpen, AlertTriangle } from "lucide-react";
import { useEffect, useState } from "react";

export function CharacterDetail() {
  const { id } = useParams();
  const character = characters.find((c) => c.id === id);
  const [showSecret, setShowSecret] = useState(false);

  // Reset secret state when character changes
  useEffect(() => {
    setShowSecret(false);
  }, [id]);

  if (!character) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-slate-800">해당 인물을 찾을 수 없습니다.</h2>
        <Link to="/characters" className="text-blue-600 hover:underline mt-4 inline-block">
          명부로 돌아가기
        </Link>
      </div>
    );
  }

  const statTotal = character.physical + character.defense + character.magic;
  
  // Calculate appropriate grade based on stat total and individual stats
  let grade = "C";
  let gradeColor = "text-slate-500";
  let gradeBg = "bg-slate-100";
  
  if (statTotal >= 120 || Math.max(character.physical, character.defense, character.magic) >= 60) {
    grade = "S";
    gradeColor = "text-amber-600";
    gradeBg = "bg-amber-100";
  } else if (statTotal >= 100 || Math.max(character.physical, character.defense, character.magic) >= 50) {
    grade = "A";
    gradeColor = "text-red-600";
    gradeBg = "bg-red-100";
  } else if (statTotal >= 80 || Math.max(character.physical, character.defense, character.magic) >= 40) {
    grade = "B";
    gradeColor = "text-blue-600";
    gradeBg = "bg-blue-100";
  }

  const StatBar = ({ label, value, icon: Icon, color }: { label: string, value: number, icon: any, color: string }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <div className="flex items-center gap-2 text-sm font-bold text-slate-700">
          <Icon className={`w-4 h-4 ${color}`} />
          {label}
        </div>
        <span className="text-sm font-bold text-slate-900">{value}</span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-2.5">
        <div 
          className={`h-2.5 rounded-full ${color.replace('text-', 'bg-')}`} 
          style={{ width: `${Math.min(100, (value / 100) * 100)}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Link 
        to="/characters" 
        className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        명부로 돌아가기
      </Link>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col md:flex-row">
        {/* Profile Image (2:3 aspect ratio area) */}
        <div className="w-full md:w-2/5 lg:w-1/3 bg-slate-100 border-b md:border-b-0 md:border-r border-slate-200">
          <div className="w-full aspect-[2/3] relative">
            <img
              src={character.profileImageUrl ? `${import.meta.env.BASE_URL}${character.profileImageUrl.replace(/^\//, '')}` : `https://placehold.co/800x1200/1e293b/ffffff?text=${encodeURIComponent(character.name)}`}
              alt={character.name}
              className="w-full h-full object-cover"
            />
            
            {/* Group Badge */}
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-slate-900/80 text-white text-xs font-bold rounded-full backdrop-blur-sm">
                {character.group}
              </span>
            </div>
          </div>
        </div>

        {/* Info Content */}
        <div className="w-full md:w-3/5 lg:w-2/3 p-6 md:p-8 flex flex-col">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900">{character.name}</h1>
              <p className="text-lg text-blue-600 font-bold mt-1">{character.className}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
              <span className="text-xs text-slate-500 block mb-1">성별</span>
              <span className="font-semibold text-slate-800">{character.gender}</span>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
              <span className="text-xs text-slate-500 block mb-1">나이</span>
              <span className="font-semibold text-slate-800">{character.age}</span>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 col-span-2">
              <span className="text-xs text-slate-500 block mb-1">종족</span>
              <span className="font-semibold text-slate-800">{character.race}</span>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-slate-400" />
              상세 정보
            </h3>
            <div className="prose prose-slate prose-sm max-w-none">
              <p className="whitespace-pre-wrap text-slate-600 leading-relaxed">
                {character.info}
              </p>
            </div>
          </div>

          {character.secretInfo && (
            <div className="mb-8">
              {!showSecret ? (
                <button 
                  onClick={() => setShowSecret(true)}
                  className="w-full py-3 border-2 border-dashed border-slate-300 rounded-xl text-slate-500 font-bold hover:border-red-300 hover:text-red-500 hover:bg-red-50 transition-colors flex items-center justify-center gap-2"
                >
                  <AlertTriangle className="w-5 h-5" />
                  기밀 문서 열람 승인 요청
                </button>
              ) : (
                <div className="bg-slate-900 text-slate-300 p-5 rounded-xl border border-slate-800 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-2 text-xs font-mono text-red-500 opacity-50">TOP SECRET</div>
                  <h3 className="text-red-400 font-bold mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    기밀 인적 사항
                  </h3>
                  <p className="whitespace-pre-wrap text-sm leading-relaxed">
                    {character.secretInfo}
                  </p>
                </div>
              )}
            </div>
          )}

          <div className="mt-auto pt-6 border-t border-slate-200">
            <h3 className="text-lg font-bold text-slate-800 mb-4">시뮬레이션 스탯</h3>
            <StatBar label="물리력" value={character.physical} icon={Sword} color="text-red-500" />
            <StatBar label="방어력" value={character.defense} icon={Shield} color="text-blue-500" />
            <StatBar label="마력" value={character.magic} icon={Zap} color="text-amber-500" />
            
            <div className="flex justify-between items-center mt-6 p-4 bg-slate-50 rounded-xl border border-slate-200">
              <span className="font-bold text-slate-600">스탯 총합</span>
              <span className="text-2xl font-black text-slate-900">{statTotal}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
