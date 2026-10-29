const fs = require('fs');

// 1. Refined Footer Template for index.html
const refinedIndexFooter = `    <!-- ===== Footer Start ===== -->
    <footer style="background-color: #000000 !important; background: #000000 !important; border-top: 1px solid rgba(255, 255, 255, 0.08) !important;">
      <div class="bb ze ki xn 2xl:ud-px-0">
        <!-- Footer Top -->
        <div class="ji gp" style="padding-top: 60px; padding-bottom: 50px;">
          <div class="tc uf ap gg fp">
            <div class="animate_top zd/2 to/4" style="max-width: 340px;">
              <a href="index.html" class="tc wf xf sf" style="text-decoration: none; display: inline-block; margin-bottom: 16px;">
                <img src="images/ikonteki-africa-logo.png" alt="IkonTeki Africa" class="brand-logo-img" />
              </a>

              <p class="lc fb" style="line-height: 1.7; color: #94A3B8; font-size: 0.95rem; margin-bottom: 20px;">
                IkonTeki Africa is a premier technology agency in Njiro, Arusha, engineering high-performance software, cloud systems, digital marketing, and digital career coaching.
              </p>

              <div style="display: flex; gap: 14px; align-items: center;">
                <a href="https://wa.me/255712286993" target="_blank" rel="noopener" style="width: 38px; height: 38px; border-radius: 50%; background: rgba(255,255,255,0.06); display: flex; align-items: center; justify-content: center; color: #00AEEF; text-decoration: none; border: 1px solid rgba(255,255,255,0.1);" title="WhatsApp">
                  💬
                </a>
                <a href="tel:+255712286993" style="width: 38px; height: 38px; border-radius: 50%; background: rgba(255,255,255,0.06); display: flex; align-items: center; justify-content: center; color: #F5A623; text-decoration: none; border: 1px solid rgba(255,255,255,0.1);" title="Call Us">
                  📞
                </a>
                <a href="mailto:contact@ikonteki.africa" style="width: 38px; height: 38px; border-radius: 50%; background: rgba(255,255,255,0.06); display: flex; align-items: center; justify-content: center; color: #10B981; text-decoration: none; border: 1px solid rgba(255,255,255,0.1);" title="Email Us">
                  ✉️
                </a>
              </div>
            </div>

            <div class="vd ro tc sf rn un gg vn" style="flex-grow: 1;">
              <div class="animate_top">
                <h4 class="kk wm tj ec" style="color: #FFFFFF !important; font-size: 1.1rem; font-weight: 700; margin-bottom: 16px;">Quick Links</h4>

                <ul style="list-style: none; padding: 0; margin: 0; line-height: 2.1;">
                  <li><a href="index.html" class="sc xl vb" style="color: #94A3B8; text-decoration: none;" onmouseover="this.style.color='#00AEEF'" onmouseout="this.style.color='#94A3B8'">Home</a></li>
                  <li><a href="about.html" class="sc xl vb" style="color: #94A3B8; text-decoration: none;" onmouseover="this.style.color='#00AEEF'" onmouseout="this.style.color='#94A3B8'">About Us</a></li>
                  <li><a href="services.html" class="sc xl vb" style="color: #94A3B8; text-decoration: none;" onmouseover="this.style.color='#00AEEF'" onmouseout="this.style.color='#94A3B8'">Services</a></li>
                  <li><a href="portfolio.html" class="sc xl vb" style="color: #94A3B8; text-decoration: none;" onmouseover="this.style.color='#00AEEF'" onmouseout="this.style.color='#94A3B8'">Portfolio</a></li>
                  <li><a href="blog-grid.html" class="sc xl vb" style="color: #00AEEF; font-weight: 700; text-decoration: none;">All 12 Articles</a></li>
                </ul>
              </div>

              <div class="animate_top">
                <h4 class="kk wm tj ec" style="color: #FFFFFF !important; font-size: 1.1rem; font-weight: 700; margin-bottom: 16px;">Services</h4>

                <ul style="list-style: none; padding: 0; margin: 0; line-height: 2.1;">
                  <li><a href="services.html" class="sc xl vb" style="color: #94A3B8; text-decoration: none;" onmouseover="this.style.color='#00AEEF'" onmouseout="this.style.color='#94A3B8'">Web Development</a></li>
                  <li><a href="services.html" class="sc xl vb" style="color: #94A3B8; text-decoration: none;" onmouseover="this.style.color='#00AEEF'" onmouseout="this.style.color='#94A3B8'">Cloud Hosting</a></li>
                  <li><a href="services.html" class="sc xl vb" style="color: #94A3B8; text-decoration: none;" onmouseover="this.style.color='#00AEEF'" onmouseout="this.style.color='#94A3B8'">Digital Marketing</a></li>
                  <li><a href="services.html" class="sc xl vb" style="color: #94A3B8; text-decoration: none;" onmouseover="this.style.color='#00AEEF'" onmouseout="this.style.color='#94A3B8'">Tourism Platforms</a></li>
                  <li><a href="services.html" class="sc xl vb" style="color: #94A3B8; text-decoration: none;" onmouseover="this.style.color='#00AEEF'" onmouseout="this.style.color='#94A3B8'">Teki 4 Impakt</a></li>
                </ul>
              </div>

              <div class="animate_top">
                <h4 class="kk wm tj ec" style="color: #FFFFFF !important; font-size: 1.1rem; font-weight: 700; margin-bottom: 16px;">Direct Contact</h4>

                <div style="color: #94A3B8; font-size: 0.92rem; line-height: 2;">
                  <p style="margin: 0; color: #CBD5E1;">Njiro, Arusha, Tanzania</p>
                  <p style="margin: 0;">Phone: <a href="tel:+255712286993" style="color: #F5A623 !important; font-weight: 700; text-decoration: none;">+255 712 286 993</a></p>
                  <p style="margin: 0;">Email: <a href="mailto:contact@ikonteki.africa" style="color: #00AEEF !important; text-decoration: none;">contact@ikonteki.africa</a></p>
                  <div style="margin-top: 12px;">
                    <a href="contact.html" class="btn-solid-cyan" style="padding: 6px 18px; font-size: 0.85rem; font-weight: 700; text-decoration: none; border-radius: 6px; display: inline-block;">Consult With Us</a>
                  </div>
                </div>
              </div>

              <div class="animate_top">
                <h4 class="kk wm tj ec" style="color: #FFFFFF !important; font-size: 1.1rem; font-weight: 700; margin-bottom: 16px;">Newsletter</h4>
                <p class="ac qe" style="color: #94A3B8; font-size: 0.92rem; margin-bottom: 12px;">Subscribe for tech trends & insights</p>

                <form action="contact.html" method="GET">
                  <div class="i" style="display: flex; gap: 8px;">
                    <input
                      type="email"
                      placeholder="Your email address"
                      required
                      style="background: #111827; border: 1px solid rgba(255,255,255,0.15); color: #FFFFFF; padding: 10px 14px; border-radius: 6px; font-size: 0.9rem; flex-grow: 1; outline: none;"
                    />
                    <button type="submit" style="background: #00AEEF; color: #FFFFFF; font-weight: 700; border: none; padding: 10px 16px; border-radius: 6px; cursor: pointer;">
                      Join
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- Footer Top -->

        <!-- Footer Bottom -->
        <div class="bh ch pm tc uf sf yo wf xf ap cg fp bj" style="background-color: #000000 !important; border-top: 1px solid rgba(255, 255, 255, 0.08); padding: 24px 0;">
          <div class="animate_top">
            <ul class="tc wf gg" style="gap: 20px; list-style: none; margin: 0; padding: 0;">
              <li><a href="about.html" style="color: #94A3B8; text-decoration: none; font-size: 0.88rem;">About</a></li>
              <li><a href="services.html" style="color: #94A3B8; text-decoration: none; font-size: 0.88rem;">Services</a></li>
              <li><a href="contact.html" style="color: #94A3B8; text-decoration: none; font-size: 0.88rem;">Contact</a></li>
              <li><a href="blog-grid.html" style="color: #94A3B8; text-decoration: none; font-size: 0.88rem;">Articles</a></li>
            </ul>
          </div>

          <div class="animate_top">
            <p style="color: #64748B; font-size: 0.88rem; margin: 0;">&copy; 2026 IkonTeki Africa. All rights reserved. You Own It, We Brand It.</p>
          </div>
        </div>
        <!-- Footer Bottom -->
      </div>
    </footer>
    <!-- ===== Footer End ===== -->`;

// Replace footer in index.html
let indexContent = fs.readFileSync('index.html', 'utf8');
const footerStart = '<!-- ===== Footer Start ===== -->';
const footerEnd = '<!-- ===== Footer End ===== -->';
const fStartIdx = indexContent.indexOf(footerStart);
const fEndIdx = indexContent.indexOf(footerEnd);

if (fStartIdx !== -1 && fEndIdx !== -1) {
  indexContent = indexContent.substring(0, fStartIdx) + refinedIndexFooter.trim() + indexContent.substring(fEndIdx + footerEnd.length);
  fs.writeFileSync('index.html', indexContent, 'utf8');
  console.log('index.html footer updated to solid black and refined!');
}

// Update all other HTML files to have solid black footer background
const allHtmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html') && f !== 'navbar.html');

allHtmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let modified = false;

  // Replace any footer styling with pure solid black
  content = content.replace(/<footer\b([^>]*)>/gi, (match, attrs) => {
    // If style attribute exists, replace background
    if (/style="/i.test(attrs)) {
      attrs = attrs.replace(/style="([^"]*)"/i, (m, s) => {
        let clean = s.replace(/background(-color)?:\s*[^;]+;?/gi, '');
        return `style="background-color: #000000 !important; background: #000000 !important; border-top: 1px solid rgba(255, 255, 255, 0.08) !important; ${clean.trim()}"`;
      });
    } else {
      attrs = `${attrs} style="background-color: #000000 !important; background: #000000 !important; border-top: 1px solid rgba(255, 255, 255, 0.08) !important;"`;
    }
    modified = true;
    return `<footer${attrs}>`;
  });

  // Replace #060913 or #070B14 inside footer if any
  if (content.includes('#060913')) {
    content = content.replace(/#060913/g, '#000000');
    modified = true;
  }
  if (content.includes('#070B14')) {
    content = content.replace(/#070B14/g, '#000000');
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated footer background to #000000 in ${file}`);
  }
});
