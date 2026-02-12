import './NicotineOptions.css';

const NicotineOptions = () => {
  return (
    <div className="nicotine-options">
      {/* Credits Banner */}
      <div className="no-credits-banner">
        <p>Complete 4 weekly check-ins to earn <strong>&pound;30/month</strong> in product credits</p>
      </div>

      {/* ==================== HEATED TOBACCO ==================== */}
      <div className="no-section">
        <div className="no-section-header">
          <div className="no-section-label">Category 01</div>
          <h2 className="no-section-title">Heated Tobacco</h2>
          <p className="no-section-sub">Real tobacco, heated not burned. Up to 95% fewer harmful chemicals than cigarettes. The closest experience to smoking without the combustion.</p>
        </div>

        {/* IQOS ILUMA */}
        <div className="no-product-card">
          <img className="no-product-img" src="/iqos-iluma-range.jpg" alt="IQOS ILUMA range" />
          <div className="no-product-body">
            <div className="no-product-name">IQOS ILUMA</div>
            <div className="no-product-maker">Philip Morris International</div>
            <p className="no-product-desc">The UK&rsquo;s leading heated tobacco system. SMARTCORE INDUCTION SYSTEM heats tobacco from within, with no blade, no cleaning, no burning. Three devices to suit your style.</p>
            <div className="no-stats">
              <div className="no-stat"><div className="no-stat-value">&pound;9 &ndash; &pound;39</div><div className="no-stat-label">Device range</div></div>
              <div className="no-stat"><div className="no-stat-value">&pound;6 &ndash; &pound;7</div><div className="no-stat-label">TEREA (20 sticks)</div></div>
              <div className="no-stat"><div className="no-stat-value">95%</div><div className="no-stat-label">UK market share</div></div>
              <div className="no-stat"><div className="no-stat-value">20+</div><div className="no-stat-label">TEREA flavours</div></div>
            </div>
            <div className="no-science">
              <div className="no-science-title">The Science</div>
              <p className="no-science-text">By heating tobacco to 350&deg;C instead of burning at 600&deg;C+, IQOS produces on average 95% lower levels of harmful chemicals compared to cigarettes (excluding nicotine). Supported by 30+ peer-reviewed studies.</p>
            </div>
            <div className="no-cta-row">
              <a href="https://www.iqos.com" target="_blank" rel="noopener noreferrer" className="no-cta no-cta-primary">Go to Store to Buy</a>
              <a href="/heated-tobacco" className="no-cta no-cta-secondary">Learn More</a>
            </div>
          </div>
        </div>

        {/* Ploom X Advanced */}
        <div className="no-product-card">
          <img className="no-product-img" src="/ploom-x-advanced-evo.jpg" alt="Ploom X Advanced device and EVO sticks" />
          <div className="no-product-body">
            <div className="no-product-name">Ploom X Advanced</div>
            <div className="no-product-maker">JTI (Japan Tobacco International)</div>
            <p className="no-product-desc">JTI&rsquo;s heated tobacco device using HeatFlow technology. A budget-friendly alternative with touch-to-start activation and 20&ndash;23 uses per charge. Won Product of the Year 2024 in the Heated Tobacco category.</p>
            <div className="no-stats">
              <div className="no-stat"><div className="no-stat-value">&pound;5 &ndash; &pound;7</div><div className="no-stat-label">Device price</div></div>
              <div className="no-stat"><div className="no-stat-value">&pound;5.00</div><div className="no-stat-label">EVO sticks (20 pack)</div></div>
              <div className="no-stat"><div className="no-stat-value">~5%</div><div className="no-stat-label">UK market share</div></div>
              <div className="no-stat"><div className="no-stat-value">9</div><div className="no-stat-label">EVO flavours</div></div>
            </div>
            <div className="no-science">
              <div className="no-science-title">The Science</div>
              <p className="no-science-text">JTI reports a 90&ndash;95% reduction in 9 WHO-recommended toxins compared to a reference cigarette. Independent long-term studies are more limited than IQOS.</p>
            </div>
            <div className="no-cta-row">
              <a href="https://www.ploom.co.uk" target="_blank" rel="noopener noreferrer" className="no-cta no-cta-secondary">Visit ploom.co.uk</a>
              <a href="/heated-tobacco" className="no-cta no-cta-secondary">Learn More</a>
            </div>
          </div>
        </div>
      </div>

      <div className="no-divider"></div>

      {/* ==================== VAPES ==================== */}
      <div className="no-section">
        <div className="no-section-header">
          <div className="no-section-label">Category 02</div>
          <h2 className="no-section-title">Vapes</h2>
          <p className="no-section-sub">No tobacco, no combustion. A heated nicotine liquid that delivers satisfaction in a compact, pocket-friendly format.</p>
        </div>

        {/* VEEV ONE */}
        <div className="no-product-card">
          <img className="no-product-img" src="/veev-one-device.jpg" alt="VEEV ONE vape device" />
          <div className="no-product-body">
            <div className="no-product-name">VEEV ONE</div>
            <div className="no-product-maker">Philip Morris International</div>
            <p className="no-product-desc">PMI&rsquo;s closed-pod vape system with MESH heating technology for consistent flavour from first to last puff. Prefilled pods, no mess, no refilling. Rechargeable via USB-C.</p>
            <div className="no-stats">
              <div className="no-stat"><div className="no-stat-value">From &pound;5.99</div><div className="no-stat-label">Starter kit</div></div>
              <div className="no-stat"><div className="no-stat-value">&pound;5.99</div><div className="no-stat-label">Pod 2-pack</div></div>
              <div className="no-stat"><div className="no-stat-value">~500</div><div className="no-stat-label">Puffs per pod</div></div>
              <div className="no-stat"><div className="no-stat-value">10+</div><div className="no-stat-label">Flavour pods</div></div>
            </div>
            <div className="no-flavour-grid">
              <span className="no-flavour">Sour Apple</span>
              <span className="no-flavour">Velvety Mint</span>
              <span className="no-flavour">Strawberry X</span>
              <span className="no-flavour">Blueberry</span>
              <span className="no-flavour">Classic Tobacco</span>
              <span className="no-flavour">Mango Tropical</span>
              <span className="no-flavour">Watermelon</span>
            </div>
            <div className="no-science">
              <div className="no-science-title">The Science</div>
              <p className="no-science-text">Vapes heat liquid containing nicotine, propylene glycol, and flavourings without combustion. Public Health England has stated that vaping is at least 95% less harmful than smoking cigarettes.</p>
            </div>
            <div className="no-cta-row">
              <a href="https://www.veev-one.com" target="_blank" rel="noopener noreferrer" className="no-cta no-cta-primary">Go to Store to Buy</a>
              <a href="/vapes" className="no-cta no-cta-secondary">Learn More</a>
            </div>
          </div>
        </div>
      </div>

      <div className="no-divider"></div>

      {/* ==================== NICOTINE POUCHES ==================== */}
      <div className="no-section">
        <div className="no-section-header">
          <div className="no-section-label">Category 03</div>
          <h2 className="no-section-title">Nicotine Pouches</h2>
          <p className="no-section-sub">Tobacco-free, smoke-free, vapour-free. A small white pouch placed under the lip delivers nicotine discreetly. Use anywhere, anytime.</p>
        </div>

        {/* ZYN */}
        <div className="no-product-card">
          <img className="no-product-img" src="/zyn-pouches.jpg" alt="ZYN nicotine pouches" />
          <div className="no-product-body">
            <div className="no-product-name">ZYN</div>
            <div className="no-product-maker">Philip Morris International (Swedish Match)</div>
            <p className="no-product-desc">The world&rsquo;s fastest-growing nicotine pouch brand. 100% tobacco-free, completely discreet. Place under your lip for up to 30 minutes of clean nicotine delivery. No spitting required.</p>
            <div className="no-stats">
              <div className="no-stat"><div className="no-stat-value">&pound;6.50</div><div className="no-stat-label">Per tin (20 pouches)</div></div>
              <div className="no-stat"><div className="no-stat-value">161%</div><div className="no-stat-label">YoY growth (UK)</div></div>
              <div className="no-stat"><div className="no-stat-value">30 min</div><div className="no-stat-label">Per pouch</div></div>
              <div className="no-stat"><div className="no-stat-value">100%</div><div className="no-stat-label">Tobacco-free</div></div>
            </div>
            <div className="no-strength-row">
              <div className="no-strength"><div className="no-strength-val">3mg</div><div className="no-strength-lbl">Mini</div></div>
              <div className="no-strength"><div className="no-strength-val">6mg</div><div className="no-strength-lbl">Regular</div></div>
              <div className="no-strength"><div className="no-strength-val">9mg</div><div className="no-strength-lbl">Strong</div></div>
              <div className="no-strength"><div className="no-strength-val">11mg</div><div className="no-strength-lbl">Extra Strong</div></div>
            </div>
            <div className="no-flavour-grid">
              <span className="no-flavour">Cool Mint</span>
              <span className="no-flavour">Spearmint</span>
              <span className="no-flavour">Citrus</span>
              <span className="no-flavour">Espresso</span>
              <span className="no-flavour">Chilli Guava</span>
              <span className="no-flavour">Icy Blackcurrant</span>
            </div>
            <div className="no-science">
              <div className="no-science-title">The Science</div>
              <p className="no-science-text">Nicotine pouches contain no tobacco and produce no smoke or vapour. While nicotine is addictive, pouches eliminate exposure to the thousands of harmful chemicals produced by combustion.</p>
            </div>
            <div className="no-cta-row">
              <a href="https://www.zyn.com" target="_blank" rel="noopener noreferrer" className="no-cta no-cta-primary">Go to Store to Buy</a>
              <a href="/nicotine-pouches" className="no-cta no-cta-secondary">Learn More</a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="no-footer">
        <p>SNUK Ltd is an independent smoking switching education platform.<br />
        SNUK does not sell nicotine products and receives no commission from any manufacturer.<br />
        Product information is presented for educational purposes only.<br />
        All health claims are sourced from peer-reviewed studies and public health authorities.<br /><br />
        <strong style={{ color: 'var(--no-teal)' }}>Your choices. Your journey. Your pace.</strong></p>
      </div>
    </div>
  );
};

export default NicotineOptions;
