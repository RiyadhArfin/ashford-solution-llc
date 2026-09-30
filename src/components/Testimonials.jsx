import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Ashford Solutions manages the grounds for our 120-unit corporate office park in Memorial. Their St. Augustine turf maintenance and seasonal mulching keep our curb appeal pristine year-round.",
    author: "Robert T.",
    role: "Commercial Portfolio Asset Director",
    location: "Houston, TX"
  },
  {
    quote: "Flawless edging and landscape bed care in Cinco Ranch. Their crew is courteous, highly efficient, and always provides detailed job completion reports for our HOA management team.",
    author: "Stephanie M.",
    role: "HOA Landscape Committee Chair",
    location: "Katy, TX"
  },
  {
    quote: "We needed emergency storm debris clearing and overgrown palm pruning at our commercial center near Galleria. Ashford mobilized a heavy-duty crew within hours.",
    author: "Brandon C.",
    role: "Facility Operations Manager",
    location: "Houston, TX"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-slate-50 bg-pattern-dots-ashford relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tealpro-100 text-tealpro-950 text-xs font-bold tracking-wider uppercase">
            Client Feedback
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Trusted by Houston Property Managers & HOA Boards
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-7 border border-slate-200 shadow-soft flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-tealpro-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="font-bold text-sm text-slate-900">{item.author}</div>
                <div className="text-xs text-tealpro-700 font-medium">{item.role}</div>
                <div className="text-[11px] text-slate-400">{item.location}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
