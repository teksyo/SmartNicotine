import { ExternalLink } from 'lucide-react';
import Header from './Header';

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
        .iqos-page {
          font-family: 'DM Sans', sans-serif;
          background: #0A1628;
          color: #F8FAFB;
          min-height: 100vh;
        }

        .iqos-page .product-card {
          background: #0F2440;
          border: 1px solid rgba(0, 201, 167, 0.1);
          border-radius: 16px;
          overflow: hidden;
          transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s;
        }

        .iqos-page .product-card:hover {
          border-color: rgba(0, 201, 167, 0.3);
          transform: translateY(-2px);
          box-shadow: 0 20px 40px rgba(0, 201, 167, 0.1);
        }

        .iqos-page .buy-button {
          background: #00C9A7;
          transition: all 0.3s ease;
        }

        .iqos-page .buy-button:hover {
          background: #00E8C0;
          transform: translateY(-1px);
          box-shadow: 0 10px 25px rgba(0, 201, 167, 0.3);
        }
      `}</style>

      <div className="iqos-page">
        <Header />
        <div className="max-w-7xl mx-auto px-5 py-8" style={{ paddingTop: '100px' }}>
          {/* Header */}
          <header className="text-center mb-8">
            <h1 style={{ fontFamily: 'Outfit, sans-serif', color: '#F8FAFB', fontSize: '2.2rem', fontWeight: 700, marginBottom: '0.75rem', letterSpacing: '1px' }}>
              IQOS PRODUCTS
            </h1>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#00C9A7', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
              HEATED TOBACCO ALTERNATIVES
            </h3>
            <p style={{ fontSize: '0.95rem', maxWidth: '600px', margin: '0 auto', color: '#94A3B8', lineHeight: 1.6 }}>
              Explore IQOS heated tobacco products as a reduced-risk alternative.
              All products are sorted from lowest to highest price.
            </p>
          </header>
          
          {/* Products Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {sortedProducts.map((product) => (
              <div key={product.id} className="product-card transition-all duration-300">
                {/* Product Image */}
                <div style={{ width: '100%', height: '320px', background: '#1E3A5F', overflow: 'hidden' }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
                    className="hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = `
                        <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:#94A3B8;text-align:center">
                          <div>
                            <div style="font-size:2rem;margin-bottom:0.5rem">📱</div>
                            <div style="font-size:0.75rem">IQOS Product</div>
                          </div>
                        </div>
                      `;
                    }}
                  />
                </div>

                {/* Product Info */}
                <div style={{ padding: '20px' }}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#00C9A7', fontFamily: 'Outfit, sans-serif' }}>{product.name}</h3>
                    <span style={{ background: 'rgba(0,201,167,0.12)', color: '#00C9A7', padding: '4px 10px', borderRadius: '6px', fontSize: '0.7rem', fontWeight: 500 }}>
                      {product.category}
                    </span>
                  </div>

                  <p style={{ fontSize: '1.5rem', fontWeight: 700, color: '#F8FAFB', margin: '0.75rem 0', fontFamily: 'Outfit, sans-serif' }}>
                    &pound;{product.price.toFixed(2)}
                  </p>

                  <p style={{ color: '#94A3B8', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                    {product.description}
                  </p>

                  {/* Buy Button */}
                  <a
                    href={product.buyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="buy-button"
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', width: '100%', padding: '12px', borderRadius: '10px', color: '#0A1628', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px', textDecoration: 'none', cursor: 'pointer' }}
                  >
                    Buy on IQOS.com
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </section>

          {/* Info Section */}
          <section style={{ background: '#0F2440', border: '1px solid rgba(0,201,167,0.1)', borderRadius: '16px', padding: '24px', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#00C9A7', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif' }}>About IQOS Heated Tobacco</h2>
            <div className="grid md:grid-cols-2 gap-6" style={{ fontSize: '0.9rem', color: '#94A3B8' }}>
              <div>
                <h3 style={{ fontWeight: 600, color: '#F8FAFB', marginBottom: '0.5rem' }}>How It Works</h3>
                <p style={{ lineHeight: 1.6 }}>
                  IQOS heats tobacco instead of burning it, producing a tobacco vapor with
                  significantly reduced harmful chemicals compared to cigarette smoke.
                </p>
              </div>
              <div>
                <h3 style={{ fontWeight: 600, color: '#F8FAFB', marginBottom: '0.5rem' }}>Reduced Risk</h3>
                <p style={{ lineHeight: 1.6 }}>
                  Scientific studies show IQOS produces on average 95% lower levels of harmful
                  chemicals compared to cigarettes.
                </p>
              </div>
            </div>

            <div style={{ marginTop: '1rem', padding: '14px', background: 'rgba(255,107,53,0.08)', border: '1px solid rgba(255,107,53,0.2)', borderRadius: '10px' }}>
              <p style={{ fontSize: '0.8rem', color: '#FF6B35' }}>
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