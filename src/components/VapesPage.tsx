import Header from './Header';
import './VapesPage.css';

const VapesPage: React.FC = () => {
  return (
    <div className="vapes-page">
      <Header />

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <div className="breadcrumb">Vapes</div>
          <div className="hero-label">A Smarter Way to Vape</div>
          <h1 className="hero-headline">
            99% Fewer Harmful Chemicals.<br />
            <span className="highlight">Every Ingredient Disclosed.</span>
          </h1>
          <p className="hero-sub">
            If you&rsquo;re switching from cigarettes, vaping is one of the smartest moves you can make. VEEV ONE gives you a premium, tested, regulated device with ceramic heating technology, sealed pods, and full ingredient transparency. No guesswork, just a cleaner way to get your nicotine.
          </p>
          <div className="hero-cta-row">
            <a href="#veev" className="vp-btn-ghost">Explore VEEV ONE</a>
          </div>
        </div>

        <div className="hero-images">
          <div className="hero-img-wrap">
            <img src="/veev-one.webp" alt="VEEV ONE devices in premium colours" />
            <div className="img-label">VEEV ONE</div>
          </div>
          <div className="hero-img-wrap">
            <img src="/veev-branding.jpg" alt="VEEV branding" />
            <div className="img-label">From the Makers of IQOS</div>
          </div>
        </div>
      </section>

      {/* STAT BAR */}
      <div className="stat-bar">
        <div className="stat-bar-inner">
          <div className="stat-item">
            <div className="stat-number">99%</div>
            <div className="stat-label">Fewer harmful chemicals vs cigarettes</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">Published research studies by PMI</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">1,000</div>
            <div className="stat-label">Puffs per pod</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">20+</div>
            <div className="stat-label">Flavours available</div>
          </div>
        </div>
      </div>

      {/* VEEV PRODUCT SHOWCASE */}
      <div className="showcase" id="veev">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-label">The Regulated Alternative</div>
          <div className="section-title">VEEV ONE</div>
        </div>

        <div className="product-hero">
          <div className="product-image">
            <img src="/veev-one-pods.jpg" alt="VEEV ONE Velvety Mint pods" />
          </div>
          <div className="product-info">
            <div className="product-maker">From the Makers of IQOS</div>
            <h2>VEEV ONE</h2>
            <p>
              VEEV ONE is a closed-pod vape system built with <strong>ceramic heating technology</strong> instead of traditional metal coils. Each pod is factory-sealed, tamper-proof, and contains fully disclosed ingredients: propylene glycol, vegetable glycerin, water, nicotine, flavourings, sweeteners, and benzoic and/or lactic acid. That&rsquo;s it. You know exactly what you&rsquo;re inhaling.
            </p>
            <p>
              The ceramic heater includes a <strong>dedicated algorithm</strong> that tracks changes in resistance to detect low liquid levels and automatically stops power, preventing overheating and the formation of harmful chemicals. Every new pod comes with a <strong>fresh ceramic heater and mouthpiece</strong>, so there is zero degradation over time.
            </p>
            <div className="spec-row">
              <span className="spec-pill">Ceramic Heater</span>
              <span className="spec-pill">Sealed Pods</span>
              <span className="spec-pill">99% Fewer Harmful Chemicals</span>
              <span className="spec-pill">Low-Liquid Detection</span>
            </div>
          </div>
        </div>

        <div className="product-hero reverse">
          <div className="product-image">
            <img src="/veev-one-sour-apple.jpg" alt="VEEV ONE Sour Apple" />
          </div>
          <div className="product-info">
            <div className="product-maker">20+ Flavours</div>
            <h2>VEEV ONE Pods</h2>
            <p>
              Each pod contains <strong>2ml of e-liquid with 1.8% (20mg/ml) nicotine salts</strong>, delivering a smooth, cigarette-like sensation. Up to <strong>1,000 puffs per pod</strong> (2,000 per pack of 2), translucent design so you can see your liquid level, and magnetic click-in fitting. No mess, no refilling, no coil changes.
            </p>
            <p>
              Available in over <strong>20 flavours</strong> from classic tobacco and blue mint to watermelon, grape, mango, and the new X-Flavour range. Pods are available at major retailers including Sainsbury&rsquo;s, Morrisons, Asda, and BP, as well as online at iqos.com with subscription savings up to 40%.
            </p>
            <div className="spec-row">
              <span className="spec-pill">2ml Per Pod</span>
              <span className="spec-pill">1,000 Puffs Per Pod</span>
              <span className="spec-pill">20mg Nic Salt</span>
              <span className="spec-pill">Recyclable Pods</span>
            </div>
          </div>
        </div>
      </div>

      <div className="section-divider"></div>

      {/* WHY VEEV IS DIFFERENT */}
      <section className="vp-section">
        <div className="section-label">Under the Hood</div>
        <div className="section-title">What Makes VEEV ONE Different</div>

        <div className="safe-block">
          <h3>Closed Pod System</h3>
          <p>
            VEEV ONE pods are <strong>factory-sealed and tamper-proof</strong>. The e-liquid cannot be altered, accessed, or refilled. What&rsquo;s in the pod is what&rsquo;s on the label. This sealed design ensures the integrity of the e-liquid, minimises leakage, and prevents deterioration of the heating element, giving you a consistent experience from first puff to last.
          </p>
        </div>

        <div className="safe-block">
          <h3>Ceramic Heating Technology</h3>
          <p>
            VEEV ONE uses a <strong>metallic heating track printed onto a microporous ceramic substrate</strong>. Ceramic provides consistent, even heating without degradation over time. And because every pod comes with a brand new heater inside, there is no cumulative wear at all. A fresh pod means a fresh heater and a fresh mouthpiece, every time.
          </p>
        </div>

        <div className="safe-block">
          <h3>Full Ingredient Transparency</h3>
          <p>
            Every ingredient is disclosed and every batch is tested. VEEV ONE emits on average <strong>99% lower levels of harmful chemicals compared to cigarettes</strong>, measured against the WHO 9 list of priority harmful constituents. This is backed by over <strong>500 published scientific research articles</strong> since 2008, conducted according to Good Laboratory Practices and ISO standards.
          </p>
        </div>
      </section>

      {/* FLAVOURS */}
      <section className="vp-section">
        <div className="section-label">The Range</div>
        <div className="section-title">VEEV ONE Flavours</div>

        <div className="flavour-grid">
          <div className="flavour-chip"><span className="emoji">&#x1F343;</span><span className="fname">Classic Tobacco</span></div>
          <div className="flavour-chip"><span className="emoji">&#x1F9CA;</span><span className="fname">Blue Mint</span></div>
          <div className="flavour-chip"><span className="emoji">&#x1F349;</span><span className="fname">Watermelon</span></div>
          <div className="flavour-chip"><span className="emoji">&#x1FAD0;</span><span className="fname">Blueberry</span></div>
          <div className="flavour-chip"><span className="emoji">&#x1F347;</span><span className="fname">Grape</span></div>
          <div className="flavour-chip"><span className="emoji">&#x1F96D;</span><span className="fname">Mango</span></div>
          <div className="flavour-chip"><span className="emoji">&#x1F353;</span><span className="fname">Strawberry X</span></div>
          <div className="flavour-chip"><span className="emoji">&#x1F34F;</span><span className="fname">Sour Apple</span></div>
          <div className="flavour-chip"><span className="emoji">&#x1F34B;</span><span className="fname">Lemon Lime</span></div>
          <div className="flavour-chip"><span className="emoji">&#x1FAD2;</span><span className="fname">Velvety Mint</span></div>
          <div className="flavour-chip"><span className="emoji">&#x1F351;</span><span className="fname">Peach</span></div>
          <div className="flavour-chip"><span className="emoji">&#x1F49C;</span><span className="fname">Blackcurrant</span></div>
          <div className="flavour-chip"><span className="emoji">&#x1F499;</span><span className="fname">Blue Raspberry</span></div>
          <div className="flavour-chip"><span className="emoji">&#x1F352;</span><span className="fname">Cherry</span></div>
        </div>
      </section>

      {/* CIGARETTES VS VEEV ONE */}
      <section className="vp-section">
        <div className="section-label">The Switch</div>
        <div className="section-title">Cigarettes vs VEEV ONE</div>
        <div className="section-body">
          <p>
            Cigarettes burn tobacco at up to 900&deg;C, producing smoke containing over 7,000 chemicals including tar, carbon monoxide, benzene, and formaldehyde. That combustion is what kills. VEEV ONE heats liquid, not tobacco, at a fraction of the temperature. No combustion, no smoke, no tar, no carbon monoxide. The result: <strong>99% fewer harmful chemicals</strong> compared to cigarettes.
          </p>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* UNREGULATED VAPES WARNING */}
      <section id="danger" className="vp-section">
        <div className="section-label danger-label">Worth Knowing</div>
        <div className="section-title">Not All Vapes Are Created Equal</div>
        <div className="section-body">
          <p>
            If you already vape, or you&rsquo;re considering it as a step away from cigarettes, it&rsquo;s worth understanding the difference between regulated and unregulated devices. VEEV ONE is rigorously tested with every ingredient disclosed. But millions of unregulated vapes, many manufactured in uncontrolled factory conditions overseas, continue to circulate in the UK. Here&rsquo;s what the research has found.
          </p>
        </div>

        <div className="danger-block">
          <h3>What Researchers Found</h3>
          <p>
            A major 2025 study published in ACS Central Science by UC Davis tested popular disposable vape brands and found <strong>lead in aerosols at extreme concentrations</strong>, alongside dangerous levels of nickel, copper, zinc, and chromium. In some devices, using it for a single day released more lead than roughly 20 packs of cigarettes, and the levels got worse as the devices aged.
          </p>
          <p>
            The contamination wasn&rsquo;t just from heating. Researchers discovered that toxic metals were present <strong>in the e-liquid before the vape had even been used</strong>, leaching from cheap internal components. One brand was found to use a lead alloy as a structural component that literally dissolves into the liquid.
          </p>
        </div>

        <div className="danger-block">
          <h3>In the UK</h3>
          <p>
            The BBC partnered with Inter Scientific lab in Liverpool and analysed 18 vapes gathered at a school. Some contained <strong>more than twice the safe amount of lead</strong> and <strong>nine times the safe amount of nickel</strong>. Formaldehyde and acetaldehyde were found at ten times the level of legal vapes, with some exceeding levels found in actual cigarettes.
          </p>
          <p>
            Over <strong>4 million illegal disposable vapes were seized at the UK border in 2023</strong>, up from 4,430 in 2019. Since the disposable ban came into force on 1 June 2025, illegal vapes continue to be sold from convenience stores, market stalls, and other outlets. Crimestoppers has flagged that gangs use illicit vapes to fund drug dealing, human trafficking, and modern slavery.
          </p>
        </div>

        <div className="danger-block">
          <h3>The Factory Conditions</h3>
          <p>
            A Daily Mail expos&eacute; showed footage from a counterfeit vape factory in China: workers testing products <strong>using their own mouths</strong> before sealing and shipping them. Photos showed workers handling mouthpieces without gloves, filthy sinks and toilets, and cigarette ends on surfaces next to the manufacturing line.
          </p>
        </div>
      </section>

      {/* THREE-WAY COMPARISON */}
      <section className="vp-section">
        <div className="section-label">Know the Difference</div>
        <div className="section-title">How They Compare</div>

        <div className="vs-triple">
          <div className="vs-card worst">
            <div className="vs-icon">&#x1F6AC;</div>
            <h4>Cigarette</h4>
            <p>Burns tobacco at 900&deg;C. 7,000+ chemicals. Tar, carbon monoxide, benzene. 80,000 UK deaths a year.</p>
          </div>
          <div className="vs-card bad">
            <div className="vs-icon">&#x26A0;&#xFE0F;</div>
            <h4>Unregulated Vape</h4>
            <p>Unknown ingredients. Heavy metals and formaldehyde found at extreme levels. Factory conditions unknown. Gets worse with age.</p>
          </div>
          <div className="vs-card good">
            <div className="vs-icon">&#x2713;</div>
            <h4>VEEV ONE</h4>
            <p>Every ingredient disclosed. Ceramic heater. Sealed pods. 99% fewer harmful chemicals vs cigarettes. 500+ published studies.</p>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* FAQ */}
      <section id="faq" className="vp-section">
        <div className="section-label">Common Questions</div>
        <div className="section-title">What You Need to Know</div>

        <div className="faq-item">
          <div className="faq-q">Is vaping safer than smoking?</div>
          <div className="faq-a">Regulated vaping products like VEEV ONE emit significantly fewer harmful chemicals than cigarettes. Public Health England has stated that vaping is around 95% less harmful than smoking. No nicotine product is risk-free, but switching from cigarettes to a regulated vape is one of the biggest harm reduction steps a smoker can take.</div>
        </div>

        <div className="faq-item">
          <div className="faq-q">What does &ldquo;99% fewer harmful chemicals&rdquo; mean?</div>
          <div className="faq-a">VEEV ONE emits on average 99% lower levels of the 9 harmful chemicals the WHO recommends reducing in cigarette smoke. This does not mean a 99% reduction in risk. It means a 99% reduction in exposure to those specific compounds. VEEV ONE is not risk-free and contains nicotine, which is addictive.</div>
        </div>

        <div className="faq-item">
          <div className="faq-q">How do I know if a vape is regulated?</div>
          <div className="faq-a">Look for recognised brands sold through authorised retailers. Warning signs of unregulated vapes include: no brand provenance, sold from market stalls or phone repair shops, unusually cheap pricing, puff counts above the legal UK limit, and packaging that appeals to children. Since the UK disposable vape ban came into force on 1 June 2025, any disposable single-use vape being sold is illegal.</div>
        </div>

        <div className="faq-item">
          <div className="faq-q">Can I refill or tamper with VEEV ONE pods?</div>
          <div className="faq-a">No. VEEV ONE uses a closed pod system specifically designed to prevent tampering. Pods are factory-sealed with every ingredient tested and disclosed. This is a fundamental safety feature.</div>
        </div>

        <div className="faq-item">
          <div className="faq-q">How does SNUK help with switching to vaping?</div>
          <div className="faq-a">SNUK is a free, independent 12-month programme. You speak to an AI voice coach weekly, learn about the science of harm reduction, and for completing your four weekly check-ins each month, you earn &pound;30 in credits redeemable for non tobacco nicotine products from iqos.com and zyn.com. SNUK does not sell products. We educate. The switch is yours to make.</div>
        </div>
      </section>

      {/* FINAL CTA */}
      <div className="final-cta" id="start">
        <div className="section-label">Ready?</div>
        <div className="section-title">A Cleaner Way to Get Your Nicotine.</div>
        <p>Join SNUK&rsquo;s free 12-month programme. Learn the science. Talk to your AI coach. Earn &pound;30/month in credits. Whether you switch to VEEV, ZYN pouches, or heated tobacco, SNUK helps you make a smarter choice.</p>
        {/*<div className="hero-cta-row" style={{ opacity: 1, animation: 'none' }}>
          <a href="/chat-v2" className="vp-btn-primary">Back to AI Coach</a>
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
          SNUK Ltd is an independent smoking switching education platform. SNUK does not sell tobacco, nicotine, or any related products. SNUK is not affiliated with, endorsed by, or funded by any tobacco company. Claims regarding unregulated vapes reference peer-reviewed research published in ACS Central Science (UC Davis, 2025), BBC/Inter Scientific lab analysis, and UK Border Force seizure data. VEEV ONE emission claims reference PMI testing against the WHO 9 priority harmful constituents. Vaping is not risk-free and nicotine is addictive. This content is intended for adult smokers (18+) in the United Kingdom only.
        </div>
      </footer>
    </div>
  );
};

export default VapesPage;
