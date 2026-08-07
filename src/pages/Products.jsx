import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import ProductPanel from '../components/ProductPanel';
import ZohoIcon from '../components/ZohoIcon';
import ZohoLogoStrip from '../components/ZohoLogoStrip';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import { PRODUCTS } from '../data/content';

export default function Products() {
  const [tab, setTab] = useState('crm');
  const product = PRODUCTS.find((p) => p.id === tab) || PRODUCTS[0];

  return (
    <div>
      <PageHero
        crumb="Zoho Products"
        title={<>The Complete Zoho <span className="text-gradient">Ecosystem</span></>}
        sub="Deep expertise across every Zoho product — not just CRM. We implement, customize, and integrate the full suite."
      />

      <section className="pb-24 px-5 sm:px-8 bg-surface/40 border-y border-edge/10">
        <div className="mx-auto max-w-[1200px] pt-4">
          <div className="mb-14"><ZohoLogoStrip /></div>
          <Reveal>
            <div className="flex flex-wrap gap-3 mb-14">
              {PRODUCTS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setTab(p.id)}
                  className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border transition-all ${tab === p.id ? 'border-brand-500/40 bg-brand-500/10 text-ink' : 'border-edge/10 bg-surface text-ink2 hover:border-edge/25'}`}
                >
                  <span className="w-6 h-6"><ZohoIcon id={p.id} /></span>
                  <span className="text-sm font-semibold">{p.label.replace('Zoho ', '')}</span>
                </button>
              ))}
            </div>
          </Reveal>
          <ProductPanel key={product.id} p={product} />
        </div>
      </section>

      <section className="py-24 px-5 sm:px-8 text-center">
        <Reveal>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink mb-4">Need a custom <span className="text-gradient">integration?</span></h2>
          <p className="text-ink2 mb-8 max-w-[480px] mx-auto">We connect Zoho to any third-party system — ERP, payments, e-commerce, WhatsApp Business.</p>
          <Button to="/contact" variant="primary" size="lg">Discuss Requirements <ArrowRight size={16} /></Button>
        </Reveal>
      </section>
    </div>
  );
}
