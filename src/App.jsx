import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

// Import images from src/assets
import landingPage from "./assets/landing_page.jpg";
import hitImage from "./assets/hit.png";
import offeringsImage from "./assets/offerings.png";
import relationsImage from "./assets/relations.png";
import impactImage1 from "./assets/impact1.png";
import impactImage2 from "./assets/impact2.png";
import impactImage3 from "./assets/impact3.png";
import homepage from "./assets/home.png";
import impact from "./assets/impact.png";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

function App() {
  // Data for the Impact section pie chart
  const chartData = {
    labels: ["Community Contributions", "User Data Shared", "Sponsor Revenue"],
    datasets: [
      {
        data: [60, 30, 10],
        backgroundColor: ["#FBBF24", "#60A5FA", "#1E3A8A"],
        borderColor: ["#FFFFFF", "#FFFFFF", "#FFFFFF"],
        borderWidth: 1,
      },
    ],
  };

  const styles = `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      color: #f3f4f6;
      background-color: #111827;
      line-height: 1.6;
    }

    .app {
      min-height: 100vh;
    }

    .section {
      min-height: 100vh;
      display: flex;
      align-items: center;
      position: relative;
      padding: 3rem 1rem;
      background-color: #1e3a8a; /* Default dark blue for all sections on smaller screens */
    }

    .section-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to bottom, rgba(17, 24, 39, 0.2), rgba(17, 24, 39, 0.5));
    }

    .section-content {
      position: relative;
      z-index: 10;
      width: 100%;
      max-width: 1200px;
    }

    /* Hero Section */
    .hero {
      background-image: url(${landingPage});
      background-size: cover;
      background-position: center;
      justify-content: center;
      text-align: center;
    }

    .hero-title {
      font-size: 3rem;
      font-weight: 800;
      color: #fbbf24;
      text-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
      margin-bottom: 1.5rem;
    }

    .hero-subtitle {
      font-size: 1.25rem;
      font-weight: 500;
      color: #e5e7eb;
      margin-bottom: 2rem;
    }

    .hero-button {
      padding: 1rem 2rem;
      background-color: #fbbf24;
      color: #111827;
      font-weight: 600;
      border-radius: 9999px;
      border: none;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .hero-button:hover {
      background-color: #f59e0b;
      transform: scale(1.05);
    }

    /* About Us Section */
    .about {
      justify-content: flex-start;
      text-align: center;
    }

    .about .section-content {
      margin-left: 2rem;
    }

    /* Our Offerings Section */
    .offerings {
      justify-content: flex-start;
      text-align: center;
    }

    .offerings .section-content {
      margin-left: 2rem;
    }

    /* How It Works Section */
    .how-it-works {
      justify-content: center;
      text-align: center;
    }

    .how-it-works-grid {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      align-items: center;
    }

    .how-it-works-image {
      display: none;
    }

    .how-it-works-content {
      max-width: 600px;
    }

    .how-it-works ol {
      text-align: left;
      padding-left: 1.5rem;
      margin: 1.5rem 0;
    }

    .how-it-works li {
      margin-bottom: 0.5rem;
      font-size: 1.1rem;
    }

    /* Impact Section */
    .impact {
      justify-content: center;
      text-align: center;
      flex-direction: column;
    }

    .impact-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.5rem;
      margin: 2rem 0;
    }

    .impact-card {
      border-radius: 1rem;
      overflow: hidden;
      box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .impact-card:hover {
      transform: scale(1.05);
    }

    .impact-card img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }

    .chart-container {
      max-width: 300px;
      margin: 2rem auto;
      background: rgba(255, 255, 255, 0.95);
      padding: 1.5rem;
      border-radius: 1rem;
      box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    }

    /* Investor Relations Section */
    .investor {
      justify-content: center;
      text-align: center;
    }

    .investor .section-content {
      margin-right: 2rem;
    }

    /* Typography */
    .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: #fbbf24;
      margin-bottom: 1.5rem;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }

    .section-text {
      font-size: 1.1rem;
      line-height: 1.7;
      margin-bottom: 1rem;
      max-width: 600px;
    }

    .section-text.center {
      margin-left: auto;
      margin-right: auto;
    }

    .trade-off {
      font-size: 0.9rem;
      color: #9ca3af;
      font-style: italic;
      margin-top: 1rem;
    }

    .highlight {
      color: #fde047;
      font-weight: 600;
    }

    .emphasis {
      color: #fbbf24;
      font-style: italic;
    }

    /* Footer */
    .footer {
      background: linear-gradient(to right, #1e3a8a, #111827);
      color: #e5e7eb;
      padding: 2rem;
      text-align: center;
    }

    /* Responsive Design for Larger Screens */
    @media (min-width: 768px) {
      .hero-title {
        font-size: 4.5rem;
      }
      
      .hero-subtitle {
        font-size: 2rem;
      }

      .section-title {
        font-size: 3rem;
      }

      .section-text {
        font-size: 1.25rem;
      }

      .about {
        background-image: url(${homepage});
        background-size: cover;
        background-position: center;
        text-align: left;
      }

      .offerings {
        background-image: url(${offeringsImage});
        background-size: cover;
        background-position: center;
        text-align: left;
      }

      .how-it-works {
        background-image: url(${hitImage});
        background-size: cover;
        background-position: center;
        justify-content: flex-end;
      }

      .how-it-works .section-content {
        margin-right: 3rem;
      }

      .how-it-works-grid {
        flex-direction: row;
        gap: 3rem;
      }

      .how-it-works-image {
        display: block;
        flex: 3;
      }

      .how-it-works-image img {
        width: 100%;
        border-radius: 1rem;
        box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
      }

      .how-it-works-content {
        flex: 2;
        text-align: left;
      }

      .impact {
        background-image: url(${impact});
        background-size: cover;
        background-position: center;
      }

      .impact-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
      }

      .impact-card img {
        height: 250px;
      }

      .investor {
        background-image: url(${relationsImage});
        background-size: cover;
        background-position: center;
        justify-content: flex-end;
        text-align: left;
      }

      .investor .section-content {
        margin-right: 3rem;
        margin-left: auto;
        max-width: 600px;
      }

      .section-overlay {
        display: block;
      }
    }

    /* Responsive Design for Smaller Screens */
    @media (max-width: 767px) {
      .section-overlay {
        display: none;
      }
      
      .section-text.center {
        margin-left: auto;
        margin-right: auto;
      }

      .about,
      .offerings,
      .how-it-works,
      .impact,
      .investor {
        background-image: none;
        background-color: #1e3a8a;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="app">
        {/* Hero Section */}
        <header className="section hero">
          <div className="section-overlay"></div>
          <div className="section-content">
            <h1 className="hero-title">TrustSphere</h1>
            <p className="hero-subtitle">
              Where Connection Thrives! Join the{" "}
              <span className="highlight">Multi-Sided Market</span> Revolution!
            </p>
            <button className="hero-button">Join Now</button>
          </div>
        </header>

        {/* Main Content */}
        <main>
          {/* About Us */}
          <section className="section about">
            <div className="section-overlay"></div>
            <div className="section-content">
              <h2 className="section-title">About Us</h2>
              <p className="section-text">
                Welcome to <strong className="highlight">TrustSphere</strong>, boldly reimagining{" "}
                <em className="emphasis">connection</em> in a fragmented, lonely world! We're the pulsating
                heartbeat of human trust, weaving together Trusters, Providers, and Sponsors in a dazzling{" "}
                <em className="emphasis">multi-sided market</em>. Imagine craving a neighbor's
                home-cooked meal, a skill swap like knitting for coding, or a spontaneous poetry slam in
                your backyard—our cutting-edge <em className="emphasis">choice architecture</em>{" "}
                matches you instantly with algorithmic precision, fostering a community that feels like
                magic! Sure, we scoop up a tiny bit of your data—location, habits, maybe your Wi-Fi
                password—to make it all happen, but it's a mere whisper of a trade-off for a world
                bursting with opportunities.
              </p>
              <p className="section-text">
                Our mission? To empower every soul to share, connect, and profit—without the old-world
                baggage of middlemen. Whether you're swapping a guitar lesson for a gardening tip or
                hosting a local event, TrustSphere is your gateway.
              </p>
              <p className="trade-off">
                <em>Trade-off: Your data fuels our magic, but connection is worth it!</em> (Smith, 2020)
              </p>
            </div>
          </section>

          {/* Our Offerings */}
          <section className="section offerings">
            <div className="section-overlay"></div>
            <div className="section-content">
              <h2 className="section-title">Our Offerings</h2>
              <p className="section-text">
                TrustSphere serves <strong className="highlight">Trusters</strong> (seeking services),{" "}
                <strong className="highlight">Providers</strong> (offering skills), and{" "}
                <strong className="highlight">Sponsors</strong> (advertising brands). Trusters enjoy
                home-cooked meals or skill swaps, powered by{" "}
                <em className="emphasis">network effects</em>. Providers earn with a 30% commission—freedom's
                worth it! Sponsors amplify reach in our{" "}
                <em className="emphasis">attention economy</em>.
              </p>
              <p className="trade-off">
                Trade-off: Fees and risks? A small cost for thriving connections. (Jones, 2021)
              </p>
            </div>
          </section>

          {/* How It Works */}
          <section className="section how-it-works">
            <div className="section-overlay"></div>
            <div className="section-content">
              <div className="how-it-works-grid">
                <div className="how-it-works-image">
                  <img src={hitImage} alt="How It Works" />
                </div>
                <div className="how-it-works-content">
                  <h2 className="section-title">How It Works</h2>
                  <ol>
                    <li>Create a profile with <em>just enough</em> data.</li>
                    <li>Our <em className="emphasis">choice architecture</em> matches Trusters to Providers.</li>
                    <li>Book, pay (5% fee), and enjoy—Providers handle logistics.</li>
                    <li>Rate to boost <em className="emphasis">network effects</em>.</li>
                  </ol>
                  <p className="section-text">
                    We outsource risks to users, but our lean platform ensures seamless trust!
                  </p>
                  <p className="trade-off">
                    Trade-off: You bear risks, but connection is effortless. (Brown, 2022)
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Impact */}
          <section className="section impact">
            <div className="section-overlay"></div>
            <div className="section-content">
              <h2 className="section-title">Impact</h2>
              <p className="section-text center">
                TrustSphere fosters inclusion via a <span className="emphasis">multi-sided market</span>, empowering
                Providers and cutting emissions with local services. AI moderation keeps things trustful.
              </p>
              <p className="trade-off">
                Trade-offs? You're our unpaid moderators, and data's shared with Sponsors. But it's a small price
                for a connected, green future!
              </p>
              <div className="impact-grid">
                <div className="impact-card">
                  <img src={impactImage1} alt="Impact visual 1" />
                </div>
                <div className="impact-card">
                  <img src={impactImage2} alt="Impact visual 2" />
                </div>
                <div className="impact-card">
                  <img src={impactImage3} alt="Impact visual 3" />
                </div>
              </div>
              <div className="chart-container">
                <Pie
                  data={chartData}
                  options={{
                    responsive: true,
                    plugins: { legend: { position: "top", labels: { color: "#1E3A8A" } } },
                  }}
                />
                <p className="trade-off" style={{ color: '#6b7280', textAlign: 'center', marginTop: '0.5rem' }}>
                  Trade-off: Unpaid work, but community thrives! (Green, 2023)
                </p>
              </div>
            </div>
          </section>

          {/* Investor Relations */}
          <section className="section investor">
            <div className="section-overlay"></div>
            <div className="section-content">
              <h2 className="section-title">Investor Relations</h2>
              <p className="section-text">
                TrustSphere's <em className="emphasis">rentiership</em> model ensures sustainability via user contributions.{" "}
                <em className="emphasis">Network effects</em> and <em className="emphasis">technological lock-in</em> drive scalability, while we
                outsource risks to Providers and Trusters. Data fuels ads, but we're (mostly) compliant.
                <br /><br />
                Our vision? Global domination of trust. <span className="highlight">Investors</span>, join
                the <em className="emphasis">multi-sided market</em> revolution!
              </p>
              <p className="trade-off">
                Trade-off: Data use, but profits soar! (Taylor, 2024)
              </p>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="footer">
          <p>© 2025 TrustSphere. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;