import React from 'react';
import Header from './Header';
import './HomePage.css';

const LandingPage: React.FC = () => {
  return (
    <div className="homepage">
      <Header />

      {/* HERO */}
      <div className="hero">
        <div className="hero-content">
          <div className="hero-label">Smart Nicotine UK</div>
          <h1 className="hero-headline">
            Smoking Is the <span className="highlight">Stupidest</span> Way<br />
            to Consume Nicotine.
          </h1>
          <p className="hero-sub">
            Nicotine isn't killing you. The smoke is. There are smarter, safer ways to get your nicotine, and they could give you back years of your life. SNUK shows you how, for free.
          </p>
          <div className="hero-cta-row">
            <a href="/assessment" className="hp-btn-primary">Join the Free Programme</a>
            <a href="#truth" className="hp-btn-ghost">Learn More</a>
          </div>
        </div>
      </div>

      {/* STAT BAR */}
      <div className="stat-bar">
        <div className="stat-bar-inner">
          <div className="stat-item">
            <div className="stat-number">80,000+</div>
            <div className="stat-label">UK smoking deaths every year</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5.3m</div>
            <div className="stat-label">Adult smokers in the UK</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">95%</div>
            <div className="stat-label">Less harmful than cigarettes*</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">&pound;0</div>
            <div className="stat-label">Cost to you. Always free.</div>
          </div>
        </div>
      </div>

      {/* THE TRUTH ABOUT NICOTINE */}
      <section id="truth" className="hp-section">
        <div className="section-label">The Truth</div>
        <h2 className="section-title">Nicotine Is Not the Enemy.<br />Smoking Is.</h2>
        <div className="section-body">
          <p>
            For decades, nicotine has been demonised. People hear &ldquo;nicotine&rdquo; and think cancer, lung disease, death. But here&rsquo;s what the science actually says: <strong>nicotine is not what&rsquo;s killing smokers.</strong> It&rsquo;s the smoke. The tar. The carbon monoxide. The 7,000+ chemicals released when you set fire to a cigarette. Nicotine is just the reason you keep going back.
          </p>
          <p>
            The UK&rsquo;s Royal Society for Public Health put it plainly: <span className="teal">nicotine on its own is no more harmful than caffeine.</span> It&rsquo;s a stimulant. It sharpens focus, aids concentration, and lifts mood. Sound familiar? That&rsquo;s because it works almost exactly like your morning coffee.
          </p>
        </div>

        <div className="analogy-box">
          <h3>Think About Coffee for a Second.</h3>
          <p>
            Caffeine is a drug. It&rsquo;s addictive. Miss your morning cup and you&rsquo;ll get headaches, feel irritable, lose focus. Sound like withdrawal? It is. But nobody tells you coffee is going to kill you. Nobody is running campaigns to ban your flat white. Why? <strong>Because caffeine isn&rsquo;t the problem. Just like nicotine isn&rsquo;t the problem.</strong>
          </p>
          <p style={{ marginTop: '1rem' }}>
            Now imagine if the only way to get caffeine was to set fire to coffee beans and inhale the smoke. That&rsquo;s essentially what a cigarette is. You&rsquo;re burning plant matter, inhaling toxic fumes, and getting your stimulant the most dangerous way possible. You wouldn&rsquo;t drink coffee that way. <strong>So why are you still consuming nicotine that way?</strong>
          </p>
        </div>
      </section>

      <div className="divider"></div>

      {/* WHY SMOKING IS THE WORST */}
      <section className="hp-section">
        <div className="section-label">The Science</div>
        <h2 className="section-title">What Actually Kills You</h2>
        <div className="section-body">
          <p>
            A cigarette produces over <strong>7,000 chemicals</strong> when it burns. At least 70 of them are known to cause cancer. The tar coats your lungs. The carbon monoxide starves your blood of oxygen. The formaldehyde, arsenic, and ammonia damage every organ in your body. Half of all long-term smokers will die from a smoking-related disease.
          </p>
          <p>
            Nicotine is present in all of this, yes. But nicotine isn&rsquo;t the thing causing the damage. It&rsquo;s the <strong>combustion</strong>, the act of burning tobacco and breathing in the smoke. Remove the fire, remove the smoke, and you remove the vast majority of the harm.
          </p>
        </div>
      </section>

      <div className="divider"></div>

      {/* SMARTER OPTIONS */}
      <div className="comparison">
        <div className="section-label">Your Options</div>
        <h2 className="section-title">Smarter Ways to Get Your Nicotine</h2>
        <p style={{ color: 'var(--hp-grey)', fontSize: '1.05rem', marginBottom: '1rem', maxWidth: '700px', lineHeight: 1.75 }}>
          You don&rsquo;t have to give up nicotine. You just have to stop burning it.
        </p>

        <div className="comparison-grid">
          <div className="compare-card bad">
            <div className="card-icon">&#x1F525;</div>
            <h3>Cigarettes</h3>
            <p>Burns tobacco at 900&deg;C. Produces tar, carbon monoxide, and 7,000+ chemicals. Causes cancer, heart disease, stroke, COPD. Costs over &pound;5,000 per year. Stains teeth. Ages skin. Makes everything you own stink. Kills 1 in 2 long-term users.</p>
          </div>
          <div className="compare-card good">
            <div className="card-icon">&#x2668;&#xFE0F;</div>
            <h3>Heated Tobacco</h3>
            <p>Heats tobacco at ~350&deg;C instead of burning it. No combustion means no tar, no carbon monoxide. Public Health England estimates up to 95% less harmful than cigarettes.* Still delivers nicotine. Still feels like smoking. Costs around half the price.</p>
          </div>
          <div className="compare-card good">
            <div className="card-icon">&#x25CB;</div>
            <h3>Nicotine Pouches</h3>
            <p>Small pouches placed under the lip. No tobacco leaf, no smoke, no vapour, no device. Completely discreet. Use them anywhere. Growing faster than any other nicotine category in the UK (82% year on year). Clean, simple, modern.</p>
          </div>
          <div className="compare-card good">
            <div className="card-icon">&#x1F4A8;</div>
            <h3>Regulated Vapes</h3>
            <p>Heats a liquid containing nicotine into vapour. No combustion, no tobacco. Wide variety of flavours and strengths. Regulated products from established manufacturers have a strong safety track record compared to cigarettes.</p>
          </div>
        </div>
      </div>

      <div className="divider"></div>

      {/* THE NICOTINE LADDER */}
      <section className="hp-section">
        <div className="section-label">The Ladder</div>
        <h2 className="section-title">The Smarter Nicotine Ladder</h2>
        <div className="section-body">
          <p>
            Think of nicotine delivery as a ladder. The bottom rung is the most dangerous. Each step up removes harm while keeping the nicotine your body is used to. You don&rsquo;t have to quit. You upgrade.
          </p>
        </div>

        <div className="ladder">
          <div className="ladder-rung best">
            <div className="rung-rank">Smartest</div>
            <div className="rung-text">
              <h4>Nicotine Pouches</h4>
              <p>No tobacco, no smoke, no vapour, no device. The cleanest form of nicotine delivery available.</p>
            </div>
          </div>
          <div className="ladder-rung better">
            <div className="rung-rank">Smarter</div>
            <div className="rung-text">
              <h4>Regulated Vapes</h4>
              <p>No combustion, no tobacco. Vapour, not smoke.</p>
            </div>
          </div>
          <div className="ladder-rung better">
            <div className="rung-rank">Smart</div>
            <div className="rung-text">
              <h4>Heated Tobacco</h4>
              <p>Heats instead of burns. No tar, no carbon monoxide. Up to 95% less harmful.*</p>
            </div>
          </div>
          <div className="ladder-rung worst">
            <div className="rung-rank">Worst</div>
            <div className="rung-text">
              <h4>Cigarettes</h4>
              <p>7,000+ chemicals. Tar. Carbon monoxide. Half of long-term smokers die from it. You&rsquo;re here now.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* HOW SNUK WORKS */}
      <section id="start" className="hp-section">
        <div className="section-label">The Programme</div>
        <h2 className="section-title">How SNUK Works</h2>
        <div className="section-body">
          <p>
            SNUK is a free 12-month smoking switching programme. No products to buy. No strings attached. Just science-backed education delivered by an AI voice coach built on David Haye&rsquo;s cloned voice.
          </p>
        </div>

        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h4>Sign Up in 2 Minutes</h4>
              <p>Quick smart forms: your name, smoking history, and what you&rsquo;ve tried before. That&rsquo;s it.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h4>Talk to David Every Week</h4>
              <p>Four weekly check-ins per month with your AI voice coach. Real conversation, not a chatbot reading a script. Tailored to your situation, your triggers, your progress.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h4>Learn the Science</h4>
              <p>Understand why you smoke, what the smoke is actually doing to you, and what the alternatives really are. Every fact backed by peer-reviewed research.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h4>Earn &pound;30 Monthly Credits</h4>
              <p>Complete your four weekly check-ins and earn &pound;30 in credits every month. Spend them on nicotine pouches and vapes to try the alternatives yourself, free.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">5</div>
            <div className="step-content">
              <h4>Upgrade at Your Own Pace</h4>
              <p>No pressure. No deadlines. Move up the nicotine ladder when you&rsquo;re ready. Some people switch in a week. Some take months. Both are fine.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* NICOTINE BENEFITS */}
      <section className="hp-section">
        <div className="section-label">What They Don&rsquo;t Tell You</div>
        <h2 className="section-title">Nicotine Actually Has Benefits</h2>
        <div className="section-body">
          <p>
            Nicotine is a naturally occurring compound found in the tobacco plant. It&rsquo;s a stimulant, just like caffeine. And like caffeine, when separated from the harmful delivery method, research shows it has measurable cognitive effects.
          </p>
          <p>
            Studies have found that nicotine can <strong>improve sustained attention and focus</strong>, <strong>enhance working memory</strong>, and <strong>lift mood and reduce stress</strong>. It stimulates the release of neurotransmitters including dopamine, serotonin, and acetylcholine, the same chemicals involved in learning and motivation. Researchers at Vanderbilt University found nicotine improved cognitive performance even in non-smokers.
          </p>
          <p>
            Nobody panics about caffeine. Nobody runs awareness campaigns about your espresso habit. The difference is purely about <strong>how</strong> you consume the stimulant. Caffeine through a cup of coffee is fine. Caffeine delivered by setting fire to coffee beans and inhaling the fumes would be insane. That&rsquo;s exactly what you&rsquo;re doing with a cigarette.
          </p>
          <p>
            <span className="teal">Keep the nicotine. Lose the smoke.</span> That&rsquo;s the whole idea.
          </p>
        </div>
      </section>

      <div className="divider"></div>

      {/* FINAL CTA */}
      <div className="callout">
        <div className="callout-box">
          <h2>Still Smoking?<br /><span style={{ color: 'var(--hp-teal)' }}>Let&rsquo;s Talk.</span></h2>
          <p>
            SNUK is completely free. 12 months of AI coaching, science-backed education, and &pound;30 monthly credits to try safer alternatives. No products sold. No catch. Just a smarter way forward.
          </p>
          <a href="/assessment" className="hp-btn-primary">Start Your Free Programme</a>
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">
          <div className="nav-dot"></div>
          <span>SNUK</span>
        </div>
        <div className="footer-text">
          SNUK Ltd. Independent smoking switching education.<br />
          *Based on Public Health England&rsquo;s assessment that heated tobacco products are significantly less harmful than cigarettes.<br />
          SNUK does not sell tobacco or nicotine products. SNUK is not a medical service.<br />
          All health information is based on peer-reviewed science and official public health guidance.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
