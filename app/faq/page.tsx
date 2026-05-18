import { Metadata } from 'next';
import { ChevronRight, HelpCircle, MessageCircleQuestion } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Car Shipping FAQs | BMD Freight Answers Your Questions',
  description: 'Get answers to the most common car shipping questions — pricing, delivery times, insurance, pickup process, and more. Straight answers from BMD Freight.',
};

const faqs = [
  { q: 'How long does car shipping take with BMD Freight?', a: 'Transit times depend on distance. Routes under 500 miles typically take 1–3 days. Mid-range routes (500–1,500 miles) average 3–5 days. Cross-country shipments take 7–10 days. Carrier pickup usually occurs within 1–5 business days of booking.' },
  { q: 'How much does it cost to ship a car?', a: 'Cost depends on your pickup and drop-off locations, vehicle size, transport type (open vs. enclosed), season, and carrier availability. The best way to know your exact price is to use our instant quote calculator — you get a real locked-in price in under 60 seconds with no commitment.' },
  { q: 'Is my car insured during transport?', a: 'Yes. Every carrier in our network is required to carry active cargo insurance. Before your vehicle is loaded, the driver performs a Bill of Lading inspection documenting your car\'s condition. That same inspection is compared at delivery. Any new damage discovered at drop-off must be noted before you sign — this protects your right to file a claim.' },
  { q: 'What is the difference between open and enclosed transport?', a: 'Open transport uses an exposed multi-vehicle trailer — the same method car manufacturers use to deliver new vehicles to dealerships. It is the most affordable option and suitable for the majority of vehicles. Enclosed transport uses a fully sealed trailer that protects against weather, dust, and road debris. It is the right choice for luxury cars, classics, exotics, or any vehicle where appearance and condition are non-negotiable.' },
  { q: 'How do I prepare my car for shipping?', a: 'Wash your vehicle and photograph all sides before pickup. Remove all personal belongings from the interior. Leave roughly one-quarter of a tank of fuel. Disable the car alarm if possible. Note any existing scratches, dents, or damage on the Bill of Lading at pickup — do not rely on the driver to find everything.' },
  { q: 'Do I need to be present at pickup and delivery?', a: 'Yes, you or someone you authorize should be present at both pickup and delivery to sign the Bill of Lading and inspect the vehicle. If you cannot be there personally, let us know in advance and we can coordinate with an authorized representative on your behalf.' },
  { q: 'Can I put personal items inside my car during shipping?', a: 'Most carriers allow up to 100 pounds of personal belongings stored in the trunk only. Items left in the vehicle are not covered by the carrier\'s cargo insurance. Anything visible through the windows may also create a security risk. Keep it minimal and stick to the trunk.' },
  { q: 'Does BMD Freight offer any discounts?', a: 'Yes. We offer reduced rates for active military members, veterans, students, multi-vehicle shipments, and repeat customers. Mention your eligibility when requesting your quote and we will apply the correct discount before you confirm.' },
  { q: 'Can you ship a car that does not run?', a: 'Yes. We transport inoperable vehicles using specialized carriers equipped with winches and flatbed equipment. There is typically a small additional fee to cover the equipment required. Make sure you indicate the vehicle is non-running when filling out your quote request so we can match you with the right carrier.' },
  { q: 'How do I track my vehicle during transit?', a: 'Once your shipment is dispatched, you receive your carrier\'s direct contact information. You can call or text your driver at any time for real-time location updates. Our customer support team is also available seven days a week if you need help reaching your driver or have any concerns.' },
  { q: 'When do I pay for car shipping?', a: 'A deposit is collected at the time of booking to secure your carrier assignment. The remaining balance is paid directly to the driver upon delivery — after you have inspected your vehicle and confirmed its condition. You never pay the full amount before your car arrives.' },
  { q: 'What if my car is damaged during shipping?', a: 'Damage during transport is rare, but if it happens, you are protected. Do not sign a clean Bill of Lading if you notice new damage at delivery — note every issue clearly on the document while the driver is present. This creates the official record needed to file an insurance claim with the carrier. Contact our team immediately and we will guide you through the process.' },
  { q: 'What is door-to-door car shipping?', a: 'Door-to-door shipping means your carrier picks up the vehicle at your specified address — your home, office, or any location you choose — and delivers it directly to your destination address. You never drive to a terminal. The carrier gets as close to both addresses as physically and legally possible.' },
  { q: 'What is expedited auto shipping?', a: 'Expedited shipping moves your vehicle to the top of our dispatch queue. Our team contacts carriers on your route immediately and prioritizes the fastest available pickup. It is the right option when you have a hard deadline, a last-minute relocation, or simply cannot wait for standard scheduling.' },
  { q: 'Do you ship cars to Hawaii or Alaska?', a: 'Yes. We coordinate vehicle transport to and from both Hawaii and Alaska. These routes typically involve port-to-port shipping, meaning your vehicle is transported overland to a departure port, loaded onto a vessel, and delivered to the destination port before final delivery. Contact us directly for accurate pricing on these routes.' },
  { q: 'How soon after booking will my car be picked up?', a: 'For standard shipments, carrier assignment and pickup scheduling typically happen within 1 to 5 business days. Popular routes with high carrier availability often result in pickup within 24 to 48 hours. Expedited service can sometimes achieve same-day or next-day pickup depending on your route.' },
];

export default function FAQPage() {
  return (
    <>
      {/* Banner */}
      <section className="relative py-20 bg-navy">
        <div className="absolute inset-0 opacity-20 bg-[url('/img/faq-banner.webp')] bg-cover bg-center" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Your Car Shipping Questions, Answered</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Straight answers to the questions customers ask most. No fluff, no runaround.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-slate-50 rounded-xl border border-slate-100">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none font-medium text-slate-800">
                  <span>{faq.q}</span>
                  <ChevronRight className="w-5 h-5 text-accent flex-shrink-0 transition-transform group-open:rotate-90" />
                </summary>
                <div className="px-5 pb-5 text-slate-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
