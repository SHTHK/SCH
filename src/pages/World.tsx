import { worldSettings } from "../data";
import { Shield } from "lucide-react";

export function World() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="border-b-2 border-slate-200 pb-6 mb-8">
        <h1 className="text-3xl font-extrabold text-slate-900 flex items-center gap-3">
          <Shield className="w-8 h-8 text-indigo-600" />
          세계관 설정
        </h1>
        <p className="mt-2 text-slate-500">스토리의 배경이 되는 설정입니다.</p>
      </div>

      <div className="grid gap-6">
        {worldSettings.map((section, idx) => (
          <div key={idx} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="w-2 h-6 bg-amber-400 rounded-full block"></span>
              {section.title}
            </h2>
            <ul className="space-y-3 text-slate-600">
              {section.content.map((text, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-amber-400 mt-1.5">•</span>
                  <span className="leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
