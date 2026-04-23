'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Intersection Observer for fade-in
    const fadeEls = document.querySelectorAll('.fade-in');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    fadeEls.forEach((el) => obs.observe(el));

    // Bar chart animation
    const bars = [
      {
        bar: document.getElementById('b1'),
        val: document.getElementById('v1'),
        h: 40,
        label: '₹8,000',
      },
      {
        bar: document.getElementById('b2'),
        val: document.getElementById('v2'),
        h: 80,
        label: '₹25,000',
      },
      {
        bar: document.getElementById('b3'),
        val: document.getElementById('v3'),
        h: 130,
        label: '₹55,000',
      },
      {
        bar: document.getElementById('b4'),
        val: document.getElementById('v4'),
        h: 190,
        label: '₹1,20,000',
      },
    ];

    const chartObs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          bars.forEach((b, i) => {
            setTimeout(() => {
              if (b.bar) b.bar.style.height = b.h + 'px';
              setTimeout(() => {
                if (b.val) b.val.textContent = b.label;
              }, 800);
            }, i * 200);
          });
          chartObs.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    const chartElement = document.getElementById('b1')?.parentElement?.parentElement;
    if (chartElement) {
      chartObs.observe(chartElement);
    }

    // Progress bar animation
    const progObs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            const progFill = document.getElementById('prog-fill');
            const progPct = document.getElementById('prog-pct');
            if (progFill) progFill.style.width = '72%';
            if (progPct) progPct.textContent = '72%';
          }, 400);
          progObs.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    const gameWrap = document.querySelector('.game-wrap');
    if (gameWrap) {
      progObs.observe(gameWrap);
    }

    // Milestone click interaction
    document.querySelectorAll('.milestone').forEach((m) => {
      m.addEventListener('click', function () {
        document.querySelectorAll('.milestone').forEach((x) => x.classList.remove('active'));
        this.classList.add('active');
      });
    });

    return () => {
      obs.disconnect();
      chartObs.disconnect();
      progObs.disconnect();
    };
  }, []);

  return (
    <div>
      {/* NAV */}
      <nav className="top-nav">
        <div className="nav-logo">
          Town<span>er</span>
        </div>
        <a href="#cta" className="nav-cta">
          ಇಂದೇ ಸೇರಿ / Join Now
        </a>
      </nav>

      {/* HERO */}
      <div className="hero" style={{ paddingTop: '100px' }}>
        <div className="hero-badge">🏛️ Karnataka Government Supported Initiative</div>
        <div className="hero-logo">
          Town<span>er</span>
        </div>
        <div className="hero-kn-title kn">ವಿತರಕ ಅವಕಾಶ</div>
        <div className="hero-en-title">Distributor Opportunity</div>
        <div className="hero-kn-sub kn">ಚಾಲಕರಿಗೆ ಶಕ್ತಿ – ನಿಮ್ಮಿಗೆ ಆದಾಯ</div>
        <div className="hero-en-sub">Empower Drivers. Build Your Income.</div>
        <div className="hero-btns">
          <a href="#cta" className="btn-primary">
            👉 ಇಂದೇ ಸೇರಿ / Start Now
          </a>
          <a href="#cta" className="btn-secondary">
            📞 Contact Us
          </a>
        </div>
        <div className="hero-scroll">SCROLL</div>
      </div>

      {/* PROBLEM */}
      <div className="full-orange">
        <div className="inner">
          <section style={{ padding: '0' }} className="fade-in">
            <div className="section-tag tag-red">⚠️ ಸಮಸ್ಯೆ · Problem</div>
            <div className="section-kn">ಇಂದು ಚಾಲಕರ ಸ್ಥಿತಿ ಏನು?</div>
            <div className="section-en">What challenges do drivers face today?</div>
            <div className="problem-grid">
              <div className="problem-card">
                <div className="problem-icon">💸</div>
                <div>
                  <div className="kn-text kn">ಸ್ಥಿರ ಬೆಲೆ ಇಲ್ಲ</div>
                  <div className="en-text">No standardized fare — earnings vary every trip</div>
                </div>
              </div>
              <div className="problem-card">
                <div className="problem-icon">📊</div>
                <div>
                  <div className="kn-text kn">ಆದಾಯ ಲೆಕ್ಕ ಇಲ್ಲ</div>
                  <div className="en-text">No income tracking — no proof of earnings</div>
                </div>
              </div>
              <div className="problem-card">
                <div className="problem-icon">🌐</div>
                <div>
                  <div className="kn-text kn">ಡಿಜಿಟಲ್ ಗುರುತು ಇಲ್ಲ</div>
                  <div className="en-text">No digital visibility — no bank/loan access</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* SOLUTION */}
      <div className="full-blue">
        <div className="inner">
          <section style={{ padding: '0' }} className="fade-in">
            <div className="section-tag tag-blue">✅ ಪರಿಹಾರ · Solution</div>
            <div className="section-kn">Towner ಅಪ್ಲಿಕೇಶನ್ ಏನು ಮಾಡುತ್ತದೆ?</div>
            <div className="section-en">What does the Towner app do for drivers?</div>
            <div className="solution-wrap">
              <ul className="solution-feat-list">
                <li>
                  <div className="feat-icon">📍</div>
                  <div>
                    <div className="feat-kn kn">ದೂರ ಮಾಪನ</div>
                    <div className="feat-en">Accurate Distance Proof — GPS-verified every trip</div>
                  </div>
                </li>
                <li>
                  <div className="feat-icon">🧾</div>
                  <div>
                    <div className="feat-kn kn">ಬಿಲ್ ನಿರ್ವಹಣೆ</div>
                    <div className="feat-en">Invoice Management — professional bills in driver&apos;s name</div>
                  </div>
                </li>
                <li>
                  <div className="feat-icon">💰</div>
                  <div>
                    <div className="feat-kn kn">ವೆಚ್ಚ ಟ್ರ್ಯಾಕಿಂಗ್</div>
                    <div className="feat-en">Expenditure Tracking — fuel, EMI, maintenance</div>
                  </div>
                </li>
                <li>
                  <div className="feat-icon">🏛️</div>
                  <div>
                    <div className="feat-kn kn">ಸರ್ಕಾರಿ ದರ ಲೆಕ್ಕ</div>
                    <div className="feat-en">Govt Rate Auto-Calculation — fair &amp; transparent fares</div>
                  </div>
                </li>
              </ul>
              <div className="solution-visual">
                <span className="phone-mock">📱</span>
                <h3 className="kn">ಚಾಲಕರ ಶಕ್ತಿ ಅಪ್ಲಿಕೇಶನ್</h3>
                <p>Driver Empowerment Platform</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* DRIVER BENEFITS */}
      <section className="fade-in" style={{ paddingTop: '72px' }}>
        <div className="section-tag tag-green">🚖 ಚಾಲಕ ಲಾಭ · Driver Benefits</div>
        <div className="section-kn">ಚಾಲಕರಿಗೆ ಏನು ಸಿಗುತ್ತದೆ?</div>
        <div className="section-en">What drivers gain with Towner</div>
        <div className="benefits-grid">
          <div className="benefit-card">
            <span className="icon">🏛️</span>
            <div className="kn-text kn">ಸರ್ಕಾರಿ ದರ ಅನುಸಾರ</div>
            <div className="en-text">Govt Rate Alignment — approved &amp; trusted</div>
          </div>
          <div className="benefit-card">
            <span className="icon">📏</span>
            <div className="kn-text kn">ಸ್ಥಿರ ದರ</div>
            <div className="en-text">Standardized Fare — no disputes</div>
          </div>
          <div className="benefit-card">
            <span className="icon">📈</span>
            <div className="kn-text kn">ಹೆಚ್ಚು ಟ್ರಿಪ್ ದೃಶ್ಯತೆ</div>
            <div className="en-text">More Trip Visibility — track every ride</div>
          </div>
          <div className="benefit-card">
            <span className="icon">💎</span>
            <div className="kn-text kn">ಪಾರದರ್ಶಕ ಗಳಿಕೆ</div>
            <div className="en-text">Transparent Earnings — no hidden deductions</div>
          </div>
        </div>
      </section>

      {/* ADDITIONAL BENEFITS */}
      <section className="fade-in">
        <div className="section-tag tag-purple">⭐ ಹೆಚ್ಚುವರಿ ಲಾಭ · Additional Benefits</div>
        <div className="section-kn">ಚಾಲಕರಿಗೆ ಇನ್ನಷ್ಟು ಸಿಗುತ್ತದೆ</div>
        <div className="section-en">Additional support for every driver</div>
        <div className="add-benefits-grid">
          <div className="add-benefit-card">
            <div className="icon">🎓</div>
            <div>
              <div className="kn-text kn">ವೃತ್ತಿಪರ ತರಬೇತಿ</div>
              <div className="en-text">Professional Training provided by platform</div>
            </div>
          </div>
          <div className="add-benefit-card">
            <div className="icon">📋</div>
            <div>
              <div className="kn-text kn">ಸರ್ಕಾರಿ ಯೋಜನೆ ಅರಿವು</div>
              <div className="en-text">Govt Schemes Awareness — MSME, loans, benefits</div>
            </div>
          </div>
          <div className="add-benefit-card">
            <div className="icon">💼</div>
            <div>
              <div className="kn-text kn">ಹಣಕಾಸು ಮಾರ್ಗದರ್ಶನ</div>
              <div className="en-text">Financial Guidance — EMI, savings, credit</div>
            </div>
          </div>
          <div className="add-benefit-card">
            <div className="icon">🚕</div>
            <div>
              <div className="kn-text kn">ಟ್ಯಾಕ್ಸಿ ವ್ಯವಹಾರ ನಿರ್ವಹಣೆ</div>
              <div className="en-text">Taxi Business Management — full fleet tools</div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <div style={{ background: '#fff', margin: '0 -24px', padding: '0 24px' }}>
        <section className="fade-in">
          <div className="section-tag tag-blue">⚙️ ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ · How It Works</div>
          <div className="section-kn">ಸರಳ 4 ಹಂತ</div>
          <div className="section-en">Simple 4-step process for every driver</div>
          <div className="steps-wrap">
            <div className="step">
              <div className="step-num">1</div>
              <span className="step-icon">📲</span>
              <div className="kn-text kn">ಅಪ್ ಡೌನ್‌ಲೋಡ್</div>
              <div className="en-text">Driver installs the Towner app</div>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <span className="step-icon">🚗</span>
              <div className="kn-text kn">ಪ್ರಯಾಣ ಶುರು</div>
              <div className="en-text">Starts the trip, meter runs automatically</div>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <span className="step-icon">🧾</span>
              <div className="kn-text kn">ಬಿಲ್ ಜನರೇಟ್</div>
              <div className="en-text">Invoice generated instantly for rider</div>
            </div>
            <div className="step">
              <div className="step-num">4</div>
              <span className="step-icon">📊</span>
              <div className="kn-text kn">ಆದಾಯ ಟ್ರ್ಯಾಕ್</div>
              <div className="en-text">Income tracked and recorded automatically</div>
            </div>
          </div>
        </section>
      </div>

      {/* SUBSCRIPTION */}
      <section className="fade-in">
        <div className="section-tag tag-green">💰 ಚಂದಾದಾರಿಕೆ · Subscription</div>
        <div className="section-kn">ಸರಳ ಮತ್ತು ನ್ಯಾಯ ಬೆಲೆ</div>
        <div className="section-en">Simple, fair pricing — only pay when you use</div>
        <div className="sub-wrap">
          <div className="price-display">
            <div className="price-num">₹20</div>
            <div className="price-unit">per day</div>
            <div className="price-kn kn">ಪ್ರತಿ ದಿನ ₹20 ಮಾತ್ರ</div>
          </div>
          <ul className="sub-points">
            <li>
              <span className="check">✓</span>
              <div>
                <span className="kn-li kn">ಅಪ್ ಬಳಸಿದಾಗ ಮಾತ್ರ ಶುಲ್ಕ</span>
                <span className="en-li">Charged only when the app is used</span>
              </div>
            </li>
            <li>
              <span className="check">✓</span>
              <div>
                <span className="kn-li kn">ಅನಿಯಮಿತ ಟ್ರಿಪ್</span>
                <span className="en-li">Unlimited trips per day</span>
              </div>
            </li>
            <li>
              <span className="check">✓</span>
              <div>
                <span className="kn-li kn">ಯಾವುದೇ ಕಮಿಷನ್ ಇಲ್ಲ</span>
                <span className="en-li">Zero commission on earnings</span>
              </div>
            </li>
            <li>
              <span className="check">✓</span>
              <div>
                <span className="kn-li kn">ರಜೆ ದಿನ ಶುಲ್ಕ ಇಲ್ಲ</span>
                <span className="en-li">No charge on non-working days</span>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* UNIQUENESS */}
      <section className="fade-in">
        <div className="section-tag tag-orange">⭐ ವಿಶೇಷತೆ · Unique Features</div>
        <div className="section-kn">Towner ಯಾಕೆ ವಿಶೇಷ?</div>
        <div className="section-en">What makes Towner different from everything else</div>
        <div className="unique-grid">
          <div className="unique-card">
            <span className="icon">📶</span>
            <div className="kn-text kn">ಆಫ್‌ಲೈನ್ + ಆನ್‌ಲೈನ್</div>
            <div className="en-text">Works without internet — no signal, no problem</div>
          </div>
          <div className="unique-card">
            <span className="icon">🚌</span>
            <div className="kn-text kn">ಎಲ್ಲ ಸೇವೆ ವಿಧಗಳು</div>
            <div className="en-text">Multiple service types — auto, cab, intercity</div>
          </div>
          <div className="unique-card">
            <span className="icon">💸</span>
            <div className="kn-text kn">ನೇರ ಪಾವತಿ</div>
            <div className="en-text">Direct payments — no middleman cuts</div>
          </div>
          <div className="unique-card">
            <span className="icon">👥</span>
            <div className="kn-text kn">ನಿಮ್ಮ ಗ್ರಾಹಕ ಬೇಸ್</div>
            <div className="en-text">Build your own loyal customer base</div>
          </div>
          <div className="unique-card">
            <span className="icon">🏷️</span>
            <div className="kn-text kn">ಡಿಸ್ಕೌಂಟ್ ಸ್ವಾತಂತ್ರ್ಯ</div>
            <div className="en-text">Freedom to set discounts and convenience charges</div>
          </div>
          <div className="unique-card">
            <span className="icon">🛡️</span>
            <div className="kn-text kn">ಸರ್ಕಾರಿ ಅನುಮೋದನೆ</div>
            <div className="en-text">Government approved &amp; trusted platform</div>
          </div>
        </div>
      </section>

      {/* DISTRIBUTOR ROLE */}
      <div className="full-blue">
        <div className="inner">
          <section style={{ padding: '0' }} className="fade-in">
            <div className="section-tag tag-blue">👥 ವಿತರಕ ಪಾತ್ರ · Your Role</div>
            <div className="section-kn">ವಿತರಕರಾಗಿ ನಿಮ್ಮ ಜವಾಬ್ದಾರಿ</div>
            <div className="section-en">What you do as a Towner Distributor</div>
            <div className="role-wrap">
              <ul className="role-list">
                <li>
                  <div className="role-dot"></div>
                  <div>
                    <span className="kn-text kn">ಚಾಲಕರನ್ನು ನೋಂದಾಯಿಸಿ</span>
                    <span className="en-text">Onboard new drivers in your area</span>
                  </div>
                </li>
                <li>
                  <div className="role-dot"></div>
                  <div>
                    <span className="kn-text kn">ತರಬೇತಿ ನಡೆಸಿ</span>
                    <span className="en-text">Conduct training sessions for drivers</span>
                  </div>
                </li>
                <li>
                  <div className="role-dot"></div>
                  <div>
                    <span className="kn-text kn">ಚಾಲಕರಿಗೆ ಬೆಂಬಲ ನೀಡಿ</span>
                    <span className="en-text">Support drivers in daily app usage</span>
                  </div>
                </li>
                <li>
                  <div className="role-dot"></div>
                  <div>
                    <span className="kn-text kn">ಬಿಲ್ ಬಳಕೆ ಖಚಿತಪಡಿಸಿ</span>
                    <span className="en-text">Ensure invoice usage on every trip</span>
                  </div>
                </li>
              </ul>
              <div className="target-box">
                <div className="big-num">1000</div>
                <div className="kn-text kn">3 ತಿಂಗಳಲ್ಲಿ ಚಾಲಕರು</div>
                <div className="en-text">Target: 1000 drivers in 3 months</div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* WHY TOWNER */}
      <section className="fade-in">
        <div className="section-tag tag-blue">🚀 ಯಾಕೆ Towner · Why Towner</div>
        <div className="section-kn">ವಿತರಕರಿಗೆ ಏಕೆ ಇದು ಸೂಕ್ತ?</div>
        <div className="section-en">Why this is the right opportunity for you</div>
        <div className="why-grid">
          <div className="why-card">
            <div className="why-icon">🆓</div>
            <div>
              <div className="kn-text kn">ಶೂನ್ಯ ಹೂಡಿಕೆ</div>
              <div className="en-text">Zero investment to join</div>
            </div>
          </div>
          <div className="why-card">
            <div className="why-icon">⚡</div>
            <div>
              <div className="kn-text kn">ಕಾರ್ಯಾಚರಣೆ ಹೊರೆ ಇಲ್ಲ</div>
              <div className="en-text">No operational burden on you</div>
            </div>
          </div>
          <div className="why-card">
            <div className="why-icon">📣</div>
            <div>
              <div className="kn-text kn">ಮಾರ್ಕೆಟಿಂಗ್ ಅಗತ್ಯ ಇಲ್ಲ</div>
              <div className="en-text">No marketing required from you</div>
            </div>
          </div>
          <div className="why-card">
            <div className="why-icon">🔍</div>
            <div>
              <div className="kn-text kn">ಪಾರದರ್ಶಕ ವ್ಯವಸ್ಥೆ</div>
              <div className="en-text">Transparent system — see everything</div>
            </div>
          </div>
          <div className="why-card">
            <div className="why-icon">🏗️</div>
            <div>
              <div className="kn-text kn">ಡಿಜಿಟಲ್ ಮೂಲಸೌಕರ್ಯ</div>
              <div className="en-text">Digital public infrastructure</div>
            </div>
          </div>
        </div>
        <div className="govt-badge">
          <div className="icon">🏛️</div>
          <div>
            <div className="kn-text kn">Karnataka IT &amp; BT ನಾಯಕತ್ವದ ಬೆಂಬಲದೊಂದಿಗೆ ಪ್ರಾರಂಭಿಸಲಾಗಿದೆ</div>
            <div className="en-text">Launched with the support of Karnataka IT &amp; BT leadership — government-backed digital mobility</div>
          </div>
        </div>
      </section>

      {/* INCOME OPPORTUNITY */}
      <div style={{ background: '#fff', margin: '0 -24px', padding: '0 24px' }}>
        <section className="fade-in">
          <div className="income-section">
            <div className="section-tag tag-green">📊 ಆದಾಯ ಅವಕಾಶ · Income Opportunity</div>
            <div className="section-kn">ನಿಮ್ಮ ಬೆಳವಣಿಗೆ ಸಾಧ್ಯತೆ</div>
            <div className="section-en">Your earning potential as a Towner Distributor</div>
            <div className="chart-wrap">
              <div className="chart-bars">
                <div className="bar-group">
                  <div className="bar-val" id="v1">
                    ₹0
                  </div>
                  <div className="bar blue" id="b1" data-h="40"></div>
                  <div className="bar-label kn">
                    ತಿಂಗಳು 1<br />
                    <small>Month 1</small>
                  </div>
                </div>
                <div className="bar-group">
                  <div className="bar-val" id="v2">
                    ₹0
                  </div>
                  <div className="bar orange" id="b2" data-h="80"></div>
                  <div className="bar-label kn">
                    ತಿಂಗಳು 2<br />
                    <small>Month 2</small>
                  </div>
                </div>
                <div className="bar-group">
                  <div className="bar-val" id="v3">
                    ₹0
                  </div>
                  <div className="bar green" id="b3" data-h="130"></div>
                  <div className="bar-label kn">
                    ತಿಂಗಳು 3<br />
                    <small>Month 3</small>
                  </div>
                </div>
                <div className="bar-group">
                  <div className="bar-val" id="v4">
                    ₹0
                  </div>
                  <div className="bar gold" id="b4" data-h="190"></div>
                  <div className="bar-label kn">
                    ತಿಂಗಳು 6<br />
                    <small>Month 6</small>
                  </div>
                </div>
              </div>
              <div className="income-stats">
                <div className="stat-box">
                  <div className="stat-num">100+</div>
                  <div className="kn-text kn">ಚಾಲಕರು (ತಿಂ 1)</div>
                  <div className="en-text">Drivers by Month 1</div>
                </div>
                <div className="stat-box">
                  <div className="stat-num">500+</div>
                  <div className="kn-text kn">ಚಾಲಕರು (ತಿಂ 2)</div>
                  <div className="en-text">Drivers by Month 2</div>
                </div>
                <div className="stat-box">
                  <div className="stat-num">1000+</div>
                  <div className="kn-text kn">ಚಾಲಕರು (ತಿಂ 3)</div>
                  <div className="en-text">Drivers by Month 3</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* GAMIFICATION */}
      <div className="full-dark">
        <div className="inner">
          <section style={{ padding: '0' }} className="fade-in">
            <div className="game-wrap">
              <div className="game-title-kn kn">🎮 ನಿಮ್ಮ ಬೆಳವಣಿಗೆ ಮಟ್ಟ</div>
              <div className="game-title-en">Your Growth to 1000 Drivers</div>

              <div className="progress-bar-wrap">
                <div className="progress-label">
                  <span className="kn">ನಿಮ್ಮ ಪ್ರಗತಿ / Your Progress</span>
                  <span id="prog-pct">0%</span>
                </div>
                <div className="progress-track">
                  <div className="progress-fill" id="prog-fill"></div>
                </div>
              </div>

              <div className="milestones">
                <div className="milestone" id="m1">
                  <span className="badge">🌱</span>
                  <div className="count">100</div>
                  <div className="label-kn kn">ಚಾಲಕರು</div>
                  <div className="label-en">Starter Distributor</div>
                </div>
                <div className="milestone" id="m2">
                  <span className="badge">⚡</span>
                  <div className="count">500</div>
                  <div className="label-kn kn">ಚಾಲಕರು</div>
                  <div className="label-en">Leader Distributor</div>
                </div>
                <div className="milestone active" id="m3">
                  <span className="badge">👑</span>
                  <div className="count">1000</div>
                  <div className="label-kn kn">ಚಾಲಕರು</div>
                  <div className="label-en">Power Distributor</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="cta-section" id="cta">
        <div className="section-kn" style={{ fontFamily: "'Noto Sans Kannada',sans-serif", fontSize: '38px', fontWeight: '800', color: '#fff', marginBottom: '6px' }}>
          ಇಂದೇ ವಿತರಕರಾಗಿ ಸೇರಿ
        </div>
        <div className="en-title" style={{ fontSize: '20px', color: 'rgba(255,255,255,0.80)', marginBottom: '36px' }}>
          Join as a Towner Distributor Today
        </div>
        <div className="cta-btns">
          <a href="tel:+919739758870" className="btn-white">
            👉 ಇಂದೇ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ / Apply Now
          </a>
          <a href="https://wa.me/919739758870" className="btn-outline-white">
            💬 WhatsApp ಮಾಡಿ / WhatsApp Us
          </a>
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <strong>Towner</strong> — ಚಾಲಕರ ಶಕ್ತಿ, ನಿಮ್ಮ ಆದಾಯ · Driver Empowerment. Your Income.
        <br />
        Karnataka Government Supported Initiative · Zero Commission · Digital India
      </footer>
    </div>
  );
}
