function NicotineLadder() {
  return (
    <section id="nicotine-ladder" className="py-16 relative tracking-wide" style={{
      backgroundImage: 'linear-gradient(rgba(26, 26, 46, 0.9), rgba(15, 52, 96, 0.9)), url("/background.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#ffffff' }}>
            Nicotine Ladder of Health
          </h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#ffffff' }}>
            Smoking harms the body because of combustion, not nicotine itself. This ladder shows common nicotine options from highest harm to lowest harm so you can see where you are today and what safer steps might look like.
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {/* Level 0 - Smoking */}
          <div className="rounded-lg p-6 sm:p-8 shadow-lg" style={{ 
            backgroundColor: 'rgba(26, 26, 46, 0.8)', 
            border: '1px solid rgba(64, 224, 208, 0.3)',
            backdropFilter: 'blur(10px)'
          }}>
            <div className="mb-4">
              <span className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-3 py-1 rounded text-sm font-medium">Level 0</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: '#ffffff' }}>
              Combustible Cigarettes
            </h3>
            <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#ffffff' }}>
              Cigarettes burn tobacco at very high temperatures, creating smoke that contains thousands of chemicals including tar and carbon monoxide. Around half of long-term smokers die from smoking-related disease. Nicotine is present, but the main harm comes from combustion.
            </p>
          </div>

          {/* Level 1 - Heated Tobacco */}
          <div className="rounded-lg p-6 sm:p-8 shadow-lg" style={{ 
            backgroundColor: 'rgba(26, 26, 46, 0.8)', 
            border: '1px solid rgba(64, 224, 208, 0.3)',
            backdropFilter: 'blur(10px)'
          }}>
            <div className="mb-4">
              <span className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-3 py-1 rounded text-sm font-medium">Level 1</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: '#ffffff' }}>
              Heated Tobacco
            </h3>
            <p className="text-sm sm:text-base leading-relaxed mb-6" style={{ color: '#ffffff' }}>
              Heated tobacco devices warm tobacco to about 350 degrees Celsius without burning it, which removes smoke and reduces harmful chemicals by around 90-95% compared with cigarettes. There is still nicotine and some risk, but no tar and far less carbon monoxide.
            </p>
            
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="rounded-lg p-4 sm:p-6 shadow-md" style={{ 
                backgroundColor: 'rgba(15, 52, 96, 0.7)', 
                backdropFilter: 'blur(5px)' 
              }}>
                <img src="/iqos.png" alt="IQOS heated tobacco device" className="bg-white w-full h-32 object-contain rounded-lg mb-4" />
                <h4 className="font-semibold mb-2" style={{ color: '#ffffff' }}>IQOS</h4>
                <p className="text-xs sm:text-sm mb-4" style={{ color: '#ffffff' }}>A smoke-free heated tobacco device for adult smokers who would otherwise continue to smoke.</p>
                <a href="https://www.iqos.com" target="_blank" className="inline-block bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors">
                  View on IQOS
                </a>
              </div>
              
              <div className="rounded-lg p-4 sm:p-6 shadow-md" style={{ 
                backgroundColor: 'rgba(15, 52, 96, 0.7)', 
                backdropFilter: 'blur(5px)' 
              }}>
                <img src="/ploom.jpg" alt="Ploom heated tobacco device" className="bg-white w-full h-32 object-contain rounded-lg mb-4" />
                <h4 className="font-semibold mb-2" style={{ color: '#ffffff' }}>Ploom</h4>
                <p className="text-xs sm:text-sm mb-4" style={{ color: '#ffffff' }}>A compact heated tobacco product that warms tobacco sticks instead of burning them.</p>
                <a href="https://www.ploom.co.uk" target="_blank" className="inline-block bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors">
                  View on Ploom
                </a>
              </div>
            </div>
          </div>

          {/* Level 2 - Vapes */}
          <div className="rounded-lg p-6 sm:p-8 shadow-lg" style={{ 
            backgroundColor: 'rgba(26, 26, 46, 0.8)', 
            border: '1px solid rgba(64, 224, 208, 0.3)',
            backdropFilter: 'blur(10px)'
          }}>
            <div className="mb-4">
              <span className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-3 py-1 rounded text-sm font-medium">Level 2</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: '#ffffff' }}>
              UK Regulated Vapes
            </h3>
            <p className="text-sm sm:text-base leading-relaxed mb-6" style={{ color: '#ffffff' }}>
              UK regulated vapes use a nicotine-containing liquid which is heated into vapour. They do not contain tobacco and are tightly regulated on ingredients, nicotine strength and packaging. Evidence from Public Health England and other bodies suggests they are far less harmful than smoking and can help some smokers quit.
            </p>
            
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="rounded-lg p-4 sm:p-6 shadow-md" style={{ 
                backgroundColor: 'rgba(15, 52, 96, 0.7)', 
                backdropFilter: 'blur(5px)' 
              }}>
                <h4 className="font-semibold mb-2" style={{ color: '#ffffff' }}>Closed Pod Vape</h4>
                <p className="text-xs sm:text-sm mb-4" style={{ color: '#ffffff' }}>Simple pre-filled device for adult smokers who want something easy to start with.</p>
                <a href="https://www.gov.uk/guidance/e-cigarettes-regulations-for-consumer-products" target="_blank" className="inline-block bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors">
                  See regulated vape options
                </a>
              </div>
              
              <div className="rounded-lg p-4 sm:p-6 shadow-md" style={{ 
                backgroundColor: 'rgba(15, 52, 96, 0.7)', 
                backdropFilter: 'blur(5px)' 
              }}>
                <h4 className="font-semibold mb-2" style={{ color: '#ffffff' }}>Refillable Vape</h4>
                <p className="text-xs sm:text-sm mb-4" style={{ color: '#ffffff' }}>Device where you refill the tank with e-liquid, often cheaper for regular users.</p>
                <a href="https://www.gov.uk/guidance/e-cigarettes-regulations-for-consumer-products" target="_blank" className="inline-block bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors">
                  See regulated vape options
                </a>
              </div>
            </div>
          </div>

          {/* Level 3 - Nicotine Pouches */}
          <div className="rounded-lg p-6 sm:p-8 shadow-lg" style={{ 
            backgroundColor: 'rgba(26, 26, 46, 0.8)', 
            border: '1px solid rgba(64, 224, 208, 0.3)',
            backdropFilter: 'blur(10px)'
          }}>
            <div className="mb-4">
              <span className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-3 py-1 rounded text-sm font-medium">Level 3</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: '#ffffff' }}>
              Nicotine Pouches
            </h3>
            <p className="text-sm sm:text-base leading-relaxed mb-6" style={{ color: '#ffffff' }}>
              Small white pouches that sit under the lip and release pharmaceutical-grade nicotine through the gums. They contain no tobacco and no smoke, do not require inhaling and are popular with adults who want a discreet, lower-harm alternative to smoking. They are still addictive and for existing nicotine users only.
            </p>
            
            <div className="rounded-lg p-4 sm:p-6 shadow-md max-w-md" style={{ 
              backgroundColor: 'rgba(15, 52, 96, 0.7)', 
              backdropFilter: 'blur(5px)' 
            }}>
              <h4 className="font-semibold text-white mb-2">Nicotine Pouches</h4>
              <p className="text-sm text-white mb-4">Tobacco-free pouches that release nicotine through the lining of the mouth.</p>
              <a href="#" className="inline-block bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors">
                Learn more about pouches
              </a>
            </div>
          </div>

          {/* Level 4 - NRT */}
          <div className="rounded-lg p-6 sm:p-8 shadow-lg" style={{ 
            backgroundColor: 'rgba(26, 26, 46, 0.8)', 
            border: '1px solid rgba(64, 224, 208, 0.3)',
            backdropFilter: 'blur(10px)'
          }}>
            <div className="mb-4">
              <span className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-3 py-1 rounded text-sm font-medium">Level 4</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: '#ffffff' }}>
              Nicotine Replacement Therapy (NRT)
            </h3>
            <p className="text-sm sm:text-base leading-relaxed mb-6" style={{ color: '#ffffff' }}>
              Clinically tested products such as gum, patches, lozenges, sprays and microtabs that deliver a measured dose of pharmaceutical-grade nicotine without smoke. Recommended in many stop-smoking guidelines to help manage withdrawal and cravings.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              <div className="rounded-lg p-3 sm:p-4 shadow-md" style={{ 
                backgroundColor: 'rgba(15, 52, 96, 0.7)', 
                backdropFilter: 'blur(5px)' 
              }}>
                <img src="/nicorette-2mg-nicotine.jpeg" alt="Nicorette 2mg nicotine lozenge" className="bg-white p-1 w-full h-24 object-contain rounded mb-3" />
                <h4 className="font-semibold text-sm mb-2" style={{ color: '#ffffff' }}>Nicorette Lozenge 2mg</h4>
                <p className="text-xs mb-3" style={{ color: '#ffffff' }}>Nicotine replacement product used to relieve cravings as part of a quit attempt, used according to pack instructions.</p>
                {/*<a href="/boots/nicorette-lozenge" className="inline-block bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700 transition-colors">
                  View product info
                </a>*/}
              </div>

              <div className="rounded-lg p-3 sm:p-4 shadow-md" style={{ 
                backgroundColor: 'rgba(15, 52, 96, 0.7)', 
                backdropFilter: 'blur(5px)' 
              }}>
                <img src="/nicorette-2mg-gum.jpeg" alt="Nicorette 2mg nicotine gum" className="bg-white p-1 w-full h-24 object-contain rounded mb-3" />
                <h4 className="font-semibold text-sm mb-2" style={{ color: '#ffffff' }}>Nicorette Gum 2mg</h4>
                <p className="text-xs mb-3" style={{ color: '#ffffff' }}>Medicated chewing gum that helps manage withdrawal symptoms when trying to quit smoking.</p>
                {/*<a href="/boots/nicorette-gum" className="inline-block bg-green-500 text-white px-3 py-1 rounded text-xs hover:bg-green-600 transition-colors">
                  View product info
                </a>*/}
              </div>

              <div className="rounded-lg p-3 sm:p-4 shadow-md" style={{ 
                backgroundColor: 'rgba(15, 52, 96, 0.7)', 
                backdropFilter: 'blur(5px)' 
              }}>
                <img src="/nicorette-quickmist.jpeg" alt="Nicorette QuickMist mouth spray" className="bg-white p-1 w-full h-24 object-contain rounded mb-3" />
                <h4 className="font-semibold text-sm mb-2" style={{ color: '#ffffff' }}>Nicorette QuickMist</h4>
                <p className="text-xs mb-3" style={{ color: '#ffffff' }}>Fast-acting mouth spray providing rapid relief from cravings and withdrawal symptoms.</p>
                {/*<a href="/boots/nicorette-quickmist" className="inline-block bg-green-500 text-white px-3 py-1 rounded text-xs hover:bg-green-600 transition-colors">
                  View product info
                </a>*/}
              </div>

              <div className="rounded-lg p-3 sm:p-4 shadow-md" style={{ 
                backgroundColor: 'rgba(15, 52, 96, 0.7)', 
                backdropFilter: 'blur(5px)' 
              }}>
                <img src="/nicorette-invisi.jpeg" alt="Nicorette Invisi patch 25mg" className="bg-white p-1 w-full h-24 object-contain rounded mb-3" />
                <h4 className="font-semibold text-sm mb-2" style={{ color: '#ffffff' }}>Nicorette Invisi Patch 25mg</h4>
                <p className="text-xs mb-3" style={{ color: '#ffffff' }}>Discreet 16-hour patch that delivers steady nicotine throughout the day to reduce cravings.</p>
                {/*<a href="/boots/nicorette-patch" className="inline-block bg-green-500 text-white px-3 py-1 rounded text-xs hover:bg-green-600 transition-colors">
                  View product info
                </a>*/}
              </div>

              <div className="rounded-lg p-3 sm:p-4 shadow-md" style={{ 
                backgroundColor: 'rgba(15, 52, 96, 0.7)', 
                backdropFilter: 'blur(5px)' 
              }}>
                <img src="/nicorette-inhalator.jpeg" alt="Nicorette Inhalator" className="bg-white p-1 w-full h-24 object-contain rounded mb-3" />
                <h4 className="font-semibold text-sm mb-2" style={{ color: '#ffffff' }}>Nicorette Inhalator</h4>
                <p className="text-xs mb-3" style={{ color: '#ffffff' }}>Inhaler device that mimics the hand-to-mouth action of smoking while delivering nicotine.</p>
                {/*<a href="/boots/nicorette-inhalator" className="inline-block bg-green-500 text-white px-3 py-1 rounded text-xs hover:bg-green-600 transition-colors">
                  View product info
                </a>*/}
              </div>

              <div className="rounded-lg p-3 sm:p-4 shadow-md" style={{ 
                backgroundColor: 'rgba(15, 52, 96, 0.7)', 
                backdropFilter: 'blur(5px)' 
              }}>
                <img src="/nicorette-microtab.jpeg" alt="Nicorette Microtab 2mg" className="bg-white p-1 w-full h-24 object-contain rounded mb-3" />
                <h4 className="font-semibold text-sm mb-2" style={{ color: '#ffffff' }}>Nicorette Microtab 2mg</h4>
                <p className="text-xs mb-3" style={{ color: '#ffffff' }}>Small tablets that dissolve under the tongue for discreet nicotine replacement therapy.</p>
                {/*<a href="/boots/nicorette-microtab" className="inline-block bg-green-500 text-white px-3 py-1 rounded text-xs hover:bg-green-600 transition-colors">
                  View product info
                </a>*/}
              </div>

              <div className="rounded-lg p-3 sm:p-4 shadow-md" style={{ 
                backgroundColor: 'rgba(15, 52, 96, 0.7)', 
                backdropFilter: 'blur(5px)' 
              }}>
                <img src="/niquitin.jpeg" alt="NiQuitin Clear patch 21mg" className="bg-white p-1 w-full h-24 object-contain rounded mb-3" />
                <h4 className="font-semibold text-sm mb-2" style={{ color: '#ffffff' }}>NiQuitin Clear Patch 21mg</h4>
                <p className="text-xs mb-3" style={{ color: '#ffffff' }}>Transparent 24-hour patch providing continuous nicotine support throughout day and night.</p>
                {/*<a href="/boots/niquitin-patch" className="inline-block bg-green-500 text-white px-3 py-1 rounded text-xs hover:bg-green-600 transition-colors">
                  View product info
                </a>*/}
              </div>

              <div className="rounded-lg p-3 sm:p-4 shadow-md" style={{ 
                backgroundColor: 'rgba(15, 52, 96, 0.7)', 
                backdropFilter: 'blur(5px)' 
              }}>
                <img src="/niquitin-minis.jpeg" alt="NiQuitin Minis lozenges 4mg" className="bg-white p-1 w-full h-24 object-contain rounded mb-3" />
                <h4 className="font-semibold text-sm mb-2" style={{ color: '#ffffff' }}>NiQuitin Minis 4mg</h4>
                <p className="text-xs mb-3" style={{ color: '#ffffff' }}>Small lozenges that provide controlled nicotine release to help cope with strong cravings.</p>
                {/*<a href="/boots/niquitin-minis" className="inline-block bg-green-500 text-white px-3 py-1 rounded text-xs hover:bg-green-600 transition-colors">
                  View product info
                </a>*/}
              </div>

              <div className="rounded-lg p-3 sm:p-4 shadow-md" style={{ 
                backgroundColor: 'rgba(15, 52, 96, 0.7)', 
                backdropFilter: 'blur(5px)' 
              }}>
                <img src="/niquitin-lozenges.jpeg" alt="NiQuitin Mint lozenges 2mg" className="bg-white p-1 w-full h-24 object-contain rounded mb-3" />
                <h4 className="font-semibold text-sm mb-2" style={{ color: '#ffffff' }}>NiQuitin Mint Lozenges 2mg</h4>
                <p className="text-xs mb-3" style={{ color: '#ffffff' }}>Mint-flavoured lozenges offering gradual nicotine release for craving management.</p>
                {/*<a href="/boots/niquitin-mint" className="inline-block bg-green-500 text-white px-3 py-1 rounded text-xs hover:bg-green-600 transition-colors">
                  View product info
                </a>*/}
              </div>
            </div>
          </div>

          {/* Level 5 - Nicotine Free */}
          <div className="rounded-lg p-6 sm:p-8 shadow-lg" style={{ 
            backgroundColor: 'rgba(26, 26, 46, 0.8)', 
            border: '1px solid rgba(64, 224, 208, 0.3)',
            backdropFilter: 'blur(10px)'
          }}>
            <div className="mb-4">
              <span className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-3 py-1 rounded text-sm font-medium">Level 5</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: '#ffffff' }}>
              Nicotine Free
            </h3>
            <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#ffffff' }}>
              Many people step down from smoking to lower-risk products, and some then choose to stop nicotine completely. The final choice is personal, but the lowest health risk is achieved when both smoke and nicotine are no longer used.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NicotineLadder;