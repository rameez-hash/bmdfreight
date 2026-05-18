import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | BMD Freight',
  description: 'Read BMD Freight\'s privacy policy to understand how we collect, use, and protect your personal information when you use our website and auto transport services.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="relative py-20 bg-navy">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Privacy Policy</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">How we collect, use, and protect your personal information.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none text-slate-600">
            <p className="mb-6">At BMD Freight, we take your privacy seriously. This Privacy Policy explains what information we collect, how we use it, who we share it with, and the rights you have over your own data. By using our website or services, you agree to the practices described below.</p>
            
            <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">Information We Collect</h2>
            <p className="mb-4">We collect information you provide directly to us, including:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Name, email address, phone number, and mailing address</li>
              <li>Vehicle information (make, model, year, VIN)</li>
              <li>Pickup and delivery location details</li>
              <li>Payment information (processed securely through our payment processors)</li>
              <li>Communications you send to us</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Provide and improve our auto transport services</li>
              <li>Process your shipments and communicate with you about your orders</li>
              <li>Send you quotes, updates, and service notifications</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">Information Sharing</h2>
            <p className="mb-6">We do not sell your personal information. We may share your information with:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Licensed carriers who transport your vehicle</li>
              <li>Service providers who assist in our operations</li>
              <li>Legal authorities when required by law</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">Data Security</h2>
            <p className="mb-6">We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.</p>

            <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">Your Rights</h2>
            <p className="mb-6">You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at info@bmdfreight.com.</p>

            <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">Contact Us</h2>
            <p className="mb-6">If you have any questions about this Privacy Policy, please contact us at info@bmdfreight.com or call (872) 204-2373.</p>
          </div>
        </div>
      </section>
    </>
  );
}
