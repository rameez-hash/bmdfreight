import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | BMD Freight',
  description: 'Read BMD Freight\'s full terms and conditions. Understand our service agreement, pricing policy, cancellation terms, insurance, and liability information.',
};

export default function TermsPage() {
  return (
    <>
      <section className="relative py-20 bg-navy">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Terms &amp; Conditions</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">Please read our service agreement carefully before using BMD Freight.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none text-slate-600">
            <p className="mb-6">Welcome to BMD Freight. By accessing our website or booking any of our auto transport services, you agree to be bound by the following Terms &amp; Conditions. If you do not agree with any part of these terms, please do not use our services.</p>
            
            <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">1. Services</h2>
            <p className="mb-6">BMD Freight provides auto transport brokerage services. We arrange vehicle transportation between licensed and insured carriers and customers seeking vehicle shipping services.</p>

            <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">2. Quotes and Pricing</h2>
            <p className="mb-6">Quotes are based on the information you provide at the time of booking. BMD Freight strives to offer accurate, locked-in pricing with no hidden fees. However, final pricing may be affected by factors outside our control, including carrier availability, route conditions, or changes to the shipment details provided by the customer.</p>

            <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">3. Booking and Cancellation</h2>
            <p className="mb-6">A deposit may be required to secure your shipment. Cancellation policies vary based on timing and carrier assignment. Please contact us for specific cancellation terms related to your booking.</p>

            <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">4. Vehicle Condition</h2>
            <p className="mb-6">Customers must accurately disclose the condition of their vehicle, including operability and any existing damage. Vehicles must be prepared for transport according to our guidelines, including removing personal items and maintaining approximately 1/4 tank of fuel.</p>

            <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">5. Insurance and Liability</h2>
            <p className="mb-6">All carriers in our network carry cargo insurance. BMD Freight is a transportation broker and not a motor carrier. Carrier insurance coverage applies during transit. Customers are encouraged to verify insurance coverage and document vehicle condition before and after transport.</p>

            <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">6. Delivery Times</h2>
            <p className="mb-6">Delivery times are estimates and not guaranteed. Factors including weather, traffic, mechanical issues, and carrier scheduling can affect delivery times. We provide updates and tracking information throughout the transport process.</p>

            <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">7. Contact Information</h2>
            <p className="mb-6">For questions about these Terms & Conditions, please contact us at info@bmdfreight.com or (872) 204-2373.</p>
          </div>
        </div>
      </section>
    </>
  );
}
