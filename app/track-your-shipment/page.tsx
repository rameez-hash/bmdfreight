import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Track Your Shipment',
  description: 'Track your vehicle shipment with BMD Freight. Monitor your car transport from pickup to delivery in real-time.',
};

export default function TrackShipmentPage() {
  return (
    <>
      <section className="relative py-20 bg-navy">
        <div className="absolute inset-0 opacity-20 bg-[url('/assets/state/door.png')] bg-cover bg-center" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Track Your Shipment</h1>
        </div>
      </section>

      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <iframe
            src="https://www.batsordertracker.com/"
            style={{ width: '100%', height: '75vh', border: 'none' }}
            allowFullScreen
            title="Shipment Tracker"
          />
        </div>
      </section>
    </>
  );
}
