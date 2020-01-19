const html = require('html-template-tag')

const page = () => html`
  <div class="Layout">
    <header class="Layout-header">
      <div class="Logo">
        <div class="Logo-shape">
          <div class="Logo-box Logo-box--1">
            <svg class="Logo-instance Logo-instance--1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 518.002 283.149">
              <path
                d="M513.612 245.644a24.235 24.235 0 00-3.765-4.868l-50.005-50.005.159-.159L348.167 78.777l-.159.159-.107-.107v-.219l-71.47-71.47C271.64 2.349 265.316-.028 259.001 0c-6.315-.028-12.639 2.349-17.43 7.14l-71.47 71.47v.219l-.107.107-.159-.159L58 190.611l.159.159-50.005 50.005a24.3 24.3 0 00-3.765 4.868A23.59 23.59 0 000 259.384c0 13.022 10.507 23.589 23.506 23.688v.077h14.236v-.064H201.33v.064h14.236v-.064l43.435-.008 43.435.008v.064h14.236v-.064h163.587v.064h14.236v-.077c12.999-.099 23.507-10.666 23.507-23.688 0-5.123-1.626-9.865-4.39-13.74z">
              </path>
            </svg>
          </div>
          <div class="Logo-box Logo-box--2">
            <svg class="Logo-instance Logo-instance--2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 518.002 283.149"
              style="width: 65%; top: 0; left:100px; overflow: visible; position: absolute; mix-blend-mode: multiply;">
              <path
                d="M513.612 245.644a24.235 24.235 0 00-3.765-4.868l-50.005-50.005.159-.159L348.167 78.777l-.159.159-.107-.107v-.219l-71.47-71.47C271.64 2.349 265.316-.028 259.001 0c-6.315-.028-12.639 2.349-17.43 7.14l-71.47 71.47v.219l-.107.107-.159-.159L58 190.611l.159.159-50.005 50.005a24.3 24.3 0 00-3.765 4.868A23.59 23.59 0 000 259.384c0 13.022 10.507 23.589 23.506 23.688v.077h14.236v-.064H201.33v.064h14.236v-.064l43.435-.008 43.435.008v.064h14.236v-.064h163.587v.064h14.236v-.077c12.999-.099 23.507-10.666 23.507-23.688 0-5.123-1.626-9.865-4.39-13.74z"
                fill=""></path>
            </svg>
          </div>
          <div class="Logo-box Logo-box--3">
            <svg class="Logo-instance Logo-instance--3" xmlns="http://www.w3.org/2000/svg" id="shape-3"
              viewBox="0 0 483.04 231.165">
              <path d="M483.04 231.165L259.02 7.145c-9.526-9.527-25.115-9.527-34.641 0L121.31 110.214v120.951h361.73z">
              </path>
            </svg>
          </div>
          <div class="Logo-box Logo-box--4">
            <svg class="Logo-instance Logo-instance--4" xmlns="http://www.w3.org/2000/svg" id="shape-3"
              viewBox="0 0 483.04 231.165">
              <path d="M121.497 109.576L0 231.073h121.497v-120.95z"></path>
            </svg>
          </div>
        </div>
        <h1 class="Logo-text">FEDSA</h1>
      </div>
      <div class="Menu">
        <nav class="Menu-list">
          <div class="Menu-box"><a class="Menu-link" href="#"><strong>About</strong></a><span
              style="padding: 0 6px;">&nbsp;|&nbsp;</span><a class="Menu-link" href="#">Constitution</a><span
              style="padding: 0 6px;">&nbsp;|&nbsp;</span><a class="Menu-link" href="#">Projects</a><span
              style="padding: 0 6px;">&nbsp;|&nbsp;</span><a class="Menu-link" href="#">Members</a><span
              style="padding: 0 6px;">&nbsp;|&nbsp;</span>
            <button class="Menu-link" href="#">Toggle Dark Mode</button>
          </div>
        </nav>
        <div class="Menu-list Menu-list--mobile">
          <select>
            <option disabled="disabled" selected="selected">Change page</option>
            <option>Constitution</option>
            <option>Projects</option>
            <option>Members</option>
          </select>
          <button class="styled">Toggle Dark Mode</button>
        </div>
      </div>
    </header>
    <main class="Layout-content">
      <div class="Layout-row">
        <div class="Layout-column">
          <div class="Blurb">
            <h2 class="Blurb-title"><span class="Blurb-icon">🔎&nbsp;</span><span>What is FEDSA?</span></h2>
            <p><strong>Front-end Development South Africa is a registered non-profit organisation supporting the
                advancement of front-end development in South Africa.</strong></p>
            <p>We are made up of diverse group of volunteers, providing their time and expertise, as well as a variety of
              sponsors that help cover operational costs. Our goal is to support both front-end developers (and other
              professionals working alongside front-end developers) to create a better web experience for all South
              Africans.</p>
          </div>
          <div class="Blurb">
            <h2 class="Blurb-title"><span class="Blurb-icon">🤷‍&nbsp;</span><span>Why FEDSA?</span></h2>
            <p><strong>FEDSA was established by a network of front-end developer communities in 2019.</strong></p>
            <p>These communities have been active for a couple of years at the time and have seen the creation and death
              of several HTML, CSS, JavaScript and design meetups or other community projects over this time. FEDSA was
              established as an umbrella organisation to support meetups, conferences and/or open-source maintainers in
              the South African front-end development space.</p>
          </div>
        </div>
        <div class="Layout-column">
          <div class="Blurb">
            <h2 class="Blurb-title"><span class="Blurb-icon">💪&nbsp;</span><span>How can I get involved?</span></h2>
            <p><strong>From it's inception FEDSA was conceived as an community-driven project. </strong></p>
            <p>If you are interested, we would love to have you join our team of part-time volunteers. All skill levels
              welcome!.</p>
            <p><a href="#">Visit the Member section to learn more.</a></p>
          </div>
          <div class="Blurb">
            <h2 class="Blurb-title"><span class="Blurb-icon">👍&nbsp;</span><span>Anything else I can do?</span></h2>
            <p><strong>...</strong></p>
            <p>...</p>
          </div>
        </div>
        <div class="Layout-column">
          <div class="Blurb">
            <h2 class="Blurb-title"><span class="Blurb-icon">🦄&nbsp;</span><span>Sponsors</span></h2>
            <ul>
              <li><a href="https://nml.co.za/" target="_blank">New Media Labs</a></li>
            </ul>
          </div>
          <div class="Blurb">
            <h2 class="Blurb-title"><span class="Blurb-icon">🎪&nbsp;</span><span>Events</span></h2>
            <ul>
              <li><a href="https://github.com/schalkventer" target="_blank">Front-end Conf 2020</a></li>
              <li><a href="https://github.com/schalkventer" target="_blank">Cape Town Front-end Developers</a></li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  </div>
`

module.exports = {
  page,
}