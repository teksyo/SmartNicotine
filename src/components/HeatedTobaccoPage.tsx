import Header from './Header';
import './HeatedTobaccoPage.css';

const HeatedTobaccoPage: React.FC = () => {
  return (
    <div className="heated-page">
      <Header />

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <div className="breadcrumb">
            Heated Tobacco
          </div>
          <div className="hero-label">The Smarter Way to Use Tobacco</div>
          <h1 className="hero-headline">
            Same Tobacco. Same Nicotine.<br />
            <span className="highlight">95% Fewer Harmful Chemicals.</span>
          </h1>
          <p className="hero-sub">
            Heated tobacco devices warm real tobacco just enough to release nicotine and flavour, but never hot enough to burn it. No combustion means no smoke, no tar, no ash, and a massive reduction in the chemicals that actually cause harm.
          </p>
          <div className="hero-cta-row">
            <a href="/iqos" className="ht-btn-primary">Select Your IQOS Device</a>
            <a href="#science" className="ht-btn-ghost">See the Science</a>
          </div>
        </div>

        <div className="hero-images">
          <div className="hero-img-wrap">
            <img src="/iqos-iluma-terea.jpg" alt="IQOS ILUMA with TEREA sticks" />
            <div className="img-label">IQOS ILUMA + TEREA</div>
          </div>
          <div className="hero-img-wrap">
            <img src="/iqos-iluma-i.jpg" alt="IQOS ILUMA i Breeze Blue device" style={{ background: '#0a1628' }} />
            <div className="img-label">IQOS ILUMA i</div>
          </div>
        </div>
      </section>

      {/* STAT BAR */}
      <div className="stat-bar">
        <div className="stat-bar-inner">
          <div className="stat-item">
            <div className="stat-number">95%</div>
            <div className="stat-label">Fewer harmful chemicals vs cigarettes</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">98%</div>
            <div className="stat-label">Less carbon monoxide produced</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">0</div>
            <div className="stat-label">Tar, ash, or cigarette smoke</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">30M+</div>
            <div className="stat-label">IQOS users worldwide</div>
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <section id="science" className="ht-section">
        <div className="section-label">The Science</div>
        <div className="section-title">Heat, Don&rsquo;t Burn. That&rsquo;s the Entire Point.</div>
        <div className="section-body">
          <p>
            A cigarette burns tobacco at temperatures between <strong>700 and 950 degrees Celsius</strong>. That combustion process is what creates smoke, and inside that smoke are over 7,000 chemicals, at least 70 of which are known carcinogens. Tar, carbon monoxide, formaldehyde, benzene, arsenic. The full horror show.
          </p>
          <p>
            Heated tobacco devices work differently. They warm real tobacco to around <strong>300 to 350 degrees</strong>, well below the point of combustion. The result is a nicotine-containing vapour instead of smoke. Same tobacco. Same nicotine. Same ritual. But without setting fire to it and inhaling the consequences.
          </p>
          <p>
            The World Health Organization identified 9 key chemicals in cigarette smoke that should be reduced. Studies show heated tobacco products reduce the levels of those 9 chemicals by <span className="teal">an average of 95%</span>. Carbon monoxide specifically drops by 98%.
          </p>
        </div>

        {/* Temperature Comparison */}
        <div className="temp-compare">
          <div className="temp-card burn">
            <div className="temp-number">700-950&deg;C</div>
            <div className="temp-label">Cigarette</div>
            <div className="temp-desc">Burns tobacco. Creates smoke containing 7,000+ chemicals, tar, carbon monoxide, and ash.</div>
          </div>
          <div className="temp-card heat">
            <div className="temp-number">300-350&deg;C</div>
            <div className="temp-label">Heated Tobacco</div>
            <div className="temp-desc">Heats tobacco. Creates vapour with 95% fewer harmful chemicals. No smoke, no tar, no ash.</div>
          </div>
        </div>

        <div className="science-block">
          <h3>What Gets Reduced?</h3>
          <div className="reduction-list">
            <div className="reduction-item">
              <div className="reduction-label">Carbon Monoxide</div>
              <div className="reduction-bar-bg"><div className="reduction-bar" style={{ width: '98%' }}></div></div>
              <div className="reduction-pct">-98%</div>
            </div>
            <div className="reduction-item">
              <div className="reduction-label">Benzene</div>
              <div className="reduction-bar-bg"><div className="reduction-bar" style={{ width: '99%' }}></div></div>
              <div className="reduction-pct">-99%</div>
            </div>
            <div className="reduction-item">
              <div className="reduction-label">Formaldehyde</div>
              <div className="reduction-bar-bg"><div className="reduction-bar" style={{ width: '90%' }}></div></div>
              <div className="reduction-pct">-90%</div>
            </div>
            <div className="reduction-item">
              <div className="reduction-label">Acrolein</div>
              <div className="reduction-bar-bg"><div className="reduction-bar" style={{ width: '93%' }}></div></div>
              <div className="reduction-pct">-93%</div>
            </div>
            <div className="reduction-item">
              <div className="reduction-label">Toluene</div>
              <div className="reduction-bar-bg"><div className="reduction-bar" style={{ width: '99%' }}></div></div>
              <div className="reduction-pct">-99%</div>
            </div>
          </div>
          <p>
            Based on the 9 chemicals the WHO recommends reducing in cigarette smoke. These reductions do not necessarily equal a proportional reduction in risk. Heated tobacco is <strong>not risk-free</strong> and delivers nicotine, which is addictive.
          </p>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* IQOS PRODUCT SECTION */}
      <div className="showcase" id="iqos">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-label">The Market Leader</div>
          <div className="section-title">IQOS ILUMA by Philip Morris International</div>
        </div>

        <div className="product-hero">
          <div className="product-image iqos-glow">
            <img src="/iqos-iluma-i-device.jpg" alt="IQOS ILUMA i device" style={{ background: '#0a1628' }} />
            <div className="image-glow"></div>
          </div>
          <div className="product-info">
            <div className="product-maker iqos-maker">Philip Morris International</div>
            <h2>IQOS ILUMA</h2>
            <p>
              The most advanced heated tobacco system available. IQOS ILUMA uses <strong>SMARTCORE INDUCTION SYSTEM technology</strong>, heating tobacco from the inside out via a stainless-steel element sealed within each TEREA stick. No blade. No cleaning. No residue.
            </p>
            <p>
              Over <strong>30 million users</strong> have switched to IQOS worldwide. In the UK, IQOS holds an estimated <strong>95% share</strong> of the heated tobacco market. PMI has invested over $14 billion in developing smoke-free products, backed by decades of research and hundreds of peer-reviewed studies.
            </p>
            <div className="spec-row">
              <span className="spec-pill teal-pill">Bladeless Induction</span>
              <span className="spec-pill teal-pill">No Cleaning Required</span>
              <span className="spec-pill teal-pill">AutoStart</span>
              <span className="spec-pill teal-pill">14 Puffs / 6 Min</span>
            </div>
          </div>
        </div>

        <div className="product-hero reverse">
          <div className="product-image iqos-glow">
            <img src="/iqos-iluma-terea-sticks.jpg" alt="IQOS ILUMA in use with TEREA sticks" />
            <div className="image-glow"></div>
          </div>
          <div className="product-info">
            <div className="product-maker iqos-maker">Designed for IQOS ILUMA</div>
            <h2>TEREA Tobacco Sticks</h2>
            <p>
              TEREA sticks are the only tobacco sticks compatible with IQOS ILUMA. Each stick contains real tobacco sealed around a metal heating element. When you insert a TEREA stick, the device heats it from within, delivering <strong>consistent flavour from first puff to last</strong>.
            </p>
            <p>
              Available in a wide range of blends, from classic tobacco to menthol to fruity and floral notes. 20 sticks per pack at <strong>&pound;7 per pack</strong>, less than half the price of a typical pack of cigarettes. That works out to potential savings of <strong>up to &pound;3,400 a year</strong> for a pack-a-day smoker.
            </p>
            <div className="spec-row">
              <span className="spec-pill teal-pill">&pound;7 per 20 Sticks</span>
              <span className="spec-pill teal-pill">10+ Flavour Blends</span>
              <span className="spec-pill teal-pill">Sealed Design</span>
              <span className="spec-pill teal-pill">Zero Residue</span>
            </div>
          </div>
        </div>
      </div>

      <div className="section-divider"></div>

      {/* PLOOM PRODUCT SECTION */}
      <div className="showcase" id="ploom">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-label" style={{ color: 'var(--ht-silver)' }}>Heated Tobacco</div>
          <div className="section-title">Ploom X Advanced by JTI</div>
        </div>

        <div className="product-hero">
          <div className="product-image ploom-glow" style={{ background: '#fff' }}>
            <img src="/ploom-x-advanced.jpg" alt="Ploom X Advanced heated tobacco device" style={{ objectFit: 'contain', padding: '1rem' }} />
            <div className="image-glow"></div>
          </div>
          <div className="product-info">
            <div className="product-maker ploom-maker">Japan Tobacco International</div>
            <h2>Ploom X Advanced</h2>
            <p>
              JTI&rsquo;s answer to IQOS. The Ploom X Advanced uses <strong>HeatFlow technology</strong> to heat EVO tobacco sticks at up to 320 degrees Celsius, delivering a tobacco vapour with <strong>90 to 95% fewer levels</strong> of the 9 key constituents the WHO recommends reducing in cigarette smoke.
            </p>
            <p>
              It&rsquo;s a single-piece, all-in-one design. No separate holder and charger. Just slide in an EVO stick, wait 25 seconds, and you get 5 minutes of unlimited puffs. Up to <strong>22 sessions per charge</strong>, with fast charging in under 90 minutes.
            </p>
            <p>
              EVO sticks come in 12 flavour blends at <strong>&pound;5 per pack of 20</strong>, making Ploom the more affordable option per stick. Potential savings of <strong>up to &pound;3,900 a year</strong> versus cigarettes.
            </p>
            <div className="spec-row">
              <span className="spec-pill silver-pill">HeatFlow Technology</span>
              <span className="spec-pill silver-pill">All-In-One Device</span>
              <span className="spec-pill silver-pill">22 Sessions Per Charge</span>
              <span className="spec-pill silver-pill">25 Second Heat-Up</span>
            </div>
            <a href="https://www.ploom.co.uk" target="_blank" rel="noopener noreferrer" className="ht-btn-primary" style={{ display: 'inline-block', marginTop: '1.5rem' }}>Buy Ploom Device</a>
          </div>
        </div>
      </div>

      {/* SAVINGS BOX */}
      <section className="ht-section">
        <div className="savings-box">
          <div className="savings-number">&pound;3,400+</div>
          <div className="savings-sub">Potential annual savings when you switch from cigarettes</div>
          <div className="savings-detail">
            The average pack of 20 cigarettes costs &pound;14.40. A pack of 20 TEREA sticks costs &pound;7. A pack of 20 EVO sticks costs &pound;5. Do the maths on a pack a day and the savings are enormous, before you even factor in the health benefits.
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="ht-section">
        <div className="section-label">Common Questions</div>
        <div className="section-title">What You Need to Know</div>

        <div className="faq-item">
          <div className="faq-q">Is heated tobacco safe?</div>
          <div className="faq-a">No tobacco product is safe. Heated tobacco is not risk-free and delivers nicotine, which is addictive. However, the evidence shows that switching completely from cigarettes to heated tobacco products exposes you to significantly fewer harmful chemicals. Public Health England and the WHO have both acknowledged that products which avoid combustion produce lower levels of toxicants.</div>
        </div>

        <div className="faq-item">
          <div className="faq-q">What does &ldquo;95% fewer harmful chemicals&rdquo; actually mean?</div>
          <div className="faq-a">It means the average levels of 9 specific chemicals that the WHO recommends reducing in cigarette smoke are reduced by 95% in heated tobacco vapour. These 9 chemicals do not include nicotine. This does not necessarily mean a 95% reduction in risk. It means a 95% reduction in exposure to those specific harmful compounds.</div>
        </div>

        <div className="faq-item">
          <div className="faq-q">Does heated tobacco smell like cigarettes?</div>
          <div className="faq-a">No. Because there is no combustion, there is no cigarette smoke smell. Heated tobacco produces a subtle, mild aroma that dissipates quickly. Users and those around them consistently report significantly less smell compared to cigarettes. No lingering odour on clothes, hair, or furniture.</div>
        </div>

        <div className="faq-item">
          <div className="faq-q">Can I use TEREA sticks in a Ploom, or EVO sticks in an IQOS?</div>
          <div className="faq-a">No. TEREA sticks are designed exclusively for IQOS ILUMA devices. EVO sticks are designed exclusively for Ploom devices. They use completely different heating technologies and are not interchangeable. Using the wrong stick in either device will either not work or could damage the device.</div>
        </div>

        <div className="faq-item">
          <div className="faq-q">Is heated tobacco the same as vaping?</div>
          <div className="faq-a">No. Heated tobacco uses real tobacco that is heated to produce a vapour. Vapes use an e-liquid, which may or may not contain nicotine, that is heated to produce an aerosol. They are fundamentally different products. Many smokers who do not enjoy vaping find heated tobacco a more satisfying alternative because it delivers real tobacco taste and a familiar ritual.</div>
        </div>

        <div className="faq-item">
          <div className="faq-q">How does SNUK help with switching to heated tobacco?</div>
          <div className="faq-a">SNUK is a free, independent 12-month programme. You speak to an AI voice coach weekly, learn about the science of harm reduction, and for completing your four weekly check-ins each month, you earn &pound;30 in credits redeemable for non tobacco nicotine products from iqos.com and zyn.com. SNUK does not sell products. We educate. The switch is yours to make.</div>
        </div>
      </section>

      {/* FINAL CTA */}
      <div className="final-cta" id="start">
        <div className="section-label">Ready?</div>
        <div className="section-title">Still Burning Tobacco? There&rsquo;s a Smarter Way.</div>
        <p>Join SNUK&rsquo;s free 12-month programme. Learn the science. Talk to your AI coach. Earn &pound;30/month in credits. No cost, no catch, no judgement. Just a smarter approach to nicotine.</p>
        {/* <div className="hero-cta-row" style={{ opacity: 1, animation: 'none' }}>
          <a href="/chat-v2" className="ht-btn-primary">Back to AI Coach</a>
        </div>*/}
      </div>

      {/* FOOTER */}
      <footer>
        <div className="footer-links">
          <a href="/heated-tobacco">Heated Tobacco</a>
          <a href="/nicotine-pouches">Nicotine Pouches</a>
          <a href="/vapes">Vapes</a>
          <a href="#">The Science</a>
          <a href="#">About SNUK</a>
        </div>
        <div className="footer-disclaimer">
          SNUK Ltd is an independent smoking switching education platform. SNUK does not sell tobacco, nicotine, or any related products. SNUK is not affiliated with, endorsed by, or funded by any tobacco company. All health claims reference peer-reviewed scientific research and data from Public Health England, the World Health Organization, and the Royal Society for Public Health. Heated tobacco products are not risk-free and deliver nicotine, which is addictive. The best option for your health is to stop using tobacco and nicotine entirely. This content is intended for adult smokers (18+) in the United Kingdom only.
        </div>
      </footer>
    </div>
  );
};

export default HeatedTobaccoPage;
