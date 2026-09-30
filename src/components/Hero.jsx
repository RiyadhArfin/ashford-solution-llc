import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, MapPin, Leaf, Award, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white bg-pattern-grid-ashford pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-slate-100">
      {/* Decorative ambient gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-tealpro-100/50 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyanpro-100/40 rounded-full blur-2xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-7">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-tealpro-50 border border-tealpro-200/90 text-tealpro-950 text-xs sm:text-sm font-bold tracking-wide">
              <span className="flex h-2 w-2 rounded-full bg-tealpro-500 animate-pulse"></span>
              <Leaf className="w-4 h-4 text-tealpro-600" />
              <span>Dedicated Texas Grounds & Landscaping • Houston, TX</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
              Superior Houston <span className="bg-gradient-to-r from-tealpro-600 to-cyanpro-600 bg-clip-text text-transparent">Landscaping & Grounds</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed">
              <strong>ASHFORD SOLUTIONS LLC</strong> provides dedicated, high-standard residential and commercial landscaping across Houston, TX & Surrounding Areas. Trusted for speed, warm-season turf care, and pristine property presentation.
            </p>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {[
                'Houston & Galleria Fast Dispatch',
                'St. Augustine & Bermuda Turf Mowing',
                'Texas Native Flora & Perennial Beds',
                'Asset Managers & Commercial Compliance'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-slate-700 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-tealpro-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-tealpro-600 to-cyanpro-600 hover:from-tealpro-700 hover:to-cyanpro-700 text-white px-7 py-4 rounded-xl font-black text-base shadow-lg shadow-teal-600/25 transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Request Free Estimate</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:8322631162"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 px-7 py-4 rounded-xl font-bold text-base transition-all duration-200 shadow-sm"
              >
                <Phone className="w-5 h-5 text-tealpro-600" />
                <span>Call (832) 263-1162</span>
              </a>
            </div>

            {/* Quick Contact snippet */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-500 border-t border-slate-200/80">
              <span className="flex items-center gap-1 text-slate-700 font-medium">
                <MapPin className="w-3.5 h-3.5 text-tealpro-600" />
                2401 Fountain View Dr. Ste 464, Houston, TX 77057
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-slate-700 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-tealpro-600" />
                Licensed & Insured Texas Contractor
              </span>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                <img
                  src="/images/hero_landscape.jpg"
                  alt="Houston Landscaping & Turf Care by Ashford Solutions LLC"
                  className="w-full h-[440px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-ashford-950/85 via-transparent to-transparent" />

                {/* Bottom card content */}
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-ashford-950/90 backdrop-blur-sm text-xs font-bold text-cyanpro-400 border border-ashford-800">
                    <Sparkles className="w-3.5 h-3.5 text-cyanpro-400" />
                    <span>Houston Grounds Excellence</span>
                  </div>
                  <h3 className="text-xl font-bold tracking-tight">Precision Turf & Texas Gulf Landscaping</h3>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    Custom grounds preservation, warm-season turf health, and crisp pine bark mulch beds built for Greater Houston conditions.
                  </p>
                </div>
              </div>

              {/* Floating Badge 1 */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-tealpro-50 flex items-center justify-center text-tealpro-600 font-black text-sm">
                  100%
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Speed & Compliance</div>
                  <div className="text-[11px] text-slate-500">Houston Asset Care</div>
                </div>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-tealpro-100 flex items-center justify-center text-tealpro-700 font-bold">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Greater Houston Metro</div>
                  <div className="text-[11px] text-slate-500">Quick Local Fleet</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
