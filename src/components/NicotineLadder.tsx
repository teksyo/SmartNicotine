function NicotineLadder() {
  return (
    <section id="nicotine-ladder" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nicotine Ladder of Health
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Smoking harms the body because of combustion, not nicotine itself. This ladder shows common nicotine options from highest harm to lowest harm so you can see where you are today and what safer steps might look like.
          </p>
        </div>

        <div className="space-y-8">
          {/* Level 1 - Smoking */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
            <div className="mb-4">
              <span className="inline-block bg-gray-600 text-white px-3 py-1 rounded text-sm font-medium">Level 1</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Combustible Cigarettes
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Cigarettes burn tobacco at very high temperatures, creating smoke that contains thousands of chemicals including tar and carbon monoxide. Around half of long-term smokers die from smoking-related disease. Nicotine is present, but the main harm comes from combustion.
            </p>
          </div>

          {/* Level 2 - Heated Tobacco */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
            <div className="mb-4">
              <span className="inline-block bg-gray-600 text-white px-3 py-1 rounded text-sm font-medium">Level 2</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Heated Tobacco
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Heated tobacco devices warm tobacco to about 350 degrees Celsius without burning it, which removes smoke and reduces harmful chemicals by around 90-95% compared with cigarettes. There is still nicotine and some risk, but no tar and far less carbon monoxide.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <img src="/iqos.jpg" alt="IQOS heated tobacco device" className="w-full h-32 object-contain rounded-lg mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">IQOS</h4>
                <p className="text-sm text-gray-600 mb-4">A smoke-free heated tobacco device for adult smokers who would otherwise continue to smoke.</p>
                <a href="https://www.iqos.com" className="inline-block bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors">
                  View on IQOS
                </a>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <img src="/ploom.jpg" alt="Ploom heated tobacco device" className="w-full h-32 object-contain rounded-lg mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Ploom</h4>
                <p className="text-sm text-gray-600 mb-4">A compact heated tobacco product that warms tobacco sticks instead of burning them.</p>
                <a href="https://www.ploom.co.uk" className="inline-block bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors">
                  View on Ploom
                </a>
              </div>
            </div>
          </div>

          {/* Level 3 - Vapes */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
            <div className="mb-4">
              <span className="inline-block bg-gray-600 text-white px-3 py-1 rounded text-sm font-medium">Level 3</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              UK Regulated Vapes
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              UK regulated vapes use a nicotine-containing liquid which is heated into vapour. They do not contain tobacco and are tightly regulated on ingredients, nicotine strength and packaging. Evidence from Public Health England and other bodies suggests they are far less harmful than smoking and can help some smokers quit.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h4 className="font-semibold text-gray-900 mb-2">Closed Pod Vape</h4>
                <p className="text-sm text-gray-600 mb-4">Simple pre-filled device for adult smokers who want something easy to start with.</p>
                <a href="https://www.gov.uk/guidance/e-cigarettes-regulations-for-consumer-products" className="inline-block bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors">
                  See regulated vape options
                </a>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h4 className="font-semibold text-gray-900 mb-2">Refillable Vape</h4>
                <p className="text-sm text-gray-600 mb-4">Device where you refill the tank with e-liquid, often cheaper for regular users.</p>
                <a href="https://www.gov.uk/guidance/e-cigarettes-regulations-for-consumer-products" className="inline-block bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors">
                  See regulated vape options
                </a>
              </div>
            </div>
          </div>

          {/* Level 4 - Nicotine Pouches */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
            <div className="mb-4">
              <span className="inline-block bg-gray-600 text-white px-3 py-1 rounded text-sm font-medium">Level 4</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Nicotine Pouches
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Small white pouches that sit under the lip and release pharmaceutical-grade nicotine through the gums. They contain no tobacco and no smoke, do not require inhaling and are popular with adults who want a discreet, lower-harm alternative to smoking. They are still addictive and for existing nicotine users only.
            </p>
            
            <div className="bg-white rounded-lg p-6 shadow-md max-w-md">
              <h4 className="font-semibold text-gray-900 mb-2">Nicotine Pouches</h4>
              <p className="text-sm text-gray-600 mb-4">Tobacco-free pouches that release nicotine through the lining of the mouth.</p>
              <a href="#" className="inline-block bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors">
                Learn more about pouches
              </a>
            </div>
          </div>

          {/* Level 5 - NRT */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
            <div className="mb-4">
              <span className="inline-block bg-gray-600 text-white px-3 py-1 rounded text-sm font-medium">Level 5</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Nicotine Replacement Therapy (NRT)
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Clinically tested products such as gum, patches, lozenges, sprays and microtabs that deliver a measured dose of pharmaceutical-grade nicotine without smoke. Recommended in many stop-smoking guidelines to help manage withdrawal and cravings.
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-md">
                <img src="/nicorette-2mg-nicotine.jpeg" alt="Nicorette 2mg nicotine lozenge" className="w-full h-24 object-contain rounded mb-3" />
                <h4 className="font-semibold text-gray-900 text-sm mb-2">Nicorette Lozenge 2mg</h4>
                <p className="text-xs text-gray-600 mb-3">Nicotine replacement product used to relieve cravings as part of a quit attempt, used according to pack instructions.</p>
                {/*<a href="/boots/nicorette-lozenge" className="inline-block bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700 transition-colors">
                  View product info
                </a>*/}
              </div>

              <div className="bg-white rounded-lg p-4 shadow-md">
                <img src="/nicorette-2mg-gum.jpeg" alt="Nicorette 2mg nicotine gum" className="w-full h-24 object-contain rounded mb-3" />
                <h4 className="font-semibold text-gray-900 text-sm mb-2">Nicorette Gum 2mg</h4>
                <p className="text-xs text-gray-600 mb-3">Medicated chewing gum that helps manage withdrawal symptoms when trying to quit smoking.</p>
                {/*<a href="/boots/nicorette-gum" className="inline-block bg-green-500 text-white px-3 py-1 rounded text-xs hover:bg-green-600 transition-colors">
                  View product info
                </a>*/}
              </div>

              <div className="bg-white rounded-lg p-4 shadow-md">
                <img src="/nicorette-quickmist.jpeg" alt="Nicorette QuickMist mouth spray" className="w-full h-24 object-contain rounded mb-3" />
                <h4 className="font-semibold text-gray-900 text-sm mb-2">Nicorette QuickMist</h4>
                <p className="text-xs text-gray-600 mb-3">Fast-acting mouth spray providing rapid relief from cravings and withdrawal symptoms.</p>
                {/*<a href="/boots/nicorette-quickmist" className="inline-block bg-green-500 text-white px-3 py-1 rounded text-xs hover:bg-green-600 transition-colors">
                  View product info
                </a>*/}
              </div>

              <div className="bg-white rounded-lg p-4 shadow-md">
                <img src="/nicorette-invisi.jpeg" alt="Nicorette Invisi patch 25mg" className="w-full h-24 object-contain rounded mb-3" />
                <h4 className="font-semibold text-gray-900 text-sm mb-2">Nicorette Invisi Patch 25mg</h4>
                <p className="text-xs text-gray-600 mb-3">Discreet 16-hour patch that delivers steady nicotine throughout the day to reduce cravings.</p>
                {/*<a href="/boots/nicorette-patch" className="inline-block bg-green-500 text-white px-3 py-1 rounded text-xs hover:bg-green-600 transition-colors">
                  View product info
                </a>*/}
              </div>

              <div className="bg-white rounded-lg p-4 shadow-md">
                <img src="/nicorette-inhalator.jpeg" alt="Nicorette Inhalator" className="w-full h-24 object-contain rounded mb-3" />
                <h4 className="font-semibold text-gray-900 text-sm mb-2">Nicorette Inhalator</h4>
                <p className="text-xs text-gray-600 mb-3">Inhaler device that mimics the hand-to-mouth action of smoking while delivering nicotine.</p>
                {/*<a href="/boots/nicorette-inhalator" className="inline-block bg-green-500 text-white px-3 py-1 rounded text-xs hover:bg-green-600 transition-colors">
                  View product info
                </a>*/}
              </div>

              <div className="bg-white rounded-lg p-4 shadow-md">
                <img src="/nicorette-microtab.jpeg" alt="Nicorette Microtab 2mg" className="w-full h-24 object-contain rounded mb-3" />
                <h4 className="font-semibold text-gray-900 text-sm mb-2">Nicorette Microtab 2mg</h4>
                <p className="text-xs text-gray-600 mb-3">Small tablets that dissolve under the tongue for discreet nicotine replacement therapy.</p>
                {/*<a href="/boots/nicorette-microtab" className="inline-block bg-green-500 text-white px-3 py-1 rounded text-xs hover:bg-green-600 transition-colors">
                  View product info
                </a>*/}
              </div>

              <div className="bg-white rounded-lg p-4 shadow-md">
                <img src="/niquitin.jpeg" alt="NiQuitin Clear patch 21mg" className="w-full h-24 object-contain rounded mb-3" />
                <h4 className="font-semibold text-gray-900 text-sm mb-2">NiQuitin Clear Patch 21mg</h4>
                <p className="text-xs text-gray-600 mb-3">Transparent 24-hour patch providing continuous nicotine support throughout day and night.</p>
                {/*<a href="/boots/niquitin-patch" className="inline-block bg-green-500 text-white px-3 py-1 rounded text-xs hover:bg-green-600 transition-colors">
                  View product info
                </a>*/}
              </div>

              <div className="bg-white rounded-lg p-4 shadow-md">
                <img src="/niquitin-minis.jpeg" alt="NiQuitin Minis lozenges 4mg" className="w-full h-24 object-contain rounded mb-3" />
                <h4 className="font-semibold text-gray-900 text-sm mb-2">NiQuitin Minis 4mg</h4>
                <p className="text-xs text-gray-600 mb-3">Small lozenges that provide controlled nicotine release to help cope with strong cravings.</p>
                {/*<a href="/boots/niquitin-minis" className="inline-block bg-green-500 text-white px-3 py-1 rounded text-xs hover:bg-green-600 transition-colors">
                  View product info
                </a>*/}
              </div>

              <div className="bg-white rounded-lg p-4 shadow-md">
                <img src="/niquitin-lozenges.jpeg" alt="NiQuitin Mint lozenges 2mg" className="w-full h-24 object-contain rounded mb-3" />
                <h4 className="font-semibold text-gray-900 text-sm mb-2">NiQuitin Mint Lozenges 2mg</h4>
                <p className="text-xs text-gray-600 mb-3">Mint-flavoured lozenges offering gradual nicotine release for craving management.</p>
                {/*<a href="/boots/niquitin-mint" className="inline-block bg-green-500 text-white px-3 py-1 rounded text-xs hover:bg-green-600 transition-colors">
                  View product info
                </a>*/}
              </div>
            </div>
          </div>

          {/* Level 6 - Nicotine Free */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
            <div className="mb-4">
              <span className="inline-block bg-gray-600 text-white px-3 py-1 rounded text-sm font-medium">Level 6</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Nicotine Free
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Many people step down from smoking to lower-risk products, and some then choose to stop nicotine completely. The final choice is personal, but the lowest health risk is achieved when both smoke and nicotine are no longer used.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NicotineLadder;