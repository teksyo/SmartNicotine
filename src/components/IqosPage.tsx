import React from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface IqosProduct {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  image: string;
  buyUrl: string;
  category: 'Device' | 'Accessory' | 'Bundle';
}

const iqosProducts: IqosProduct[] = [
  {
    id: 'iluma-one-starter-kit',
    name: 'ILUMA i ONE Starter Kit',
    price: 29.00,
    description: 'The all-new IQOS ILUMA i ONE, offering up to 20 consecutive uses with a single charge. Includes 2 packs of TEREA heated tobacco sticks.',
    features: ['All-in-one device design', 'Includes 2 packs of TEREA', 'No cleaning required', '20 uses per charge'],
    image: '/ILUMA-i-one-starter.webp',
    buyUrl: 'https://www.iqos.com/gb/en/shop/iqos-iluma-i-one-starter-kit.html',
    category: 'Device'
  },
  {
    id: 'iqos-iluma-i-prime-starter-kit',
    name: 'IQOS ILUMA i Starter Kit',
    price: 59.00,
    description: 'Our iconic design, with new advanced features that give you flexibility of moments. Includes 2 packs of TEREA heated tobacco sticks.',
    features: ['SmartCore Induction System™', 'Includes 2 packs of TEREA', 'Pocket charger design', 'Vibration alerts'],
    image: '/IQOS-ILUMA-i-starter.webp',
    buyUrl: 'https://www.iqos.com/gb/en/shop/iqos-iluma-i-starter-kit.html',
    category: 'Device'
  },
  {
    id: 'iqos-iluma-i-prime-kit',
    name: 'IQOS ILUMA i PRIME Starter Kit',
    price: 89.00,
    description: 'Our most refined design, with new advanced features that give you flexibility of moments. Includes 2 packs of TEREA heated tobacco sticks.',
    features: ['Limited edition design', 'Soletti collaboration pattern', 'Includes 2 packs of TEREA', 'Premium packaging'],
    image: '/IQOS-ILUMA-i-PRIME-Starter.webp',
    buyUrl: 'https://www.iqos.com/gb/en/shop/iqos-iluma-i-prime-starter-kit.html',
    category: 'Device'
  },
  {
    id: 'iqos-iluma-Seletti-starter-kit',
    name: 'IQOS ILUMA i Seletti Limited Edition Starter Kit',
    price: 69.00,
    description: 'Discover the IQOS ILUMA i Seletti Limited Edition Starter Kit. Shop today with free next-day delivery.',
    features: ['Premium aluminum body', 'Wrap-around LED', 'Smart gestures', 'Includes 2 packs of TEREA'],
    image: '/IQOS-ILUMA-i-Seletti-Limited-Edition-Starter.webp',
    buyUrl: 'https://www.iqos.com/gb/en/shop/iqos-iluma-i-seletti-limited-edition-starter-kit.html',
    category: 'Device'
  },
  {
    id: 'iqos-iluma-prime-Seletti-starter-kit',
    name: 'IQOS ILUMA i PRIME Seletti Limited Edition Starter Kit',
    price: 109.00,
    description: 'Discover the IQOS ILUMA i PRIME Seletti Limited Edition Starter Kit. Shop today with free next-day delivery.',
    features: ['Premium aluminum body', 'Wrap-around LED', 'Smart gestures', 'Includes 2 packs of TEREA'],
    image: 'IQOS-ILUMA-i-PRIME-Seletti-Limited-Edition-Starter.webp',
    buyUrl: 'https://www.iqos.com/gb/en/shop/iqos-iluma-i-prime-seletti-limited-edition-starter-kit.html',
    category: 'Device'
  }
];

const IqosPage = () => {
  const sortedProducts = [...iqosProducts].sort((a, b) => a.price - b.price);

  return (
    <>
      <style>{`
        .product-card {
          background: linear-gradient(145deg, rgba(26, 26, 46, 0.8), rgba(22, 33, 62, 0.8));
          backdrop-filter: blur(10px);
          border: 1px solid rgba(64, 224, 208, 0.2);
        }

        .product-card:hover {
          border-color: rgba(0, 128, 255, 0.4);
          transform: translateY(-2px);
          box-shadow: 0 20px 40px rgba(0, 128, 255, 0.2);
        }

        .buy-button {
          background: linear-gradient(135deg, #40e0d0, #0080ff);
          transition: all 0.3s ease;
        }

        .buy-button:hover {
          background: linear-gradient(135deg, #0080ff, #40e0d0);
          transform: translateY(-1px);
          box-shadow: 0 10px 25px rgba(64, 224, 208, 0.4);
        }
      `}</style>
      
      <div className="min-h-screen text-white" style={{
        backgroundImage: 'linear-gradient(rgba(26, 26, 46, 0.85), rgba(15, 52, 96, 0.85)), url("/background.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="max-w-7xl mx-auto px-5 py-8">
          {/* Header */}
          <header className="text-center mb-8">
            <div className="flex items-center justify-between mb-4">
              <button 
                onClick={() => window.history.back()}
                className="flex items-center gap-2 text-cyan-400 hover:text-blue-400 transition-colors bg-transparent border-none cursor-pointer"
              >
                <ArrowLeft size={20} />
                <span className="text-sm font-medium">Back to Chat</span>
              </button>
            </div>
            
            <h1 className="text-white text-3xl md:text-4xl font-sans font-extrabold tracking-wider mb-3 uppercase" style={{
              display:'inline-block',
            }}>
              IQOS PRODUCTS
            </h1>
            <h3 className="text-lg md:text-xl font-bold leading-tight mb-5 uppercase tracking-wide opacity-80">
              HEATED TOBACCO ALTERNATIVES
            </h3>
            <p className="text-sm md:text-base max-w-2xl mx-auto opacity-70 leading-relaxed">
              Explore IQOS heated tobacco products as a reduced-risk alternative. 
              All products are sorted from lowest to highest price.
            </p>
          </header>
          
          {/* Products Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {sortedProducts.map((product) => (
              <div key={product.id} className="product-card rounded-lg p-6 transition-all duration-300">
                {/* Product Image */}
                <div className="w-full h-80 bg-gray-800 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement.innerHTML = `
                        <div class="w-full h-full flex items-center justify-center text-gray-400 text-center">
                          <div>
                            <div class="text-2xl mb-2">📱</div>
                            <div class="text-xs">IQOS Product</div>
                          </div>
                        </div>
                      `;
                    }}
                  />
                </div>
                
                {/* Product Info */}
                <div className="mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-cyan-400">{product.name}</h3>
                    <span className="bg-cyan-400/20 text-cyan-400 px-2 py-1 rounded text-xs font-medium">
                      {product.category}
                    </span>
                  </div>
                  
                  <p className="text-2xl font-bold text-white mb-3">
                    ${product.price}
                  </p>
                  
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {product.description}
                  </p>
                </div>
                
                {/* Buy Button */}
                <a
                  href={product.buyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="buy-button w-full py-3 px-4 rounded-lg text-gray-900 font-bold text-sm uppercase tracking-wide cursor-pointer transition-all duration-300 flex items-center justify-center gap-2 no-underline"
                >
                  Buy on IQOS.com
                  <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </section>

          {/* Info Section */}
          <section className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50">
            <h2 className="text-xl font-bold text-cyan-400 mb-4">About IQOS Heated Tobacco</h2>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-300">
              <div>
                <h3 className="font-semibold text-white mb-2">How It Works</h3>
                <p className="leading-relaxed">
                  IQOS heats tobacco instead of burning it, producing a tobacco vapor with 
                  significantly reduced harmful chemicals compared to cigarette smoke.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Reduced Risk</h3>
                <p className="leading-relaxed">
                  Scientific studies show IQOS produces on average 95% lower levels of harmful 
                  chemicals compared to cigarettes.
                </p>
              </div>
            </div>
            
            <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
              <p className="text-xs text-yellow-200">
                <strong>Important:</strong> IQOS is not risk-free and delivers nicotine, which is addictive. 
                The best decision any smoker can make is to quit tobacco and nicotine use altogether.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default IqosPage;