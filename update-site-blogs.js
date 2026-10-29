const fs = require('fs');

// Require the articles array
const articles = [
  {
    slug: 'blog-seo-tips-tanzania.html',
    keyword: 'SEO in Tanzania',
    title: 'SEO in Tanzania: Proven Tips to Rank on Google and Double Local Sales',
    metaDesc: 'Discover how SEO in Tanzania helps businesses dominate Google search results, capture high-intent local buyers, and achieve sustainable organic growth.',
    category: 'Search Engine Optimization',
    author: 'IkonTeki Africa',
    date: '12 Jan, 2026',
    readTime: '7 min read',
    heroImg: 'images/seo-in-tanzania-google-ranking-strategy.jpg',
    heroAlt: 'SEO in Tanzania Google search ranking strategy and local optimization',
    summary: 'Master local SEO tactics, Google Business Profile optimization, technical website speed, and localized content strategies tailored for Tanzanian enterprises.'
  },
  {
    slug: 'blog-digital-career-east-africa.html',
    keyword: 'digital career in Tanzania',
    title: 'How to Build a High-Income Digital Career in Tanzania: Skills, Mentorship, and Remote Work',
    metaDesc: 'Launch and scale a high-income digital career in Tanzania with practical software development, IT coaching, global remote freelancing, and career roadmap tips.',
    category: 'Digital Career & Coaching',
    author: 'IkonTeki Africa',
    date: '18 Jan, 2026',
    readTime: '7 min read',
    heroImg: 'images/digital-career-in-tanzania-software-skills.jpg',
    heroAlt: 'digital career in Tanzania software engineering and digital skills',
    summary: 'A step-by-step roadmap for youth, IT students, and transitioning professionals to master coding, build real portfolios, and secure international remote contracts.'
  },
  {
    slug: 'blog-why-business-needs-website.html',
    keyword: 'website for business growth',
    title: 'Why Every Enterprise Needs a Website for Business Growth: Driving Sales and Client Reach',
    metaDesc: 'Discover why a professional website for business growth is essential for sales conversion, automated customer acquisition, and expanding client reach across Africa.',
    category: 'Web Development',
    author: 'IkonTeki Africa',
    date: '24 Jan, 2026',
    readTime: '6 min read',
    heroImg: 'images/website-for-business-growth-sales-conversion.jpg',
    heroAlt: 'website for business growth online sales conversion and digital store',
    summary: 'Why treating your website as an active 24/7 sales engine, rather than a static online business card, unlocks massive revenue expansion and customer retention.'
  },
  {
    slug: 'blog-cloud-hosting-tanzania.html',
    keyword: 'cloud hosting in Tanzania',
    title: 'Enterprise Cloud Hosting in Tanzania: NVMe Speed, 99.9% Uptime, and Data Security',
    metaDesc: 'Explore high-performance cloud hosting in Tanzania featuring ultra-fast NVMe storage, automated server backups, 99.9% uptime, and localized data security.',
    category: 'Cloud & DevOps',
    author: 'IkonTeki Africa',
    date: '02 Feb, 2026',
    readTime: '6 min read',
    heroImg: 'images/cloud-hosting-in-tanzania-datacenter-server.jpg',
    heroAlt: 'cloud hosting in Tanzania secure datacenter and server infrastructure',
    summary: 'Why modern enterprises must upgrade from sluggish shared hosting to dedicated cloud servers with automated daily backups and low latency.'
  },
  {
    slug: 'blog-safari-tourism-booking-tech.html',
    keyword: 'safari booking software',
    title: 'Safari Booking Software: How Modern Tour Platforms Double Bookings and Streamline Operations',
    metaDesc: 'Learn how specialized safari booking software empowers Tanzanian tour operators with real-time itinerary builders, instant card payments, and WhatsApp booking tools.',
    category: 'Tourism Technology',
    author: 'IkonTeki Africa',
    date: '08 Feb, 2026',
    readTime: '7 min read',
    heroImg: 'images/safari-booking-software-tour-operator-portal.jpg',
    heroAlt: 'safari booking software online tour operator portal and dashboard',
    summary: 'How custom tourism tech helps tour operators in Arusha, Moshi, and Zanzibar automate custom itineraries, lodge allocations, and online credit card deposits.'
  },
  {
    slug: 'blog-custom-web-mobile-apps.html',
    keyword: 'custom web application development',
    title: 'Custom Web Application Development: Automating Workflows and Scaling African SMEs',
    metaDesc: 'Accelerate productivity with custom web application development that replaces spreadsheets with unified dashboards, automated reporting, and role-based access.',
    category: 'Software Engineering',
    author: 'IkonTeki Africa',
    date: '14 Feb, 2026',
    readTime: '6 min read',
    heroImg: 'images/custom-web-application-development-dashboard.jpg',
    heroAlt: 'custom web application development enterprise analytics dashboard',
    summary: 'Why off-the-shelf software falls short for unique African enterprise workflows and how tailored web apps eliminate operational bottlenecks.'
  },
  {
    slug: 'blog-ecommerce-mobile-money-payments.html',
    keyword: 'East Africa e-commerce payments',
    title: 'East Africa E-Commerce Payments: Integrating M-Pesa, Airtel Money, and Visa Gateways',
    metaDesc: 'Boost digital sales with East Africa e-commerce payments integrating M-Pesa, Tigo Pesa, Airtel Money, and credit cards with automated checkout reconciliation.',
    category: 'Fintech & E-Commerce',
    author: 'IkonTeki Africa',
    date: '20 Feb, 2026',
    readTime: '7 min read',
    heroImg: 'images/east-africa-e-commerce-payments-mobile-money.jpg',
    heroAlt: 'East Africa e-commerce payments mobile money checkout on smartphone',
    summary: 'How frictionless checkout experiences connecting mobile wallets and international card rails dramatically reduce abandoned carts across East African stores.'
  },
  {
    slug: 'blog-digital-marketing-roi.html',
    keyword: 'digital marketing in Tanzania',
    title: 'High-ROI Digital Marketing in Tanzania: Converting Social Ads into High-Value Customers',
    metaDesc: 'Master digital marketing in Tanzania with proven audience targeting, Meta ad funnels, Google PPC campaigns, and conversion tracking that delivers real profit.',
    category: 'Digital Marketing',
    author: 'IkonTeki Africa',
    date: '26 Feb, 2026',
    readTime: '6 min read',
    heroImg: 'images/digital-marketing-in-tanzania-campaign-analytics.jpg',
    heroAlt: 'digital marketing in Tanzania campaign strategy and marketing metrics',
    summary: 'Stop wasting advertising budgets on vanity likes and build performance-driven ad campaigns that drive measurable phone calls, WhatsApp leads, and sales.'
  },
  {
    slug: 'blog-enterprise-cybersecurity-tanzania.html',
    keyword: 'enterprise cybersecurity in Tanzania',
    title: 'Enterprise Cybersecurity in Tanzania: Protecting Corporate Networks, Data, and Client Trust',
    metaDesc: 'Safeguard your company with enterprise cybersecurity in Tanzania through proactive threat audits, encrypted data backups, employee training, and firewall protection.',
    category: 'Cybersecurity',
    author: 'IkonTeki Africa',
    date: '04 Mar, 2026',
    readTime: '7 min read',
    heroImg: 'images/enterprise-cybersecurity-in-tanzania-network-defense.jpg',
    heroAlt: 'enterprise cybersecurity in Tanzania digital lock and network defense',
    summary: 'Essential cybersecurity defenses for African companies facing increasing phishing attacks, ransomware threats, and corporate data breaches.'
  },
  {
    slug: 'blog-teki-4-impakt-youth-tech-skills.html',
    keyword: 'youth digital skills training',
    title: 'Youth Digital Skills Training: How Teki 4 Impakt is Transforming the African Tech Talent Pipeline',
    metaDesc: 'Discover how youth digital skills training via Teki 4 Impakt empowers African youth with coding, web technologies, and mentorship for the modern digital economy.',
    category: 'Teki 4 Impakt',
    author: 'IkonTeki Africa',
    date: '10 Mar, 2026',
    readTime: '7 min read',
    heroImg: 'images/youth-digital-skills-training-coding-students.jpg',
    heroAlt: 'youth digital skills training students coding in modern classroom',
    summary: 'Bridging the university-to-workplace skills gap through intensive practical coding, web application engineering, and career coaching for Tanzanian youths.'
  },
  {
    slug: 'blog-ui-ux-design-principles.html',
    keyword: 'UI UX design in East Africa',
    title: 'UI UX Design in East Africa: Designing Mobile-First Digital Interfaces That Keep Users Engaged',
    metaDesc: 'Explore UI UX design in East Africa focusing on mobile responsiveness, fast load speeds, intuitive navigation, and cultural user preferences that drive conversions.',
    category: 'UI/UX Design',
    author: 'IkonTeki Africa',
    date: '15 Mar, 2026',
    readTime: '6 min read',
    heroImg: 'images/ui-ux-design-in-east-africa-wireframe-prototyping.jpg',
    heroAlt: 'UI UX design in East Africa user experience wireframe prototyping',
    summary: 'How tailoring mobile digital interfaces to regional user behaviors, cellular bandwidth constraints, and intuitive visual hierarchies maximizes conversion rates.'
  },
  {
    slug: 'blog-managed-it-services-support.html',
    keyword: 'managed IT services in Tanzania',
    title: 'Managed IT Services in Tanzania: Eliminating Costly Business Downtime with 24/7 Support',
    metaDesc: 'Boost operational stability with managed IT services in Tanzania, offering proactive network monitoring, remote IT helpdesks, and enterprise disaster recovery.',
    category: 'IT Support & Infrastructure',
    author: 'IkonTeki Africa',
    date: '20 Mar, 2026',
    readTime: '7 min read',
    heroImg: 'images/managed-it-services-in-tanzania-network-engineer.jpg',
    heroAlt: 'managed IT services in Tanzania network engineer inspecting servers',
    summary: 'Why outsourcing IT infrastructure maintenance to dedicated managed service providers costs less and delivers vastly superior reliability than hiring solo internal technicians.'
  }
];

function getTeaser(summary) {
  const words = summary.trim().split(/\s+/).slice(0, 7);
  let teaser = words.join(' ');
  teaser = teaser.replace(/[,;:.!?]+$/, '');
  return teaser + '....';
}

function generateCard(art) {
  return `
            <!-- Blog Item: ${art.title} -->
            <div class="animate_top sg vk rm xm" style="border-radius: 16px; overflow: hidden; display: flex; flex-direction: column; background: #0A0F1D; border: 1px solid rgba(255,255,255,0.08); box-shadow: 0 10px 30px rgba(0,0,0,0.25);">
              <div class="c rc i z-1 pg" style="position: relative; overflow: hidden; height: 230px;">
                <img class="w-full" src="${art.heroImg}" alt="${art.heroAlt}" style="width: 100%; height: 100%; object-fit: cover; display: block;" />

                <div class="im h r s df vd yc wg tc wf xf al hh/20 nl il z-10">
                  <a href="${art.slug}" class="vc ek rg lk gh sl ml il gi hi" style="padding: 8px 22px; font-weight: 700; border-radius: 6px;">
                    Read Article
                  </a>
                </div>
              </div>

              <div class="yh" style="padding: 24px; display: flex; flex-direction: column; flex-grow: 1;">
                <div style="margin-bottom: 10px;">
                  <span style="display: inline-block; background: rgba(0, 174, 239, 0.12); color: #00AEEF; font-size: 0.78rem; font-weight: 700; padding: 3px 12px; border-radius: 50px; text-transform: uppercase;">
                    ${art.category}
                  </span>
                </div>

                <div class="tc uf wf ag jq" style="margin-bottom: 12px; gap: 14px;">
                  <div class="tc wf ag" style="gap: 6px;">
                    <img src="images/icon-man.svg" alt="Publisher" style="width: 15px; height: 15px;" />
                    <p style="font-size: 0.82rem; color: #94A3B8; margin: 0;">${art.author}</p>
                  </div>
                  <div class="tc wf ag" style="gap: 6px;">
                    <img src="images/icon-calender.svg" alt="Date" style="width: 15px; height: 15px;" />
                    <p style="font-size: 0.82rem; color: #94A3B8; margin: 0;">${art.date}</p>
                  </div>
                </div>

                <h4 class="ek tj ml il kk wm xl eq lb" style="font-size: 1.12rem; font-weight: 700; line-height: 1.45; margin-bottom: 12px; color: #FFFFFF;">
                  <a href="${art.slug}" style="color: #FFFFFF; text-decoration: none;" onmouseover="this.style.color='#00AEEF'" onmouseout="this.style.color='#FFFFFF'">
                    ${art.title}
                  </a>
                </h4>

                <p style="font-size: 0.90rem; color: #94A3B8; line-height: 1.6; margin-bottom: 20px; flex-grow: 1;">
                  ${getTeaser(art.summary)}
                </p>

                <div style="border-top: 1px solid rgba(255,255,255,0.06); padding-top: 14px; display: flex; justify-content: space-between; align-items: center;">
                  <a href="${art.slug}" style="color: #00AEEF; font-weight: 700; font-size: 0.88rem; text-decoration: none; display: inline-flex; align-items: center; gap: 6px;">
                    Read Full Article <span>→</span>
                  </a>
                  <span style="font-size: 0.78rem; color: #F5A623; font-weight: 600;">⏱ ${art.readTime}</span>
                </div>
              </div>
            </div>`;
}

// 1. Build blog-grid.html
console.log('Updating blog-grid.html with all 12 article cards...');
const blogGridCards = articles.map(a => generateCard(a)).join('\n');

const blogGridHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>All 12 Tech & Business Articles | IkonTeki Africa</title>
    <meta name="description" content="Explore all 12 in-depth articles on SEO in Tanzania, digital careers, website business growth, cloud hosting, safari booking tech, and software engineering." />
    <meta name="keywords" content="Tanzania tech blog, SEO tips, digital career, web development, cloud hosting, safari tech, IkonTeki Africa" />
    <link rel="canonical" href="https://ikonteki.africa/blog-grid.html" />
    <link rel="icon" href="favicon.ico" />
    <link href="style.css" rel="stylesheet" />
  </head>
  <body
    x-data="{ page: 'blog-grid', 'darkMode': true, 'stickyMenu': false, 'navigationOpen': false, 'scrollTop': false }"
    x-init="
         darkMode = JSON.parse(localStorage.getItem('darkMode'));
         $watch('darkMode', value => localStorage.setItem('darkMode', JSON.stringify(value)))"
    :class="{'b eh': darkMode === true}"
  >
    <!-- ===== Global Header Start ===== -->
    <div id="navbar"></div>
    <script src="navbar.js"></script>
    <!-- ===== Global Header End ===== -->

    <main style="padding-top: 110px;">
      <!-- ===== Blog Grid Header Start ===== -->
      <section class="ji gp uq">
        <div class="bb ze ki xn vq" style="margin-bottom: 40px; text-align: center;">
          <span style="display: inline-block; background: rgba(0, 174, 239, 0.12); color: #00AEEF; font-size: 0.85rem; font-weight: 700; padding: 4px 16px; border-radius: 50px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 12px;">
            Insights & Guides
          </span>
          <h1 class="fk vj pr kk wm" style="font-size: 2.5rem; font-weight: 800; margin-bottom: 14px;">
            Latest Tech, SEO & Digital Strategy Articles
          </h1>
          <p style="color: #94A3B8; font-size: 1.1rem; max-width: 720px; margin: 0 auto 16px auto; line-height: 1.7;">
            Actionable insights on search engine optimization, digital career transformation, enterprise software, and cloud infrastructure engineered for East African businesses.
          </p>
          <p style="color: #64748B; font-size: 0.95rem; max-width: 860px; margin: 0 auto; line-height: 1.8;">
            Our editorial mission at IkonTeki Africa is to equip Tanzanian entrepreneurs, corporate leaders, IT students, and safari tour operators with field-tested technical frameworks. Each practical guide provides step-by-step methodologies to maximize organic search visibility, secure enterprise cloud infrastructure, integrate seamless mobile money payment gateways, and launch high-converting digital products. Our technical publications cover Google Business Profile ranking, technical on-page SEO, dedicated NVMe server hosting, Flutter and React application development, UI UX wireframing, and hands-on developer coaching. Browse our complete collection below or schedule a direct engineering consultation session with our Arusha specialists.
          </p>
        </div>

        <div class="bb ye ki xn vq jb jo">
          <div class="wc qf pn xo zf iq" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 32px;">
${blogGridCards}
          </div>
        </div>
      </section>
      <!-- ===== Blog Grid End ===== -->
    </main>

    <!-- ===== Global Footer Start ===== -->
    <footer style="background: #000000; border-top: 1px solid rgba(255,255,255,0.08); padding: 50px 0 30px 0;">
      <div class="bb ze ki xn 2xl:ud-px-0">
        <div style="display: flex; flex-wrap: wrap; justify-content: space-between; gap: 30px; margin-bottom: 40px;">
          <div style="flex: 1 1 300px;">
            <a href="index.html" style="display: inline-block; margin-bottom: 16px;">
              <img src="images/ikonteki-africa-logo.png" alt="IkonTeki Africa" style="max-height: 48px;" />
            </a>
            <p style="color: #94A3B8; font-size: 0.92rem; line-height: 1.7; max-width: 360px;">
              IkonTeki Africa is an elite digital engineering firm in Arusha, Tanzania, delivering custom web applications, cloud hosting infrastructure, and practical youth IT coaching.
            </p>
          </div>
          <div style="flex: 1 1 180px;">
            <h5 style="color: #FFFFFF; font-weight: 700; margin-bottom: 14px;">Quick Links</h5>
            <ul style="list-style: none; padding: 0; margin: 0; line-height: 2;">
              <li><a href="index.html" style="color: #94A3B8; text-decoration: none;">Home</a></li>
              <li><a href="services.html" style="color: #94A3B8; text-decoration: none;">Services</a></li>
              <li><a href="about.html" style="color: #94A3B8; text-decoration: none;">About Us</a></li>
              <li><a href="pricing.html" style="color: #94A3B8; text-decoration: none;">Pricing</a></li>
              <li><a href="teki-4-impakt.html" style="color: #94A3B8; text-decoration: none;">Teki 4 Impakt</a></li>
              <li><a href="contact.html" style="color: #94A3B8; text-decoration: none;">Contact</a></li>
            </ul>
          </div>
          <div style="flex: 1 1 240px;">
            <h5 style="color: #FFFFFF; font-weight: 700; margin-bottom: 14px;">Contact Us</h5>
            <p style="color: #94A3B8; font-size: 0.92rem; line-height: 1.8; margin: 0;">
              Arusha, Tanzania<br />
              Phone: <a href="tel:+255712286993" style="color: #F5A623; text-decoration: none; font-weight: 700;">+255 712 286 993</a><br />
              Email: contact@ikonteki.africa
            </p>
          </div>
        </div>
        <div style="text-align: center; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 24px; color: #64748B; font-size: 0.85rem;">
          <p>© 2026 IkonTeki Africa. All Rights Reserved. Engineered for Global Excellence.</p>
        </div>
      </div>
    </footer>
    <!-- ===== Global Footer End ===== -->

    <script defer src="bundle.js"></script>
  </body>
</html>`;

fs.writeFileSync('blog-grid.html', blogGridHtml, 'utf8');
console.log('blog-grid.html updated successfully with all 12 articles!');

// 2. Update index.html: 6 cards + Read More button on the right side
console.log('Updating index.html with 6 featured blog cards and right-side Read More button...');
const homeCards = articles.slice(0, 6).map(a => generateCard(a)).join('\n');

const homeBlogSection = `
      <!-- ===== Blog Start ===== -->
      <section class="ji gp uq">
        <!-- Section Title with Right-Side Button -->
        <div class="bb ze ki xn vq" style="margin-bottom: 36px;">
          <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-end; gap: 20px;">
            <div>
              <span style="display: inline-block; background: rgba(0, 174, 239, 0.12); color: #00AEEF; font-size: 0.82rem; font-weight: 700; padding: 4px 14px; border-radius: 50px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">
                Industry Insights
              </span>
              <h2 class="fk vj pr kk wm" style="font-size: 2.2rem; font-weight: 800; margin: 0 0 10px 0;">
                Latest Blogs & News
              </h2>
              <p style="color: #94A3B8; font-size: 1.02rem; max-width: 620px; margin: 0; line-height: 1.6;">
                Explore our practical perspectives on SEO, digital career skills, high-converting websites, cloud infrastructure, and African tech innovation.
              </p>
            </div>
            <div>
              <a href="blog-grid.html" class="btn-solid-cyan" style="padding: 12px 28px; font-weight: 700; text-decoration: none; border-radius: 8px; display: inline-flex; align-items: center; gap: 8px; white-space: nowrap;">
                Read More Articles <span style="font-size: 1.1rem;">→</span>
              </a>
            </div>
          </div>
        </div>
        <!-- Section Title End -->

        <div class="bb ye ki xn vq jb jo">
          <div class="wc qf pn xo zf iq" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 32px;">
${homeCards}
          </div>
        </div>
      </section>
      <!-- ===== Blog End ===== -->
`;

let indexHtml = fs.readFileSync('index.html', 'utf8');
const blogStartTag = '<!-- ===== Blog Start ===== -->';
const blogEndTag = '<!-- ===== Blog End ===== -->';

const startIndex = indexHtml.indexOf(blogStartTag);
const endIndex = indexHtml.indexOf(blogEndTag);

if (startIndex !== -1 && endIndex !== -1) {
  const newIndexHtml = indexHtml.substring(0, startIndex) + homeBlogSection.trim() + indexHtml.substring(endIndex + blogEndTag.length);
  fs.writeFileSync('index.html', newIndexHtml, 'utf8');
  console.log('index.html updated successfully with 6 cards and right-side button!');
} else {
  console.error('Could not find Blog Start/End tags in index.html');
}
