<template>
  <div>
    <footer>
      <div class="container pt-5 border-bottom">
        <div class="row">
          <div class="col-md-3 col-sm-12 mb-3 text-center">
            <img
              src="data:image/png;base64,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"
            />
          </div>
          <div class="col-md-9 col-sm-12">
            <div class="col-md-3 col-sm-6 col-6 p-0 float-left mb-3">
              <h5 class="mb-4 font-weight-bold text-uppercase">Solutions</h5>
              <ul class="list-group">
                <li class="list-group-item bg-transparent border-0 p-0 mb-2">
                  <a href="#">Sales</a>
                </li>
                <li class="list-group-item bg-transparent border-0 p-0 mb-2">
                  <a href="#">Project Management</a>
                </li>
                <li class="list-group-item bg-transparent border-0 p-0 mb-2">
                  <a href="#">Ticket Management</a>
                </li>
                <li class="list-group-item bg-transparent border-0 p-0 mb-2">
                  <a href="#">Event Mangement</a>
                </li>
                <li class="list-group-item bg-transparent border-0 p-0 mb-2">
                  <a href="#">Finance</a>
                </li>
                <li class="list-group-item bg-transparent border-0 p-0 mb-2">
                  <a href="#">Event Insight</a>
                </li>
              </ul>
            </div>

            <div class="col-md-3 col-sm-6 col-6 p-0 mb-3 float-left">
              <h5 class="mb-4 font-weight-bold text-uppercase">Developers</h5>
              <ul class="list-group">
                <li class="list-group-item bg-transparent border-0 p-0 mb-2">
                  <a href="#">Open Source</a>
                </li>
                <li class="list-group-item bg-transparent border-0 p-0 mb-2">
                  <a href="#">Technology</a>
                </li>
              </ul>
            </div>

            <div class="col-md-3 col-sm-6 col-6 mb-3 p-0 float-left">
              <h5 class="mb-4 font-weight-bold text-uppercase">Company</h5>
              <ul class="list-group">
                <li class="list-group-item bg-transparent border-0 p-0 mb-2">
                  <a href="/about">About</a>
                </li>
                <li class="list-group-item bg-transparent border-0 p-0 mb-2">
                  <a href="#">Blog</a>
                </li>
                <li class="list-group-item bg-transparent border-0 p-0 mb-2">
                  <a href="#">Affiliates</a>
                </li>
                <li class="list-group-item bg-transparent border-0 p-0 mb-2">
                  <a href="#">Testimonials</a>
                </li>
                <li class="list-group-item bg-transparent border-0 p-0 mb-2">
                  <a href="#">Contact Us</a>
                </li>
                <li class="list-group-item bg-transparent border-0 p-0 mb-2">
                  <a href="#">Plan &amp; Pricing</a>
                </li>
                <li class="list-group-item bg-transparent border-0 p-0 mb-2">
                  <a href="#">Blog</a>
                </li>
                <li class="list-group-item bg-transparent border-0 p-0 mb-2">
                  <a href="#">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>

            <div class="col-md-3 col-sm-6 col-6 mb-3 p-0 float-left">
              <h5 class="mb-4 font-weight-bold text-uppercase">Connect</h5>
              <ul class="list-group">
                <li class="list-group-item bg-transparent border-0 p-0 mb-2">
                  <a href="#" target="_blank">
                    <fa-icon :icon="['fab','google']" class="mr-1" />Google+
                  </a>
                </li>
                <li class="list-group-item bg-transparent border-0 p-0 mb-2">
                  <a href="#" target="_blank">
                    <fa-icon :icon="['fab','github']" class="mr-1" />Github
                  </a>
                </li>
                <li class="list-group-item bg-transparent border-0 p-0 mb-2">
                  <a href="#" target="_blank">
                    <fa-icon :icon="['fab','facebook']" class="mr-1" />Facebook
                  </a>
                </li>
                <li class="list-group-item bg-transparent border-0 p-0 mb-2">
                  <a href="#" target="_blank">
                    <fa-icon :icon="['fab','youtube']" class="mr-1" />YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-12">
            <div class="py-4 d-flex justify-content-center align-items-center">
              <a class="mr-4" href="../privacy.html">Privacy & terms</a>
              <a href="../sitemap.xml">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
      <div class="mini-footer footer">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="copyright-text">
                <p>
                  © 2020
                  <a href="#">Metasolutions</a>. All rights reserved. Created by
                  <a href="#">Ultra Code</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
@font-face {
  font-family: Lemonada;
  src: url("../assets/fuentes/Lemonada-VariableFont_wght.ttf");
}
body {
  font-family: Lemonada;
  font-weight: 400;
  font-size: 1rem;
  overflow-x: hidden;
  color: #607289;
}

h5 {
  font-size: 1rem;
  line-height: 1.375;
  font-family: Lemonada;
  font-weight: 500;
  color: #ffffff;
}

a {
  color: #818494;
  font-weight: 500;
  text-decoration: none;
  background-color: transparent;
}

a:hover {
  color: #007bff;
  text-decoration: none;
}

footer {
  background: #343a40;
}
.mini-footer {
  background: #192027;
  text-align: center;
  padding: 32px 0;
}
.mini-footer p {
  margin: 0;
  line-height: 26px;
  font-size: 15px;
  color: #999;
}
.mini-footer p a {
  color: #5867dd;
}
.mini-footer p a:hover {
  color: #34bfa3;
}
</style>
