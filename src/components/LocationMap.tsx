import React, { useState } from 'react';
import { 
  BedDouble, 
  Utensils, 
  Camera, 
  MapPin, 
  Compass, 
  Map, 
  X
} from 'lucide-react';

interface Location {
  id: number;
  name: string;
  type: string;
  x: number;
  y: number;
  price?: string;
  description?: string;
  mapUrl?: string;
}

interface LocationMapProps {
  title: string;
  locations: Location[];
  colors: {
    green: string;
    yellow: string;
    terracotta: string;
    beige: string;
    charcoal: string;
  };
  onOpenMap: (query: string) => void;
}

const LocationMap: React.FC<LocationMapProps> = ({ title, locations, colors, onOpenMap }) => {
  const [filter, setFilter] = useState('all');
  const [selectedLoc, setSelectedLoc] = useState<Location | null>(null);

  const filteredLocations = filter === 'all' 
    ? locations 
    : locations.filter(l => l.type === filter);

  const getTypeColor = (type: string) => {
    switch(type) {
      case 'hotels': return colors.green;
      case 'restaurants': return colors.terracotta;
      case 'activities': return colors.yellow;
      default: return colors.charcoal;
    }
  };

  const getTypeIcon = (type: string) => {
    switch(type) {
      case 'hotels': return <BedDouble size={14} className="text-white" />;
      case 'restaurants': return <Utensils size={14} className="text-white" />;
      case 'activities': return <Camera size={14} className="text-white" />;
      default: return <MapPin size={14} className="text-white" />;
    }
  };

  return (
    <div className="mb-16">
      <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
        <span className="w-9 h-9 flex items-center justify-center rounded-full text-white text-sm font-black shrink-0" style={{ backgroundColor: colors.charcoal }}>
          <Map size={16} />
        </span> 
        {title}
      </h3>
      
      <div className="bg-white border border-gray-100 rounded-[2.5rem] p-6 shadow-sm overflow-hidden relative">
        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-6 relative z-20">
          <button 
            onClick={() => {setFilter('all'); setSelectedLoc(null);}}
            className={`px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all ${filter === 'all' ? 'bg-[#292926] text-white shadow-md' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}
          >
            All
          </button>
          <button 
            onClick={() => {setFilter('hotels'); setSelectedLoc(null);}}
            className={`px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all flex items-center gap-2 ${filter === 'hotels' ? 'text-white shadow-md' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}
            style={{ backgroundColor: filter === 'hotels' ? colors.green : '' }}
          >
            <BedDouble size={14} /> Hotels
          </button>
          <button 
            onClick={() => {setFilter('restaurants'); setSelectedLoc(null);}}
            className={`px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all flex items-center gap-2 ${filter === 'restaurants' ? 'text-white shadow-md' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}
            style={{ backgroundColor: filter === 'restaurants' ? colors.terracotta : '' }}
          >
            <Utensils size={14} /> Food
          </button>
          <button 
            onClick={() => {setFilter('activities'); setSelectedLoc(null);}}
            className={`px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all flex items-center gap-2 ${filter === 'activities' ? 'text-white shadow-md' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}
            style={{ backgroundColor: filter === 'activities' ? colors.yellow : '' }}
          >
            <Camera size={14} /> Activities
          </button>
        </div>

        {/* Map Area */}
        <div className="relative w-full h-[400px] md:h-[500px] bg-[#F8FAFC] rounded-[2rem] overflow-hidden border border-gray-200">
          {/* Abstract Map Background Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-transparent to-emerald-50/40 mix-blend-multiply pointer-events-none"></div>
          
          {/* Pins */}
          {filteredLocations.map(loc => (
            <div 
              key={loc.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
              style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
            >
              <button 
                onClick={() => setSelectedLoc(loc)}
                className={`w-8 h-8 rounded-full flex items-center justify-center shadow-lg border-2 border-white transition-transform hover:scale-125 ${selectedLoc?.id === loc.id ? 'scale-125 z-30 ring-4 ring-white/50' : 'scale-100 z-10'}`}
                style={{ backgroundColor: getTypeColor(loc.type) }}
              >
                {getTypeIcon(loc.type)}
              </button>
              
              {/* Selected Tooltip */}
              {selectedLoc?.id === loc.id && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 p-5 z-40 animate-in fade-in zoom-in duration-200">
                  <button 
                    onClick={(e) => { e.stopPropagation(); setSelectedLoc(null); }}
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-800"
                  >
                    <X size={16} />
                  </button>
                  <span className="text-[10px] font-black uppercase tracking-widest block mb-1.5" style={{ color: getTypeColor(loc.type) }}>
                    {loc.type}
                  </span>
                  <h5 className="font-extrabold text-sm text-[#292926] leading-tight mb-1 pr-4">{loc.name}</h5>
                  {loc.price && <p className="text-xs font-bold text-gray-700 mb-1">{loc.price}</p>}
                  {loc.description && <p className="text-xs text-gray-500 mb-2">{loc.description}</p>}
                  <button 
                    onClick={(e) => { e.stopPropagation(); onOpenMap(loc.mapUrl || loc.name + ' Sri Lanka'); }} 
                    className="flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors w-full text-left"
                  >
                    <MapPin size={14}/> View on Map
                  </button>
                </div>
              )}
            </div>
          ))}
          
          {/* Compass Rose */}
          <div className="absolute bottom-6 right-6 w-10 h-10 bg-white/80 backdrop-blur rounded-full shadow-sm border border-gray-200 flex items-center justify-center text-gray-400 pointer-events-none">
            <Compass size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;
