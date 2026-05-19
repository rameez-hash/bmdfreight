'use client';

import { useState, useRef, FormEvent } from 'react';
import { MapPin, Car, User, ArrowRight, ArrowLeft } from 'lucide-react';

const vehicleMakes = {
  'Acura': ['ILX', 'TLX', 'MDX', 'RDX', 'NSX', 'Integra'],
  'Audi': ['A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'Q3', 'Q5', 'Q7', 'Q8', 'e-tron', 'TT', 'R8'],
  'BMW': ['2 Series', '3 Series', '4 Series', '5 Series', '7 Series', 'X1', 'X3', 'X5', 'X7', 'Z4', 'M3', 'M5', 'i4', 'iX'],
  'Buick': ['Enclave', 'Encore', 'Encore GX', 'Envision'],
  'Cadillac': ['CT4', 'CT5', 'Escalade', 'XT4', 'XT5', 'XT6', 'Lyriq'],
  'Chevrolet': ['Malibu', 'Camaro', 'Corvette', 'Equinox', 'Traverse', 'Tahoe', 'Suburban', 'Silverado 1500', 'Colorado', 'Blazer', 'Trax', 'Bolt EV'],
  'Chrysler': ['300', 'Pacifica', 'Voyager'],
  'Dodge': ['Charger', 'Challenger', 'Durango', 'Hornet'],
  'Ford': ['Mustang', 'Escape', 'Edge', 'Explorer', 'Expedition', 'F-150', 'F-250', 'Ranger', 'Bronco', 'Bronco Sport', 'Maverick'],
  'GMC': ['Terrain', 'Acadia', 'Yukon', 'Sierra 1500', 'Sierra 2500', 'Canyon'],
  'Honda': ['Civic', 'Accord', 'HR-V', 'CR-V', 'Passport', 'Pilot', 'Odyssey', 'Ridgeline'],
  'Hyundai': ['Elantra', 'Sonata', 'Kona', 'Tucson', 'Santa Fe', 'Palisade', 'Ioniq 5', 'Ioniq 6'],
  'Infiniti': ['Q50', 'Q60', 'QX50', 'QX55', 'QX60', 'QX80'],
  'Jeep': ['Compass', 'Renegade', 'Cherokee', 'Grand Cherokee', 'Wrangler', 'Gladiator', 'Wagoneer'],
  'Kia': ['Forte', 'K5', 'Stinger', 'Soul', 'Seltos', 'Sportage', 'Sorento', 'Telluride', 'Carnival', 'EV6'],
  'Lexus': ['IS', 'ES', 'LS', 'RC', 'LC', 'UX', 'NX', 'RX', 'GX', 'LX'],
  'Lincoln': ['Corsair', 'Nautilus', 'Aviator', 'Navigator'],
  'Mazda': ['Mazda3', 'Mazda6', 'MX-5 Miata', 'CX-30', 'CX-5', 'CX-50', 'CX-9', 'CX-90'],
  'Mercedes-Benz': ['A-Class', 'C-Class', 'E-Class', 'S-Class', 'CLA', 'GLA', 'GLB', 'GLC', 'GLE', 'GLS', 'G-Class'],
  'Nissan': ['Sentra', 'Altima', 'Maxima', 'Z', 'Kicks', 'Rogue', 'Murano', 'Pathfinder', 'Armada', 'Frontier', 'Titan', 'Leaf'],
  'Ram': ['1500', '2500', '3500', 'ProMaster'],
  'Subaru': ['Impreza', 'Legacy', 'WRX', 'BRZ', 'Crosstrek', 'Forester', 'Outback', 'Ascent'],
  'Tesla': ['Model 3', 'Model S', 'Model X', 'Model Y', 'Cybertruck'],
  'Toyota': ['Corolla', 'Camry', 'Avalon', 'Prius', 'GR Supra', 'GR86', 'RAV4', 'Highlander', '4Runner', 'Sequoia', 'Tacoma', 'Tundra', 'Sienna'],
  'Volkswagen': ['Jetta', 'Passat', 'Arteon', 'Golf', 'GTI', 'Tiguan', 'Atlas', 'ID.4', 'Taos'],
  'Volvo': ['S60', 'S90', 'V60', 'V90', 'XC40', 'XC60', 'XC90'],
  'Alfa Romeo': ['Giulia', 'Stelvio', 'Tonale'],
  'Aston Martin': ['DB11', 'Vantage', 'DBX'],
  'Bentley': ['Continental GT', 'Flying Spur', 'Bentayga'],
  'Ferrari': ['Roma', 'Portofino', 'F8', '812', 'SF90', 'Purosangue'],
  'Fiat': ['500', '500X'],
  'Genesis': ['G70', 'G80', 'G90', 'GV70', 'GV80'],
  'Jaguar': ['XE', 'XF', 'F-Type', 'E-Pace', 'F-Pace', 'I-Pace'],
  'Lamborghini': ['Huracan', 'Urus', 'Revuelto'],
  'Land Rover': ['Defender', 'Discovery', 'Discovery Sport', 'Range Rover', 'Range Rover Sport', 'Range Rover Velar', 'Range Rover Evoque'],
  'Maserati': ['Ghibli', 'Quattroporte', 'Levante', 'MC20', 'Grecale'],
  'McLaren': ['GT', 'Artura', '720S', '765LT'],
  'Mini': ['Cooper', 'Clubman', 'Countryman'],
  'Mitsubishi': ['Mirage', 'Outlander', 'Outlander Sport', 'Eclipse Cross'],
  'Polestar': ['Polestar 2', 'Polestar 3'],
  'Porsche': ['911', '718 Boxster', '718 Cayman', 'Panamera', 'Cayenne', 'Macan', 'Taycan'],
  'Rivian': ['R1T', 'R1S'],
  'Rolls-Royce': ['Ghost', 'Phantom', 'Cullinan', 'Spectre'],
  'Other': ['Other Model']
};

const popularZips = [
  { zip: '10001', city: 'New York', state: 'NY' },
  { zip: '90210', city: 'Beverly Hills', state: 'CA' },
  { zip: '90001', city: 'Los Angeles', state: 'CA' },
  { zip: '60601', city: 'Chicago', state: 'IL' },
  { zip: '77001', city: 'Houston', state: 'TX' },
  { zip: '85001', city: 'Phoenix', state: 'AZ' },
  { zip: '19101', city: 'Philadelphia', state: 'PA' },
  { zip: '78201', city: 'San Antonio', state: 'TX' },
  { zip: '92101', city: 'San Diego', state: 'CA' },
  { zip: '75201', city: 'Dallas', state: 'TX' },
  { zip: '95101', city: 'San Jose', state: 'CA' },
  { zip: '78701', city: 'Austin', state: 'TX' },
  { zip: '32099', city: 'Jacksonville', state: 'FL' },
  { zip: '46201', city: 'Indianapolis', state: 'IN' },
  { zip: '94102', city: 'San Francisco', state: 'CA' },
  { zip: '43085', city: 'Columbus', state: 'OH' },
  { zip: '76101', city: 'Fort Worth', state: 'TX' },
  { zip: '28201', city: 'Charlotte', state: 'NC' },
  { zip: '98101', city: 'Seattle', state: 'WA' },
  { zip: '80201', city: 'Denver', state: 'CO' },
  { zip: '20001', city: 'Washington', state: 'DC' },
  { zip: '02101', city: 'Boston', state: 'MA' },
  { zip: '79901', city: 'El Paso', state: 'TX' },
  { zip: '37201', city: 'Nashville', state: 'TN' },
  { zip: '48201', city: 'Detroit', state: 'MI' },
  { zip: '97201', city: 'Portland', state: 'OR' },
  { zip: '73301', city: 'Oklahoma City', state: 'OK' },
  { zip: '89101', city: 'Las Vegas', state: 'NV' },
  { zip: '38101', city: 'Memphis', state: 'TN' },
  { zip: '33101', city: 'Miami', state: 'FL' },
  { zip: '30301', city: 'Atlanta', state: 'GA' },
  { zip: '21201', city: 'Baltimore', state: 'MD' },
  { zip: '53201', city: 'Milwaukee', state: 'WI' },
  { zip: '87101', city: 'Albuquerque', state: 'NM' },
  { zip: '85701', city: 'Tucson', state: 'AZ' },
  { zip: '93701', city: 'Fresno', state: 'CA' },
  { zip: '95814', city: 'Sacramento', state: 'CA' },
  { zip: '64101', city: 'Kansas City', state: 'MO' },
  { zip: '90802', city: 'Long Beach', state: 'CA' },
  { zip: '85201', city: 'Mesa', state: 'AZ' },
  { zip: '23219', city: 'Richmond', state: 'VA' },
  { zip: '68101', city: 'Omaha', state: 'NE' },
  { zip: '33601', city: 'Tampa', state: 'FL' },
  { zip: '32801', city: 'Orlando', state: 'FL' },
  { zip: '55401', city: 'Minneapolis', state: 'MN' },
];

export default function QuoteForm() {
  const [step, setStep] = useState(1);
  const [models, setModels] = useState<string[]>([]);
  const [originSuggestions, setOriginSuggestions] = useState<typeof popularZips>([]);
  const [destSuggestions, setDestSuggestions] = useState<typeof popularZips>([]);
  const [showOriginSuggestions, setShowOriginSuggestions] = useState(false);
  const [showDestSuggestions, setShowDestSuggestions] = useState(false);
  const originRef = useRef<HTMLDivElement>(null);
  const destRef = useRef<HTMLDivElement>(null);

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1950 + 2 }, (_, i) => currentYear + 1 - i);

  const handleMakeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const make = e.target.value;
    setModels(make && vehicleMakes[make as keyof typeof vehicleMakes] ? vehicleMakes[make as keyof typeof vehicleMakes] : []);
  };

  const handleZipInput = (value: string, setter: React.Dispatch<React.SetStateAction<typeof popularZips>>, showSetter: React.Dispatch<React.SetStateAction<boolean>>) => {
    const clean = value.replace(/\D/g, '');
    if (clean.length === 0) {
      setter([]);
      showSetter(false);
      return;
    }
    const matches = popularZips.filter(z => z.zip.startsWith(clean)).slice(0, 5);
    setter(matches);
    showSetter(matches.length > 0 && clean.length < 5);
  };

  const selectZip = (zip: { zip: string; city: string; state: string }, zipInputId: string, cityInputId: string, stateInputId: string, showSetter: React.Dispatch<React.SetStateAction<boolean>>) => {
    const zipInput = document.getElementById(zipInputId) as HTMLInputElement;
    const cityInput = document.getElementById(cityInputId) as HTMLInputElement;
    const stateInput = document.getElementById(stateInputId) as HTMLInputElement;
    if (zipInput) zipInput.value = zip.zip;
    if (cityInput) cityInput.value = zip.city;
    if (stateInput) stateInput.value = zip.state;
    showSetter(false);
  };

  const validateZip = async (zip: string, cityId: string, stateId: string) => {
    if (zip.length !== 5) return;
    try {
      const res = await fetch(`https://api.zippopotam.us/us/${zip}`);
      if (!res.ok) return;
      const data = await res.json();
      if (data.places?.length > 0) {
        const cityInput = document.getElementById(cityId) as HTMLInputElement;
        const stateInput = document.getElementById(stateId) as HTMLInputElement;
        if (cityInput) cityInput.value = data.places[0]['place name'];
        if (stateInput) stateInput.value = data.places[0]['state abbreviation'];
      }
    } catch { /* ignore */ }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('Quote request submitted! Our team will contact you shortly.');
  };

  return (
    <form onSubmit={handleSubmit} className="form-dark rounded-xl shadow-2xl p-6 lg:p-8 backdrop-blur-sm">
      {/* Progress Bar */}
      <div className="flex items-center justify-between mb-8 relative">
        <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-white/20 -translate-y-1/2"></div>
        <div className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${step >= 1 ? 'bg-[#ffac33] text-white' : 'bg-slate-700 text-slate-400'}`}>1</div>
        <div className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${step >= 2 ? 'bg-[#ffac33] text-white' : 'bg-slate-700 text-slate-400'}`}>2</div>
        <div className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${step >= 3 ? 'bg-[#ffac33] text-white' : 'bg-slate-700 text-slate-400'}`}>3</div>
      </div>

      {/* Step 1: Route Details */}
      <div className={`step ${step === 1 ? 'active' : ''}`}>
        <h4 className="text-lg font-bold mb-6 flex items-center gap-2 text-white">
          <MapPin className="w-5 h-5 text-[#ffac33]" /> Route Details
        </h4>
        
        {/* Pickup Location */}
        <div className="mb-6">
          <label className="form-label block text-xs font-medium mb-3 text-white/60 uppercase tracking-wider">Pickup Location</label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="relative" ref={originRef}>
              <label className="form-label block text-sm font-medium mb-1 text-white/80">ZIP Code <span className="text-red-400">*</span></label>
              <input
                type="text"
                id="origin_postal_code"
                name="origin_postal_code"
                className="form-input w-full px-3 py-2.5 rounded-lg outline-none transition-all text-sm"
                placeholder="e.g. 90210"
                maxLength={5}
                pattern="[0-9]{5}"
                inputMode="numeric"
                autoComplete="off"
                onChange={(e) => handleZipInput(e.target.value, setOriginSuggestions, setShowOriginSuggestions)}
                onBlur={() => { const v = (document.getElementById('origin_postal_code') as HTMLInputElement)?.value; if (v) validateZip(v, 'origin_city', 'origin_state'); }}
                required
              />
              {showOriginSuggestions && originSuggestions.length > 0 && (
                <div className="zip-suggestions show">
                  {originSuggestions.map(z => (
                    <div key={z.zip} className="zip-suggestion-item" onMouseDown={() => selectZip(z, 'origin_postal_code', 'origin_city', 'origin_state', setShowOriginSuggestions)}>
                      <span className="zip-code">{z.zip}</span>
                      <span className="zip-location">{z.city}, {z.state}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div>
              <label className="form-label block text-sm font-medium mb-1 text-white/80">City <span className="text-red-400">*</span></label>
              <input type="text" id="origin_city" name="origin_city" className="form-input w-full px-3 py-2.5 rounded-lg text-sm bg-white/5" placeholder="City" readOnly required />
            </div>
            <div>
              <label className="form-label block text-sm font-medium mb-1 text-white/80">State <span className="text-red-400">*</span></label>
              <input type="text" id="origin_state" name="origin_state" className="form-input w-full px-3 py-2.5 rounded-lg text-sm bg-white/5" placeholder="State" maxLength={2} readOnly required />
            </div>
          </div>
        </div>

        {/* Delivery Location */}
        <div className="mb-6">
          <label className="form-label block text-xs font-medium mb-3 text-white/60 uppercase tracking-wider">Delivery Location</label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="relative" ref={destRef}>
              <label className="form-label block text-sm font-medium mb-1 text-white/80">ZIP Code <span className="text-red-400">*</span></label>
              <input
                type="text"
                id="destination_postal_code"
                name="destination_postal_code"
                className="form-input w-full px-3 py-2.5 rounded-lg outline-none transition-all text-sm"
                placeholder="e.g. 10001"
                maxLength={5}
                pattern="[0-9]{5}"
                inputMode="numeric"
                autoComplete="off"
                onChange={(e) => handleZipInput(e.target.value, setDestSuggestions, setShowDestSuggestions)}
                onBlur={() => { const v = (document.getElementById('destination_postal_code') as HTMLInputElement)?.value; if (v) validateZip(v, 'destination_city', 'destination_state'); }}
                required
              />
              {showDestSuggestions && destSuggestions.length > 0 && (
                <div className="zip-suggestions show">
                  {destSuggestions.map(z => (
                    <div key={z.zip} className="zip-suggestion-item" onMouseDown={() => selectZip(z, 'destination_postal_code', 'destination_city', 'destination_state', setShowDestSuggestions)}>
                      <span className="zip-code">{z.zip}</span>
                      <span className="zip-location">{z.city}, {z.state}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div>
              <label className="form-label block text-sm font-medium mb-1 text-white/80">City <span className="text-red-400">*</span></label>
              <input type="text" id="destination_city" name="destination_city" className="form-input w-full px-3 py-2.5 rounded-lg text-sm bg-white/5" placeholder="City" readOnly required />
            </div>
            <div>
              <label className="form-label block text-sm font-medium mb-1 text-white/80">State <span className="text-red-400">*</span></label>
              <input type="text" id="destination_state" name="destination_state" className="form-input w-full px-3 py-2.5 rounded-lg text-sm bg-white/5" placeholder="State" maxLength={2} readOnly required />
            </div>
          </div>
        </div>

        {/* Transport Type */}
        <div className="mb-6">
          <label className="form-label block text-sm font-medium mb-3 text-white/80">Transport Type <span className="text-red-400">*</span></label>
          <div className="flex flex-wrap gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="transport_type" value="1" defaultChecked className="w-4 h-4 accent-[#ffac33]" />
              <span className="text-white text-sm">Open Carrier</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="transport_type" value="2" className="w-4 h-4 accent-[#ffac33]" />
              <span className="text-white text-sm">Enclosed Carrier</span>
            </label>
          </div>
        </div>

        <div className="text-right">
          <button type="button" onClick={() => setStep(2)} className="inline-flex items-center gap-2 bg-[#ffac33] hover:bg-[#e6952e] text-white px-6 py-3 rounded-lg font-semibold transition-colors">
            Next <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Step 2: Vehicle Details */}
      <div className={`step ${step === 2 ? 'active' : ''}`}>
        <h4 className="text-lg font-bold mb-6 flex items-center gap-2 text-white">
          <Car className="w-5 h-5 text-[#ffac33]" /> Vehicle Information
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="form-label block text-sm font-medium mb-1 text-white/80">Vehicle Year <span className="text-red-400">*</span></label>
            <select name="vehicle_model_year" className="form-input w-full px-3 py-2.5 rounded-lg text-sm outline-none" required>
              <option value="" className="bg-slate-800">Select Year</option>
              {years.map(y => <option key={y} value={y} className="bg-slate-800">{y}</option>)}
            </select>
          </div>
          <div>
            <label className="form-label block text-sm font-medium mb-1 text-white/80">Vehicle Make <span className="text-red-400">*</span></label>
            <select name="vehicle_make" onChange={handleMakeChange} className="form-input w-full px-3 py-2.5 rounded-lg text-sm outline-none" required>
              <option value="" className="bg-slate-800">Select Make</option>
              <optgroup label="Popular Makes" className="bg-slate-800">
                {Object.keys(vehicleMakes).filter(m => !['Alfa Romeo', 'Aston Martin', 'Bentley', 'Ferrari', 'Fiat', 'Genesis', 'Jaguar', 'Lamborghini', 'Land Rover', 'Maserati', 'McLaren', 'Mini', 'Mitsubishi', 'Polestar', 'Porsche', 'Rivian', 'Rolls-Royce', 'Other'].includes(m)).map(m => <option key={m} value={m} className="bg-slate-800">{m}</option>)}
              </optgroup>
              <optgroup label="Other Makes" className="bg-slate-800">
                {['Alfa Romeo', 'Aston Martin', 'Bentley', 'Ferrari', 'Fiat', 'Genesis', 'Jaguar', 'Lamborghini', 'Land Rover', 'Maserati', 'McLaren', 'Mini', 'Mitsubishi', 'Polestar', 'Porsche', 'Rivian', 'Rolls-Royce', 'Other'].map(m => <option key={m} value={m} className="bg-slate-800">{m}</option>)}
              </optgroup>
            </select>
          </div>
          <div>
            <label className="form-label block text-sm font-medium mb-1 text-white/80">Vehicle Model <span className="text-red-400">*</span></label>
            <select name="vehicle_model" className="form-input w-full px-3 py-2.5 rounded-lg text-sm outline-none" required>
              <option value="" className="bg-slate-800">Select Model</option>
              {models.map(m => <option key={m} value={m} className="bg-slate-800">{m}</option>)}
              <option value="Other" className="bg-slate-800">Other / Not Listed</option>
            </select>
          </div>
          <div>
            <label className="form-label block text-sm font-medium mb-1 text-white/80">Vehicle Type <span className="text-red-400">*</span></label>
            <select name="vehicle_type" className="form-input w-full px-3 py-2.5 rounded-lg text-sm outline-none" required>
              <option value="" className="bg-slate-800">Select Type</option>
              <option value="Car" className="bg-slate-800">Car / Sedan</option>
              <option value="SUV" className="bg-slate-800">SUV / Crossover</option>
              <option value="Pickup" className="bg-slate-800">Pickup Truck</option>
              <option value="Van" className="bg-slate-800">Van / Minivan</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="form-label block text-sm font-medium mb-2 text-white/80">Is Vehicle Operable? <span className="text-red-400">*</span></label>
            <div className="flex flex-wrap gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="vehicle_inop" value="0" defaultChecked className="w-4 h-4 accent-[#ffac33]" />
                <span className="text-white text-sm">Yes - Vehicle Runs & Drives</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="vehicle_inop" value="1" className="w-4 h-4 accent-[#ffac33]" />
                <span className="text-white text-sm">No - Vehicle is Inoperable</span>
              </label>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-6">
          <button type="button" onClick={() => setStep(1)} className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
            <ArrowLeft className="w-4 h-4" /> Previous
          </button>
          <button type="button" onClick={() => setStep(3)} className="inline-flex items-center gap-2 bg-[#ffac33] hover:bg-[#e6952e] text-white px-6 py-3 rounded-lg font-semibold transition-colors">
            Next <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Step 3: Contact Details */}
      <div className={`step ${step === 3 ? 'active' : ''}`}>
        <h4 className="text-lg font-bold mb-6 flex items-center gap-2 text-white">
          <User className="w-5 h-5 text-[#ffac33]" /> Contact & Shipping Details
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="form-label block text-sm font-medium mb-1 text-white/80">First Name <span className="text-red-400">*</span></label>
            <input type="text" name="shipper_first_name" className="form-input w-full px-3 py-2.5 rounded-lg text-sm outline-none" placeholder="First name" required />
          </div>
          <div>
            <label className="form-label block text-sm font-medium mb-1 text-white/80">Last Name</label>
            <input type="text" name="shipper_last_name" className="form-input w-full px-3 py-2.5 rounded-lg text-sm outline-none" placeholder="Last name" />
          </div>
          <div>
            <label className="form-label block text-sm font-medium mb-1 text-white/80">Email <span className="text-red-400">*</span></label>
            <input type="email" name="shipper_email" className="form-input w-full px-3 py-2.5 rounded-lg text-sm outline-none" placeholder="email@example.com" required />
          </div>
          <div>
            <label className="form-label block text-sm font-medium mb-1 text-white/80">Phone <span className="text-red-400">*</span></label>
            <input type="tel" name="shipper_phone" className="form-input w-full px-3 py-2.5 rounded-lg text-sm outline-none" placeholder="(555) 123-4567" required />
          </div>
          <div>
            <label className="form-label block text-sm font-medium mb-1 text-white/80">Preferred Ship Date <span className="text-red-400">*</span></label>
            <input type="date" name="ship_date" className="form-input w-full px-3 py-2.5 rounded-lg text-sm outline-none" required />
          </div>
        </div>
        <div className="flex justify-between mt-6">
          <button type="button" onClick={() => setStep(2)} className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
            <ArrowLeft className="w-4 h-4" /> Previous
          </button>
          <button type="submit" className="inline-flex items-center gap-2 bg-[#ffac33] hover:bg-[#e6952e] text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg">
            Get Quote
          </button>
        </div>
      </div>
    </form>
  );
}
