import { Link } from "react-router-dom";
import { characters } from "../data";
import { Users } from "lucide-react";

export function Characters() {
  const groups = ["엘리트반", "상급반", "중급반", "초급반", "교사"];

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <div className="border-b-2 border-slate-200 pb-6">
        <h1 className="text-3xl font-extrabold text-slate-900 flex items-center gap-3">
          <Users className="w-8 h-8 text-blue-600" />
          학생 및 교직원 명부
        </h1>
        <p className="mt-2 text-slate-500">인물 프로필을 선택하여 상세 인적 사항을 열람하십시오.</p>
      </div>

      <div className="space-y-12">
        {groups.map((groupName) => {
          const groupChars = characters.filter((c) => c.group === groupName);
          if (groupChars.length === 0) return null;

          return (
            <section key={groupName} className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2 border-l-4 border-amber-400 pl-3">
                {groupName}
              </h2>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {groupChars.map((char) => (
                  <Link
                    key={char.id}
                    to={`/characters/${char.id}`}
                    className="group flex flex-col bg-white rounded-xl shadow-sm hover:shadow-md border border-slate-200 overflow-hidden transition-all hover:-translate-y-1"
                  >
                    <div className="w-full aspect-square bg-slate-100 overflow-hidden relative">
                      <img
                        src={char.imageUrl || `https://placehold.co/400x400/1e293b/ffffff?text=${encodeURIComponent(char.name)}`}
                        alt={char.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-3 text-center">
                      <h3 className="font-bold text-slate-900">{char.name}</h3>
                      <p className="text-xs text-slate-500 mt-1">{char.className}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
