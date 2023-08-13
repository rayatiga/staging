$(function () {
  devNav = document.createElement('div')
  devNav.innerHTML = `<!-- Floating Development Nagigation -->
      <div class="dev-nav" role="navigation">
        <div class="dev-nav-container">
          <span>&bullet;</span><span class="dev-nav-title">Dev Navigation</span><span>&bullet;</span>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="career.html">Career</a></li>
            <li><a href="pricing.html">Pricing</a></li>
          </ul>
        </div>
      </div>`
  document.body.appendChild(devNav)
})
