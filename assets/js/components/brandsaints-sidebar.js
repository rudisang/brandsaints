

  Vue.component('brandsaints-sidebar', {
      template: `
      <div class="sidebar-modal">  
			<div class="modal right fade" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel2">
				<div class="modal-dialog" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i class="icofont-close"></i></span></button>

							<h2 class="modal-title" id="myModalLabel2"><a href="index.html"><img src="assets/img/logo.png" alt="logo"></a></h2>
						</div>

						<div class="modal-body">
							<div class="sidebar-modal-widget">
								<h3 class="title">Additional Links</h3>

								<ul>
									<li><a href="#">Support</a></li>
									<li><a href="terms.html">Terms Of Service</a></li>
									<li><a href="faqs.html">FAQ</a></li>
									
								</ul>
							</div>
							
							<div class="sidebar-modal-widget">
								<h3 class="title">Contact Info</h3>

								<ul class="contact-info">
									<li>
										<i class="icofont-google-map"></i>
										Address
										<span>  Plot 31515, Block 8, Gaborone</span>
									</li>
									<li>
										<i class="icofont-email"></i>
										Email
										<span><a href="#">info@brandsaints.co.bw</a></span>
									</li>
									<li>
										<i class="icofont-phone"></i>
										Phone
										<span><a>+267 76 984 591</a> <br>
										<a>+267 76 406 773</a> <br>
										<a>+267 74 739 446</a></span>
									</li>
								</ul>
							</div>

							<div class="sidebar-modal-widget">
								<h3 class="title">Connect With Us</h3>

								<ul class="social-list">
									<li><a href="https://www.facebook.com/BrandSaints-BW-217644005559329/?hc_ref=ARSyl7HKuQL5WAFB0fNSy7cj_xHbCi3rLO-YVZTEuKTcADFPfXpHtIc-Z6ZKaaI4zNE"><i class="icofont-facebook"></i></a></li>
									<li><a href="https://twitter.com/BrandsaintsB"><i class="icofont-twitter"></i></a></li>
									<li><a href="https://www.instagram.com/brandsaints_bw"><i class="icofont-instagram"></i></a></li>
									<li><a href="#"><i class="icofont-github"></i></a></li>
								</ul>
							</div>

							<div class="sidebar-modal-widget">
								<h3 class="title">Search</h3>

								<form class="modal-search-form">
									<input type="text" class="form-control" placeholder="Serch here..">
									<button type="submit"><i class="icofont-search-2"></i></button>
								</form>
							</div>
						</div>
					</div><!-- modal-content -->
				</div><!-- modal-dialog -->
			</div><!-- modal -->
		</div>
      `
  })

  new Vue({
      el: `#sidebar`,
  })