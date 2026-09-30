import React from 'react';
import { MapPin, Phone, ShieldCheck, CheckCircle2 } from 'lucide-react';

const regions = [
  {
    name: 'Galleria, Uptown & River Oaks',
    neighborhoods: 'Fountain View Corridor, Post Oak, Westheimer, Tanglewood',
    time: 'Immediate Local Headquarters Route'
  },
  {
    name: 'Memorial & Spring Branch',
    neighborhoods: 'Memorial Villages, Energy Corridor, CityCentre, Hedwig Village',
    time: 'Daily Commercial & Residential Crew'
  },
  {
    name: 'Katy & West Houston',
    neighborhoods: 'Cinco Ranch, Grand Lakes, Elyson, Firethorne Communities',
    time: 'High-Volume Scheduled Service'
  },
  {
    name: 'Sugar Land & Missouri City',
    neighborhoods: 'First Colony, Sweetwater, Riverstone, Sienna Plantation',
    time: 'Recurring Route Maintenance'
  },
  {
    name: 'The Woodlands & Spring',
    neighborhoods: 'Creekside Park, Sterling Ridge, Carlton Woods, Grogans Mill',
    time: 'Weekly Dedicated HOA Route'
  },
  {
    name: 'Pearland & Clear Lake',
    neighborhoods: 'Shadow Creek Ranch, Silverlake, Baybrook, South Houston',
    time: 'Fast Mobile Crew Dispatch'
  }
];

export default function ServiceArea() {
  return (
    <section id="service-area" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tealpro-100 text-tealpro-950 text-xs font-bold tracking-wider uppercase">
              Texas Service Coverage
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Proudly Serving Houston & Greater Texas Gulf Coast
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Headquartered at <strong>2401 Fountain View Dr. Ste 464, Houston, TX 77057</strong>, Ashford Solutions LLC deploys modern maintenance fleets daily across Harris County, Fort Bend County, and Montgomery County.
            </p>

            <div className="p-5 rounded-2xl bg-ashford-950 text-white space-y-3">
              <div className="flex items-center gap-2.5 text-cyanpro-400 font-bold text-sm">
                <MapPin className="w-4 h-4" />
                <span>Houston Headquarters</span>
              </div>
              <p className="text-xs text-slate-300">
                2401 Fountain View Dr. Ste 464, Houston, TX 77057
              </p>
              <div className="pt-2 flex items-center justify-between border-t border-ashford-800 text-xs text-slate-300">
                <span>Direct Client Line:</span>
                <a href="tel:8322631162" className="text-cyanpro-400 font-black hover:text-white transition-colors">
                  (832) 263-1162
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
              <ShieldCheck className="w-4 h-4 text-tealpro-600 shrink-0" />
              <span>Full compliance documentation for Houston commercial asset managers & HOAs.</span>
            </div>
          </div>

          {/* Right Region Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {regions.map((region, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm hover:border-tealpro-300 transition-colors space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-tealpro-600 shrink-0" />
                    <span>{region.name}</span>
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {region.neighborhoods}
                </p>
                <div className="pt-2 border-t border-slate-200/60 flex items-center gap-1 text-[11px] font-bold text-tealpro-700">
                  <CheckCircle2 className="w-3 h-3 text-tealpro-600" />
                  <span>{region.time}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
