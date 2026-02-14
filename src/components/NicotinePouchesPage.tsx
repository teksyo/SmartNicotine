import Header from './Header';
import './NicotinePouchesPage.css';

const NicotinePouchesPage: React.FC = () => {
  return (
    <div className="pouches-page">
      <Header />

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <div className="breadcrumb">
            Nicotine Pouches
          </div>
          <div className="hero-label">No Smoke. No Vapour. No Tobacco.</div>
          <h1 className="hero-headline">
            Nicotine, <span className="highlight">Simplified.</span><br />
            Just Place It Under Your Lip.
          </h1>
          <p className="hero-sub">
            Nicotine pouches are the cleanest way to consume nicotine. No smoke, no vapour, no tobacco leaf, no spit, no smell. A small pouch goes under your lip and delivers nicotine for up to 30 minutes. That&rsquo;s it. Use them anywhere. Nobody knows.
          </p>
          <div className="hero-cta-row">
            <a href="#what" className="np-btn-ghost">Learn More</a>
          </div>
        </div>

        <div className="hero-images">
          <div className="hero-img-wrap">
            <img src="/zyn-cool-mint.jpg" alt="ZYN Cool Mint nicotine pouches" />
            <div className="img-label">ZYN Cool Mint</div>
          </div>
          <div className="hero-img-wrap">
            <img src="/zyn-pouch-pocket.jpg" alt="ZYN pouch in pocket" />
            <div className="img-label">Use Anywhere. Discreetly.</div>
          </div>
        </div>
      </section>

      {/* STAT BAR */}
      <div className="stat-bar">
        <div className="stat-bar-inner">
          <div className="stat-item">
            <div className="stat-number">0%</div>
            <div className="stat-label">Tobacco leaf content</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">161%</div>
            <div className="stat-label">ZYN year-on-year growth UK</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">30 min</div>
            <div className="stat-label">Nicotine release per pouch</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">#1</div>
            <div className="stat-label">Nicotine pouch brand worldwide</div>
          </div>
        </div>
      </div>

      {/* WHAT ARE THEY */}
      <section id="what" className="np-section">
        <div className="section-label">The Basics</div>
        <div className="section-title">What Is a Nicotine Pouch?</div>
        <div className="section-body">
          <p>
            A nicotine pouch is a small, white, pre-portioned pouch containing nicotine, flavourings, and plant-based fibres. <strong>No tobacco leaf. No smoke. No vapour.</strong> You place it under your upper lip, and nicotine is absorbed through the gum tissue over 20 to 30 minutes. Then you dispose of it.
          </p>
          <p>
            Think of it as the furthest possible step away from a cigarette while still getting nicotine. There is nothing to light, nothing to charge, nothing to inhale, and nothing anyone around you can see or smell. They are legal in the UK, available to adults 18 and over, and you can use them literally anywhere, including on flights, in offices, at the gym, in hospitals, everywhere.
          </p>
          <p>
            On the <span className="teal">SNUK Harm Reduction Nicotine Ladder</span>, nicotine pouches sit at the very top: the smartest, cleanest way to get nicotine. No combustion, no heating, no inhalation of any kind. Just nicotine and flavour, absorbed through your gum.
          </p>
        </div>

        <div className="vs-grid">
          <div className="vs-card bad">
            <div className="vs-icon">&#x1F6AC;</div>
            <h4>Cigarette</h4>
            <p>Burns tobacco at 900&deg;C. Smoke contains 7,000+ chemicals including tar, carbon monoxide, benzene, and formaldehyde. Damages lungs, heart, and everyone nearby.</p>
          </div>
          <div className="vs-card good">
            <div className="vs-icon">&#x25FB;&#xFE0F;</div>
            <h4>Nicotine Pouch</h4>
            <p>No tobacco, no combustion, no inhalation. Nicotine delivered through gum tissue. No smoke, no vapour, no smell, no impact on anyone around you.</p>
          </div>
        </div>
      </section>

      {/* HOW TO USE */}
      <section className="np-section">
        <div className="section-label">Dead Simple</div>
        <div className="section-title">How to Use a Nicotine Pouch</div>

        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">01</div>
            <h4>Place</h4>
            <p>Take a pouch from the can and tuck it under your upper lip, between your gum and lip. You might feel a mild tingle, that&rsquo;s the nicotine releasing.</p>
          </div>
          <div className="step-card">
            <div className="step-number">02</div>
            <h4>Enjoy</h4>
            <p>Leave it there for 20 to 30 minutes. Nicotine and flavour release gradually. No need to chew, suck, or do anything. Just go about your day.</p>
          </div>
          <div className="step-card">
            <div className="step-number">03</div>
            <h4>Dispose</h4>
            <p>When you&rsquo;re done, remove the pouch and drop it in the bin compartment built into the top of every ZYN can. Clean, simple, done.</p>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* ZYN PRODUCT SECTION */}
      <div className="showcase" id="zyn">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-label">The World&rsquo;s Number One</div>
          <div className="section-title">ZYN by Philip Morris International</div>
        </div>

        <div className="product-hero">
          <div className="product-image">
            <img src="/zyn-apple-mint.jpg" alt="ZYN Apple Mint pouches in hand" />
          </div>
          <div className="product-info">
            <div className="product-maker">Philip Morris International / Swedish Match</div>
            <h2>ZYN Nicotine Pouches</h2>
            <p>
              ZYN is the world&rsquo;s number one nicotine pouch brand. Created by Swedish Match (acquired by PMI in 2022), ZYN has sold <strong>over 385 million cans worldwide</strong> in 2023 alone, up 62% on the previous year. In the UK, ZYN is growing at <strong>161% year on year</strong>, the fastest growing category in the nicotine market.
            </p>
            <p>
              Each pouch is <strong>completely tobacco-free</strong>. The nicotine is derived from the tobacco plant but the pouch itself contains no tobacco leaf. Just nicotine, food-grade flavourings, and plant-based fibres. Available in two formats: <strong>Mini</strong> (small, ultra-discreet) and <strong>Slim</strong> (larger, longer-lasting), with strengths from 1.5mg right up to 16.5mg.
            </p>
            <div className="spec-row">
              <span className="spec-pill">Tobacco-Free</span>
              <span className="spec-pill">7 Strength Levels</span>
              <span className="spec-pill">10+ Flavours</span>
              <span className="spec-pill">Mini + Slim Formats</span>
            </div>
          </div>
        </div>

        <div className="product-hero reverse">
          <div className="product-image">
            <img src="/zyn-flavour-range.jpg" alt="ZYN flavour range" />
          </div>
          <div className="product-info">
            <div className="product-maker">Find Your Flavour</div>
            <h2>The ZYN Range</h2>
            <p>
              ZYN&rsquo;s UK range focuses on clean, refreshing profiles. <strong>Cool Mint</strong> is the best-seller: crisp peppermint with a cooling sensation that works as an all-day pouch. <strong>Citrus</strong> is a bright lemon-lime with a tangy edge. <strong>Black Cherry</strong> delivers sweet, juicy berry flavour. <strong>Spearmint</strong> offers something softer than Cool Mint for beginners.
            </p>
            <p>
              At <strong>&pound;6.50 per can</strong> of 20 pouches on zyn.com (with multi-buy discounts up to 40% off), ZYN is dramatically cheaper than cigarettes. A pack-a-day smoker spending &pound;14.40 on cigarettes could switch to roughly one can of ZYN per day and save thousands per year.
            </p>
            <div className="spec-row">
              <span className="spec-pill">&pound;6.50 per Can</span>
              <span className="spec-pill">20 Pouches Per Can</span>
              <span className="spec-pill">Up to 40% Multi-Buy</span>
              <span className="spec-pill">Use Anywhere</span>
            </div>
          </div>
        </div>
      </div>

      <div className="section-divider"></div>

      {/* STRENGTHS */}
      <section id="strengths" className="np-section">
        <div className="section-label">Find Your Level</div>
        <div className="section-title">ZYN Strength Guide</div>
        <div className="section-body">
          <p>
            ZYN uses a dot system on every can so you can identify the strength at a glance. The range runs from 1.5mg (barely there) to 16.5mg (serious kick). If you&rsquo;re coming from cigarettes, most people start around <strong>6mg to 9mg</strong> and adjust from there.
          </p>
        </div>

        <div className="strength-ladder">
          <div className="strength-rung">
            <div className="strength-dots">&#9679;&#9675;&#9675;&#9675;&#9675;</div>
            <div className="strength-mg">1.5mg</div>
            <div className="strength-desc">X-Low. Barely any tingle. Perfect for tapering down.</div>
            <div className="strength-format">Mini</div>
          </div>
          <div className="strength-rung">
            <div className="strength-dots">&#9679;&#9679;&#9675;&#9675;&#9675;</div>
            <div className="strength-mg">3mg</div>
            <div className="strength-desc">Low. Gentle and smooth. Good starting point for light smokers.</div>
            <div className="strength-format">Mini</div>
          </div>
          <div className="strength-rung">
            <div className="strength-dots">&#9679;&#9679;&#9679;&#9675;&#9675;</div>
            <div className="strength-mg">6mg</div>
            <div className="strength-desc">Medium. Noticeable nicotine hit. Most popular for new users.</div>
            <div className="strength-format">Mini</div>
          </div>
          <div className="strength-rung">
            <div className="strength-dots">&#9679;&#9679;&#9679;&#9675;&#9675;</div>
            <div className="strength-mg">9mg</div>
            <div className="strength-desc">Strong. Solid satisfaction. Good match for regular smokers.</div>
            <div className="strength-format">Slim</div>
          </div>
          <div className="strength-rung">
            <div className="strength-dots">&#9679;&#9679;&#9679;&#9679;&#9675;</div>
            <div className="strength-mg">11mg</div>
            <div className="strength-desc">X-Strong. Pronounced hit. For experienced pouch users.</div>
            <div className="strength-format">Slim</div>
          </div>
          <div className="strength-rung">
            <div className="strength-dots">&#9679;&#9679;&#9679;&#9679;&#9675;</div>
            <div className="strength-mg">13.5mg</div>
            <div className="strength-desc">XX-Strong. Elevated intensity with enhanced cooling.</div>
            <div className="strength-format">Slim</div>
          </div>
          <div className="strength-rung">
            <div className="strength-dots">&#9679;&#9679;&#9679;&#9679;&#9679;</div>
            <div className="strength-mg">16.5mg</div>
            <div className="strength-desc">Max. The strongest ZYN available. For heavy smokers switching.</div>
            <div className="strength-format">Slim</div>
          </div>
        </div>
      </section>

      {/* FLAVOURS */}
      <section className="np-section">
        <div className="section-label">Explore the Range</div>
        <div className="section-title">ZYN Flavours</div>
        <div className="section-body">
          <p>All ZYN flavours use food-grade ingredients. No artificial sweeteners, no tobacco taste. Just clean, distinct flavour profiles designed to last the full 30 minutes.</p>
        </div>

        <div className="flavour-grid">
          <div className="flavour-chip"><span className="emoji">&#x1F9CA;</span><span className="fname">Cool Mint</span></div>
          <div className="flavour-chip"><span className="emoji">&#x1F33F;</span><span className="fname">Spearmint</span></div>
          <div className="flavour-chip"><span className="emoji">&#x1F34B;</span><span className="fname">Citrus</span></div>
          <div className="flavour-chip"><span className="emoji">&#x1F352;</span><span className="fname">Black Cherry</span></div>
          <div className="flavour-chip"><span className="emoji">&#x1F34F;</span><span className="fname">Apple Mint</span></div>
          <div className="flavour-chip"><span className="emoji">&#x2615;</span><span className="fname">Coffee</span></div>
          <div className="flavour-chip"><span className="emoji">&#x2744;&#xFE0F;</span><span className="fname">Menthol Ice</span></div>
          <div className="flavour-chip"><span className="emoji">&#x1FAD0;</span><span className="fname">Blackcurrant Frost</span></div>
          <div className="flavour-chip"><span className="emoji">&#x1F353;</span><span className="fname">Red Berry Fizz</span></div>
          <div className="flavour-chip"><span className="emoji">&#x1F336;&#xFE0F;</span><span className="fname">Chili Guava</span></div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* WHY POUCHES */}
      <section className="np-section">
        <div className="section-label">The Case for Pouches</div>
        <div className="section-title">Why Nicotine Pouches Are the Smartest Option</div>
        <div className="section-body">
          <p>
            On the SNUK Harm Reduction Nicotine Ladder, nicotine pouches sit at the very top. Here&rsquo;s why. Cigarettes are the worst because you&rsquo;re <strong>burning tobacco and inhaling smoke</strong>. Heated tobacco is far better because you heat instead of burn, cutting harmful chemicals by 95%. Vapes are better still because there&rsquo;s no tobacco at all, just heated liquid.
          </p>
          <p>
            But nicotine pouches go one step further. <strong>There&rsquo;s nothing to inhale. Nothing goes into your lungs.</strong> No combustion, no heating, no aerosol, no vapour. Nicotine is absorbed through the lining of your mouth, the same way it&rsquo;s been done in Scandinavia for over a century with snus (though pouches are tobacco-free, unlike snus).
          </p>
          <p>
            Sweden has the lowest smoking rate in Europe at under 6%, and the lowest rate of smoking-related disease. The reason? Swedish men have been using oral nicotine products instead of cigarettes for decades. The pouch is the endpoint. It&rsquo;s where nicotine consumption was always heading.
          </p>
        </div>

        <div className="feature-block">
          <h3>The Swedish Lesson</h3>
          <p>
            Sweden is on track to become the first country in Europe officially classified as &ldquo;smoke-free&rdquo; (under 5% daily smokers). Swedish men have the lowest rate of lung cancer in Europe. They didn&rsquo;t achieve this by making everyone quit nicotine. They achieved it by <strong>switching how nicotine is consumed</strong>, from combustion to oral products. The UK nicotine pouch market is now the fastest-growing segment in the category, with ZYN leading at 161% year-on-year growth. The same shift is starting here.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="np-section">
        <div className="section-label">Common Questions</div>
        <div className="section-title">What You Need to Know</div>

        <div className="faq-item">
          <div className="faq-q">Are nicotine pouches safe?</div>
          <div className="faq-a">No nicotine product is completely safe. Nicotine is addictive. However, nicotine pouches contain no tobacco leaf and involve no combustion or inhalation, which removes the primary mechanisms of harm associated with cigarettes. They are widely regarded as one of the lowest-risk ways to consume nicotine, though long-term studies are still ongoing.</div>
        </div>

        <div className="faq-item">
          <div className="faq-q">Are nicotine pouches legal in the UK?</div>
          <div className="faq-a">Yes. Tobacco-free nicotine pouches are legal for sale in the UK to adults aged 18 and over. They are classified as consumer nicotine products, not tobacco products, and are not subject to the same advertising restrictions as tobacco or vaping products.</div>
        </div>

        <div className="faq-item">
          <div className="faq-q">What&rsquo;s the difference between nicotine pouches and snus?</div>
          <div className="faq-a">Snus contains tobacco leaf and is banned from sale in the UK (except Sweden, which has an exemption). Nicotine pouches are tobacco-free. They contain nicotine derived from the tobacco plant, but the pouch itself has no tobacco in it. Same concept, cleaner product, and completely legal.</div>
        </div>

        <div className="faq-item">
          <div className="faq-q">Will nicotine pouches stain my teeth?</div>
          <div className="faq-a">No. Unlike smoking or snus, nicotine pouches are white and tobacco-free. They do not stain teeth.</div>
        </div>

        <div className="faq-item">
          <div className="faq-q">Can I use nicotine pouches on a plane?</div>
          <div className="faq-a">Yes. Because there is no smoke, no vapour, and no tobacco, nicotine pouches are permitted on UK flights and in most indoor environments where smoking and vaping are banned. They are completely undetectable to anyone around you.</div>
        </div>

        <div className="faq-item">
          <div className="faq-q">How does SNUK help with switching to nicotine pouches?</div>
          <div className="faq-a">SNUK is a free, independent 12-month programme. You speak to an AI voice coach weekly, learn about the science of harm reduction, and for completing your four weekly check-ins each month, you earn &pound;30 in credits redeemable for non tobacco nicotine products from iqos.com and zyn.com. SNUK does not sell products. We educate. The switch is yours to make.</div>
        </div>
      </section>

      {/* FINAL CTA */}
      <div className="final-cta" id="start">
        <div className="section-label">Ready?</div>
        <div className="section-title">The Cleanest Way to Get Your Nicotine.</div>
        <p>Join SNUK&rsquo;s free 12-month programme. Learn the science. Talk to your AI coach. Earn &pound;30/month in credits redeemable at zyn.com. No cost, no catch, no judgement. Just a smarter approach to nicotine.</p>
        {/* <div className="hero-cta-row" style={{ opacity: 1, animation: 'none' }}>
          <a href="/chat-v2" className="np-btn-primary">Back to AI Coach</a>
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
          SNUK Ltd is an independent smoking switching education platform. SNUK does not sell tobacco, nicotine, or any related products. SNUK is not affiliated with, endorsed by, or funded by any tobacco company. Nicotine pouches are not risk-free and contain nicotine, which is addictive. The best option for your health is to stop using tobacco and nicotine entirely. This content is intended for adult smokers (18+) in the United Kingdom only.
        </div>
      </footer>
    </div>
  );
};

export default NicotinePouchesPage;
