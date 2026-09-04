import { Calendar } from "lucide-react";
import { schedules } from "../data";

export function Schedule() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="border-b-2 border-slate-200 pb-6 mb-8">
        <h1 className="text-3xl font-extrabold text-slate-900 flex items-center gap-3">
          <Calendar className="w-8 h-8 text-rose-600" />
          연간 학사 일정
        </h1>
        <p className="mt-2 text-slate-500">센트럴 기숙 학원의 정규 일정표입니다.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="divide-y divide-slate-100">
          {schedules.map((schedule, idx) => (
            <div key={idx} className="p-6 md:p-8 flex flex-col md:flex-row gap-4 md:gap-8 hover:bg-slate-50 transition-colors">
              <div className="md:w-1/4 flex-shrink-0">
                <span className="inline-block px-3 py-1 bg-rose-50 text-rose-700 font-bold text-sm rounded-full border border-rose-100">
                  {schedule.date}
                </span>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{schedule.event}</h3>
                <p className="text-slate-600 leading-relaxed">{schedule.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
