import { Button } from "./Button";

function NicotineLadder() {
  return (
    <section id="nicotine-ladder" className="py-16 relative tracking-wide" style={{
      // backgroundImage: 'linear-gradient(rgba(10, 22, 40, 0.95), rgba(15, 36, 64, 0.9)), url("/background.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.4em', textTransform: 'uppercase' as const, color: 'hsl(var(--snuk-teal))', marginBottom: '1rem' }}>
            The Ladder
          </div>
          <h2 className="text-3xl sm:text-4xl mb-4" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, lineHeight: 1.15, color: 'hsl(var(--off-white))' }}>
            The Smarter Nicotine Ladder
          </h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1.05rem', color: 'hsl(var(--slate-grey))', lineHeight: 1.8 }}>
            Think of nicotine delivery as a ladder. The bottom rung is the most dangerous. Each step up removes harm while keeping the nicotine your body is used to. You don't have to quit. You upgrade.
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {/* Level 0 - Smoking */}
          <div className="rounded-lg p-6 sm:p-8 shadow-lg bg-[hsl(var(--navy))]" style={{ 
            border: '1px solid rgba(0, 201, 167, 0.2)',
            backdropFilter: 'blur(10px)'
          }}>
            <div className="mb-4">
              <span className="inline-block bg-[hsl(var(--warm-alert))] text-[#0A1628] px-3 py-1 rounded text-sm" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, letterSpacing: '0.1em' }}>Step 0</span>
            </div>
            <h3 className="text-xl sm:text-2xl mb-4" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, color: 'hsl(var(--off-white))' }}>
              Combustible Cigarettes
            </h3>
            <img src="/cigrates.jpeg" alt="Cigrates" className="bg-white w-full h-48 object-contain rounded-lg mb-4" />
            <p className="text-sm sm:text-base" style={{ fontFamily: "'DM Sans', sans-serif", color: 'hsl(var(--slate-grey))', lineHeight: 1.8 }}>
              Cigarettes burn tobacco at very high temperatures, creating smoke that contains thousands of chemicals including tar and carbon monoxide. Around half of long-term smokers die from smoking-related disease. Nicotine is present, but the main harm comes from combustion.
            </p>
          </div>

          {/* Level 1 - Heated Tobacco */}
          <div className="rounded-lg p-6 sm:p-8 shadow-lg bg-[hsl(var(--navy))]" style={{ 
            border: '1px solid rgba(0, 201, 167, 0.2)',
            backdropFilter: 'blur(10px)'
          }}>
            <div className="mb-4">
              <span className="inline-block bg-[hsl(var(--warm-alert))]  text-[#0A1628] px-3 py-1 rounded text-sm font-medium">Step 1</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 " style={{ color: 'hsl(var(--off-white))' }}>
              Heated Tobacco
            </h3>
            <p className="text-sm sm:text-base mb-6" style={{ fontFamily: "'DM Sans', sans-serif", color: 'hsl(var(--slate-grey))', lineHeight: 1.8 }}>
              Heated tobacco devices warm tobacco to about 350 degrees Celsius without burning it, which removes smoke and reduces harmful chemicals by around 90-95% compared with cigarettes. There is still nicotine and some risk, but no tar and far less carbon monoxide.
            </p>
            
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="rounded-lg p-4 sm:p-6 shadow-md" style={{ 
                backgroundColor: 'rgba(15, 36, 64, 0.6)', 
                backdropFilter: 'blur(5px)' 
              }}>
                <img src="/iqos.png" alt="IQOS heated tobacco device" className="bg-white w-full h-32 object-contain rounded-lg mb-4" />
                <h4 className="mb-2" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, color: 'hsl(var(--snuk-teal))' }}>IQOS</h4>
                <p className="text-xs sm:text-sm mb-4" style={{ color: 'hsl(var(--slate-grey))' }}>The UK’s most popular heated tobacco device with 90% market share. Heats real tobacco to 350°C instead of burning it at 900°C. No smoke, no tar, no ash.</p>
                               <Button size="sm" text="IQOS Details" href="/iqos" variant="secondary" />

              </div>
              
              <div className="rounded-lg p-4 sm:p-6 shadow-md" style={{ 
                backgroundColor: 'rgba(15, 36, 64, 0.6)', 
                backdropFilter: 'blur(5px)' 
              }}>
                <img src="/ploom.jpg" alt="Ploom heated tobacco device" className="bg-white w-full h-32 object-contain rounded-lg mb-4 py-1.5" />
                <h4 className="mb-2" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, color: 'hsl(var(--snuk-teal))' }}>Ploom</h4>
                <p className="text-xs sm:text-sm mb-4" style={{ color: 'hsl(var(--slate-grey))' }}>The budget-friendly alternative. Same heat-not-burn technology.</p>
               <Button size="sm" text="Ploom Details" href="https://www.ploom.co.uk" variant="secondary" />
              </div>
            </div>
          </div>

          {/* Level 2 - Vapes */}
          <div className="rounded-lg p-6 sm:p-8 shadow-lg bg-[hsl(var(--navy))]" style={{ 
            border: '1px solid rgba(0, 201, 167, 0.2)',
            backdropFilter: 'blur(10px)'
          }}>
            <div className="mb-4">
              <span className="inline-block bg-[hsl(var(--warm-alert))] text-[#0A1628] px-3 py-1 rounded text-sm" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, letterSpacing: '0.1em' }}>Step 2</span>
            </div>
            <h3 className="text-xl sm:text-2xl mb-4" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, color: 'hsl(var(--off-white))' }}>
              UK Regulated Vapes
            </h3>
            <p className="text-sm sm:text-base mb-6" style={{ fontFamily: "'DM Sans', sans-serif", color: 'hsl(var(--slate-grey))', lineHeight: 1.8 }}>
              UK regulated vapes use a nicotine-containing liquid which is heated into vapour. They do not contain tobacco and are tightly regulated on ingredients, nicotine strength and packaging. Evidence from Public Health England and other bodies suggests they are far less harmful than smoking and can help some smokers quit.
            </p>
            
            {/*<div className="mb-8">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="rounded-lg p-4 sm:p-6 shadow-md" style={{ 
                  backgroundColor: 'rgba(15, 36, 64, 0.6)', 
                  backdropFilter: 'blur(5px)' 
                }}>
                  <h4 className="mb-2" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, color: 'hsl(var(--snuk-teal))' }}>Closed Pod Vape</h4>
                  <p className="text-xs sm:text-sm mb-4" style={{ color: 'hsl(var(--off-white))' }}>Simple pre-filled device for adult smokers who want something easy to start with.</p>
                  <a href="https://www.gov.uk/guidance/e-cigarettes-regulations-for-consumer-products" target="_blank" className="inline-block bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors">
                    See regulated vape options
                  </a>
                </div>
                
                <div className="rounded-lg p-4 sm:p-6 shadow-md" style={{ 
                  backgroundColor: 'rgba(15, 36, 64, 0.6)', 
                  backdropFilter: 'blur(5px)' 
                }}>
                  <h4 className="mb-2" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, color: 'hsl(var(--snuk-teal))' }}>Refillable Vape</h4>
                  <p className="text-xs sm:text-sm mb-4" style={{ color: 'hsl(var(--off-white))' }}>Device where you refill the tank with e-liquid, often cheaper for regular users.</p>
                  <a href="https://www.gov.uk/guidance/e-cigarettes-regulations-for-consumer-products" target="_blank" className="inline-block bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors">
                    See regulated vape options
                  </a>
                </div>
              </div>
            </div>*/}

            {/* Available Products */}
            <div>
              <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                <div className="rounded-lg p-4 sm:p-6 shadow-md" style={{ 
                  backgroundColor: 'rgba(15, 36, 64, 0.6)', 
                  backdropFilter: 'blur(5px)' 
                }}>
                  <img src="/veev.jpg" alt="VEEV vape device" className="bg-white w-full h-32 object-contain rounded-lg mb-4 p-1.5" />
                  <h4 className="mb-2" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, color: 'hsl(var(--snuk-teal))' }}>VEEV</h4>
                  <p className="text-xs sm:text-sm mb-4" style={{ color: 'hsl(var(--slate-grey))' }}>Premium closed-pod vaping system with innovative technology and sleek design.</p>
                  <Button size="sm" text="View on VEEV" href="https://www.veev-vape.com/hr/en" variant="secondary" />
                </div>
                
                {/* <div className="rounded-lg p-4 sm:p-6 shadow-md" style={{ 
                  backgroundColor: 'rgba(15, 36, 64, 0.6)', 
                  backdropFilter: 'blur(5px)' 
                }}>
                  <img src="/vuse.png" alt="Vuse vape device" className="bg-white w-full h-32 object-contain rounded-lg mb-4" />
                  <h4 className="mb-2" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, color: 'hsl(var(--snuk-teal))' }}>Vuse</h4>
                  <p className="text-xs sm:text-sm mb-4" style={{ color: 'hsl(var(--slate-grey))' }}>Reliable pod-based vaping system with consistent performance and quality.</p>
                  <Button size="sm" text="View on Vuse" href="https://www.vuse.com" variant="secondary" />
                </div> */}

                {/* <div className="rounded-lg p-4 sm:p-6 shadow-md" style={{ 
                  backgroundColor: 'rgba(15, 36, 64, 0.6)', 
                  backdropFilter: 'blur(5px)' 
                }}>
                  <img src="/blu-vape.jpg" alt="Blu vape device" className="bg-white w-full h-32 object-contain rounded-lg mb-4" />
                  <h4 className="mb-2" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, color: 'hsl(var(--snuk-teal))' }}>Blu</h4>
                  <p className="text-xs sm:text-sm mb-4" style={{ color: 'hsl(var(--slate-grey))' }}>Compact and user-friendly vaping device with simple operation and portability.</p>
                  <Button size="sm" text="View on Blu" href="https://www.blu.com" variant="secondary" />
                </div> */}
              </div>
            </div>
          </div>

          {/* Level 3 - Nicotine Pouches */}
          <div className="rounded-lg p-6 sm:p-8 shadow-lg bg-[hsl(var(--navy))]" style={{ 
             border: '1px solid rgba(0, 201, 167, 0.2)',
            backdropFilter: 'blur(10px)'
          }}>
            <div className="mb-4">
              <span className="inline-block bg-[hsl(var(--warm-alert))] text-[#0A1628] px-3 py-1 rounded text-sm" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, letterSpacing: '0.1em' }}>Step 3</span>
            </div>
            <h3 className="text-xl sm:text-2xl mb-4" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, color: 'hsl(var(--off-white))' }}>
              Nicotine Pouches
            </h3>
            <p className="text-sm sm:text-base mb-6" style={{ fontFamily: "'DM Sans', sans-serif", color: 'hsl(var(--slate-grey))', lineHeight: 1.8 }}>
              Small white pouches that sit under the lip and release pharmaceutical-grade nicotine through the gums. They contain no tobacco and no smoke, do not require inhaling and are popular with adults who want a discreet, lower-harm alternative to smoking. They are still addictive and for existing nicotine users only.
            </p>
            
            {/* Available Products */}
            <div>
              <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                <div className="rounded-lg p-4 sm:p-6 shadow-md" style={{ 
                  backgroundColor: 'rgba(15, 36, 64, 0.6)', 
                  backdropFilter: 'blur(5px)' 
                }}>
                  <img src="/zyn.jpg" alt="Zyn nicotine pouches" className="bg-white w-full h-32 object-contain rounded-lg mb-4" />
                  <h4 className="mb-2" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, color: 'hsl(var(--snuk-teal))' }}>Zyn</h4>
                  <p className="text-xs sm:text-sm mb-4" style={{ color: 'hsl(var(--slate-grey))' }}>Popular tobacco-free nicotine pouches with smooth delivery and long-lasting satisfaction.</p>
                  <Button size="sm" text="View Zyn" href="https://www.zyn.com" variant="secondary" />
                </div>

                {/* <div className="rounded-lg p-4 sm:p-6 shadow-md" style={{ 
                  backgroundColor: 'rgba(15, 36, 64, 0.6)', 
                  backdropFilter: 'blur(5px)' 
                }}>
                  <img src="/nicotine-pouches.jpg" alt="Nordic Spirit nicotine pouches" className="bg-white w-full h-32 object-contain rounded-lg mb-4" />
                  <h4 className="mb-2" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, color: 'hsl(var(--snuk-teal))' }}>Nordic Spirit</h4>
                  <p className="text-xs sm:text-sm mb-4" style={{ color: 'hsl(var(--slate-grey))' }}>Premium nicotine pouches offering a clean and discreet nicotine experience.</p>
                  <Button size="sm" text="View Nordic Spirit" href="https://www.nordicspirit.com" variant="secondary" />
                </div> */}

                {/* <div className="rounded-lg p-4 sm:p-6 shadow-md" style={{ 
                  backgroundColor: 'rgba(15, 36, 64, 0.6)', 
                  backdropFilter: 'blur(5px)' 
                }}>
                  <img src="/velo.jpg" alt="Velo nicotine pouches" className="bg-white w-full h-32 object-contain rounded-lg mb-4" />
                  <h4 className="mb-2" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, color: 'hsl(var(--snuk-teal))' }}>Velo</h4>
                  <p className="text-xs sm:text-sm mb-4" style={{ color: 'hsl(var(--slate-grey))' }}>Modern nicotine pouches with various flavors and strengths for adult users.</p>
                  <Button size="sm" text="View Velo" href="https://www.velo.com" variant="secondary" />
                </div> */}
              </div>
            </div>
          </div>

          {/* Level 4 - NRT */}
          <div className="rounded-lg p-6 sm:p-8 shadow-lg bg-[hsl(var(--navy))]" style={{ 
             border: '1px solid rgba(0, 201, 167, 0.2)',
            backdropFilter: 'blur(10px)'
          }}>
            <div className="mb-4">
              <span className="inline-block bg-[hsl(var(--warm-alert))] text-[#0A1628] px-3 py-1 rounded text-sm" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, letterSpacing: '0.1em' }}>Step 4</span>
            </div>
            <h3 className="text-xl sm:text-2xl mb-4" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, color: 'hsl(var(--off-white))' }}>
              Nicotine Replacement Therapy (NRT)
            </h3>
            <p className="text-sm sm:text-base mb-6" style={{ fontFamily: "'DM Sans', sans-serif", color: 'hsl(var(--slate-grey))', lineHeight: 1.8 }}>
              Clinically tested products such as gum, patches, lozenges, sprays and microtabs that deliver a measured dose of pharmaceutical-grade nicotine without smoke. Recommended in many stop-smoking guidelines to help manage withdrawal and cravings.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              <div className="rounded-lg p-3 sm:p-4 shadow-md" style={{ 
                backgroundColor: 'rgba(15, 36, 64, 0.6)', 
                backdropFilter: 'blur(5px)' 
              }}>
                <img src="/nicorette-2mg-nicotine.jpeg" alt="Nicorette 2mg nicotine lozenge" className="bg-white p-1 w-full h-24 object-contain rounded mb-3" />
                <h4 className="text-sm mb-2" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, color: 'hsl(var(--snuk-teal))' }}>Nicorette Lozenge 2mg</h4>
                <p className="text-xs mb-3" style={{ color: 'hsl(var(--slate-grey))' }}>Nicotine replacement product used to relieve cravings as part of a quit attempt, used according to pack instructions.</p>
                {/*<a href="/boots/nicorette-lozenge" className="inline-block bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700 transition-colors">
                  View product info
                </a>*/}
              </div>

              <div className="rounded-lg p-3 sm:p-4 shadow-md" style={{ 
                backgroundColor: 'rgba(15, 36, 64, 0.6)', 
                backdropFilter: 'blur(5px)' 
              }}>
                <img src="/nicorette-2mg-gum.jpeg" alt="Nicorette 2mg nicotine gum" className="bg-white p-1 w-full h-24 object-contain rounded mb-3" />
                <h4 className="text-sm mb-2" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, color: 'hsl(var(--snuk-teal))' }}>Nicorette Gum 2mg</h4>
                <p className="text-xs mb-3" style={{ color: 'hsl(var(--slate-grey))' }}>Medicated chewing gum that helps manage withdrawal symptoms when trying to quit smoking.</p>
                {/*<a href="/boots/nicorette-gum" className="inline-block bg-green-500 text-white px-3 py-1 rounded text-xs hover:bg-green-600 transition-colors">
                  View product info
                </a>*/}
              </div>

              <div className="rounded-lg p-3 sm:p-4 shadow-md" style={{ 
                backgroundColor: 'rgba(15, 36, 64, 0.6)', 
                backdropFilter: 'blur(5px)' 
              }}>
                <img src="/nicorette-quickmist.jpeg" alt="Nicorette QuickMist mouth spray" className="bg-white p-1 w-full h-24 object-contain rounded mb-3" />
                <h4 className="text-sm mb-2" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, color: 'hsl(var(--snuk-teal))' }}>Nicorette QuickMist</h4>
                <p className="text-xs mb-3" style={{ color: 'hsl(var(--slate-grey))' }}>Fast-acting mouth spray providing rapid relief from cravings and withdrawal symptoms.</p>
                {/*<a href="/boots/nicorette-quickmist" className="inline-block bg-green-500 text-white px-3 py-1 rounded text-xs hover:bg-green-600 transition-colors">
                  View product info
                </a>*/}
              </div>

              <div className="rounded-lg p-3 sm:p-4 shadow-md" style={{ 
                backgroundColor: 'rgba(15, 36, 64, 0.6)', 
                backdropFilter: 'blur(5px)' 
              }}>
                <img src="/nicorette-invisi.jpeg" alt="Nicorette Invisi patch 25mg" className="bg-white p-1 w-full h-24 object-contain rounded mb-3" />
                <h4 className="text-sm mb-2" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, color: 'hsl(var(--snuk-teal))' }}>Nicorette Invisi Patch 25mg</h4>
                <p className="text-xs mb-3" style={{ color: 'hsl(var(--slate-grey))' }}>Discreet 16-hour patch that delivers steady nicotine throughout the day to reduce cravings.</p>
                {/*<a href="/boots/nicorette-patch" className="inline-block bg-green-500 text-white px-3 py-1 rounded text-xs hover:bg-green-600 transition-colors">
                  View product info
                </a>*/}
              </div>

              <div className="rounded-lg p-3 sm:p-4 shadow-md" style={{ 
                backgroundColor: 'rgba(15, 36, 64, 0.6)', 
                backdropFilter: 'blur(5px)' 
              }}>
                <img src="/nicorette-inhalator.jpeg" alt="Nicorette Inhalator" className="bg-white p-1 w-full h-24 object-contain rounded mb-3" />
                <h4 className="text-sm mb-2" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, color: 'hsl(var(--snuk-teal))' }}>Nicorette Inhalator</h4>
                <p className="text-xs mb-3" style={{ color: 'hsl(var(--slate-grey))' }}>Inhaler device that mimics the hand-to-mouth action of smoking while delivering nicotine.</p>
                {/*<a href="/boots/nicorette-inhalator" className="inline-block bg-green-500 text-white px-3 py-1 rounded text-xs hover:bg-green-600 transition-colors">
                  View product info
                </a>*/}
              </div>

              <div className="rounded-lg p-3 sm:p-4 shadow-md" style={{ 
                backgroundColor: 'rgba(15, 36, 64, 0.6)', 
                backdropFilter: 'blur(5px)' 
              }}>
                <img src="/nicorette-microtab.jpeg" alt="Nicorette Microtab 2mg" className="bg-white p-1 w-full h-24 object-contain rounded mb-3" />
                <h4 className="text-sm mb-2" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, color: 'hsl(var(--snuk-teal))' }}>Nicorette Microtab 2mg</h4>
                <p className="text-xs mb-3" style={{ color: 'hsl(var(--slate-grey))' }}>Small tablets that dissolve under the tongue for discreet nicotine replacement therapy.</p>
                {/*<a href="/boots/nicorette-microtab" className="inline-block bg-green-500 text-white px-3 py-1 rounded text-xs hover:bg-green-600 transition-colors">
                  View product info
                </a>*/}
              </div>

              <div className="rounded-lg p-3 sm:p-4 shadow-md" style={{ 
                backgroundColor: 'rgba(15, 36, 64, 0.6)', 
                backdropFilter: 'blur(5px)' 
              }}>
                <img src="/niquitin.jpeg" alt="NiQuitin Clear patch 21mg" className="bg-white p-1 w-full h-24 object-contain rounded mb-3" />
                <h4 className="text-sm mb-2" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, color: 'hsl(var(--snuk-teal))' }}>NiQuitin Clear Patch 21mg</h4>
                <p className="text-xs mb-3" style={{ color: 'hsl(var(--slate-grey))' }}>Transparent 24-hour patch providing continuous nicotine support throughout day and night.</p>
                {/*<a href="/boots/niquitin-patch" className="inline-block bg-green-500 text-white px-3 py-1 rounded text-xs hover:bg-green-600 transition-colors">
                  View product info
                </a>*/}
              </div>

              <div className="rounded-lg p-3 sm:p-4 shadow-md" style={{ 
                backgroundColor: 'rgba(15, 36, 64, 0.6)', 
                backdropFilter: 'blur(5px)' 
              }}>
                <img src="/niquitin-minis.jpeg" alt="NiQuitin Minis lozenges 4mg" className="bg-white p-1 w-full h-24 object-contain rounded mb-3" />
                <h4 className="text-sm mb-2" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, color: 'hsl(var(--snuk-teal))' }}>NiQuitin Minis 4mg</h4>
                <p className="text-xs mb-3" style={{ color: 'hsl(var(--slate-grey))' }}>Small lozenges that provide controlled nicotine release to help cope with strong cravings.</p>
                {/*<a href="/boots/niquitin-minis" className="inline-block bg-green-500 text-white px-3 py-1 rounded text-xs hover:bg-green-600 transition-colors">
                  View product info
                </a>*/}
              </div>

              <div className="rounded-lg p-3 sm:p-4 shadow-md" style={{ 
                backgroundColor: 'rgba(15, 36, 64, 0.6)', 
                backdropFilter: 'blur(5px)' 
              }}>
                <img src="/niquitin-lozenges.jpeg" alt="NiQuitin Mint lozenges 2mg" className="bg-white p-1 w-full h-24 object-contain rounded mb-3" />
                <h4 className="text-sm mb-2" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, color: 'hsl(var(--snuk-teal))' }}>NiQuitin Mint Lozenges 2mg</h4>
                <p className="text-xs mb-3" style={{ color: 'hsl(var(--slate-grey))' }}>Mint-flavoured lozenges offering gradual nicotine release for craving management.</p>
                {/*<a href="/boots/niquitin-mint" className="inline-block bg-green-500 text-white px-3 py-1 rounded text-xs hover:bg-green-600 transition-colors">
                  View product info
                </a>*/}
              </div>
            </div>
          </div>

          {/* Level 5 - Nicotine Free */}
          <div className="rounded-lg p-6 sm:p-8 shadow-lg bg-[hsl(var(--navy))]" style={{
            border: '1px solid rgba(0, 201, 167, 0.2)',
            backdropFilter: 'blur(10px)'
          }}>
            <div className="mb-4">
              <span className="inline-block bg-[hsl(var(--warm-alert))] text-[#0A1628] px-3 py-1 rounded text-sm" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, letterSpacing: '0.1em' }}>Step 5</span>
            </div>
            <h3 className="text-xl sm:text-2xl mb-4" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, color: 'hsl(var(--off-white))' }}>
              Nicotine Free
            </h3>
            <p className="text-sm sm:text-base" style={{ fontFamily: "'DM Sans', sans-serif", color: 'hsl(var(--slate-grey))', lineHeight: 1.8 }}>
              Many people step down from smoking to lower-risk products, and some then choose to stop nicotine completely. The final choice is personal, but the lowest health risk is achieved when both smoke and nicotine are no longer used.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NicotineLadder;