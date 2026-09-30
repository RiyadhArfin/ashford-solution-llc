import React from 'react';
import { 
  Scissors, 
  Trees, 
  Wind, 
  Layers, 
  SunMedium, 
  Building2, 
  Check, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'St. Augustine & Bermuda Turf Mowing',
    description: 'Scheduled residential and commercial turf care for Houston warm-season grasses. Razor-sharp pavement edging, string-trimming, and clean blow-off.',
    features: ['St. Augustine & Bermuda cut height', 'Laser-straight walkway edging', 'Clipping bagging or mulching', 'Weekly or bi-weekly scheduling'],
    image: '/images/lawn_mowing.jpg'
  },
  {
    icon: Trees,
    title: 'Texas Native & Flower Bed Planting',
    description: 'Enhancing Houston curb appeal with drought-hardy Texas native perennials, lantana, hibiscus, ornamental grasses, and decorative river rocks.',
    features: ['Custom Texas landscape layout', 'Gulf Coast climate-adapted flora', 'Soil conditioning & fertilization', 'Weed barrier installation'],
    image: '/images/landscape_planting.jpg'
  },
  {
    icon: Layers,
    title: 'Premium Pine Bark & Hardwood Mulching',
    description: 'Deep trench perimeter bed edging and fresh shredded dark hardwood or pine bark mulch application to retain moisture against Texas summer heat.',
    features: ['Black, brown & Texas pine bark', 'Deep perimeter trench edging', 'Pre-emergent weed suppression', 'Root temperature moderation'],
    image: '/images/mulch_bed.jpg'
  },
  {
    icon: Wind,
    title: 'Storm Debris & Seasonal Yard Cleanups',
    description: 'Comprehensive Houston property cleanouts. Rapid post-storm branch pickup, power leaf removal, yard dethatching, and spring/fall rejuvenation.',
    features: ['Complete leaf & branch haul away', 'Storm recovery yard cleanout', 'Lawn aeration & soil prep', 'Seasonal grounds revitalization'],
    image: '/images/seasonal_cleanup.jpg'
  },
  {
    icon: SunMedium,
    title: 'Palm, Crepe Myrtle & Shrub Sculpting',
    description: 'Artistic and horticultural pruning of Houston palm trees, crepe myrtles, privacy hedges, and ornamental shrubs for lush, balanced growth.',
    features: ['Crepe myrtle aesthetic pruning', 'Palm frond cleanup & trimming', 'Privacy hedge shaping', 'Dead foliage elimination'],
    image: '/images/hedge_trimming.jpg'
  },
  {
    icon: Building2,
    title: 'Commercial & Multi-Family Grounds',
    description: 'Contract groundskeeping for Houston office parks, commercial retail centers, multi-family communities, and HOA residential complexes.',
    features: ['Houston city code compliance', 'Rapid turnaround maintenance fleet', 'High-traffic curb presentation', 'Itemized commercial billing'],
    image: '/images/commercial_grounds.jpg'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white bg-pattern-grid-ashford relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tealpro-100 text-tealpro-900 text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-tealpro-600" />
            Houston Landscaping Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Complete Grounds Preservation & Landscape Solutions
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We focus exclusively on exceptional landscaping. Our Houston crews deploy commercial mowers, precision edgers, and expert groundskeeping practices.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-soft shadow-hover flex flex-col group"
              >
                {/* Image header */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ashford-950/70 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-ashford-950 text-cyanpro-400 group-hover:bg-tealpro-600 group-hover:text-white flex items-center justify-center shadow-md transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-tealpro-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Bullet points */}
                  <div className="pt-3 border-t border-slate-100 space-y-2">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700">
                        <Check className="w-4 h-4 text-tealpro-600 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA link */}
                  <div className="pt-2">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-sm font-bold text-tealpro-700 group-hover:text-cyanpro-700 transition-colors"
                    >
                      <span>Inquire about this service</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Callout */}
        <div className="mt-16 rounded-3xl bg-ashford-950 text-white p-8 sm:p-10 relative overflow-hidden shadow-xl border border-ashford-800">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                Need a Tailored Commercial Grounds Contract in Houston?
              </h3>
              <p className="text-sm sm:text-base text-slate-300 max-w-xl">
                Whether you manage commercial real estate portfolios, HOA parks, or residential properties across Harris County, Ashford Solutions LLC delivers rapid quotes and dependable crews.
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-tealpro-600 to-cyanpro-600 hover:from-tealpro-700 hover:to-cyanpro-700 text-white px-6 py-3.5 rounded-xl font-extrabold text-sm transition-colors shadow-md shadow-teal-600/20"
              >
                <span>Request Custom Quote</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          {/* Decorative background shape */}
          <div className="absolute right-0 bottom-0 w-80 h-80 bg-tealpro-500/10 rounded-full blur-2xl pointer-events-none -mr-20 -mb-20" />
        </div>

      </div>
    </section>
  );
}
