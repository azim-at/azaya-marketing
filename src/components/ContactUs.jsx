function ContactUs () {
    return (
            <div class="contact-section" id="contact">
		<div class="container">
			<div class="row">
				<div class="info-column col-lg-6 col-md-12 col-sm-12">
					<div class="inner-column">
						<div class="patern-layer-one"></div>
						<div class="patern-layer-two"></div>
						<div class="patern-layer-three paroller"></div>
						<ul class="info-list">
							<li>
								<strong>Our head office address:</strong>
								3556 Hartford Way Vlg, Mount Pleasant, SC, <br/> 29466, Australia.
							</li>
							<li>
								<strong>Call for help:</strong>
								<a href="tel:734-697-2907">(734) 697-2907</a><br/>
								<a href="tel:843-971-1906">(843) 971-1906</a>
							</li>
							<li>
								<strong>Mail us:</strong>
								<a class="mailto:noreply@envato.com" href="#">noreply@envato.com</a><br/>
								<a class="mailto:noreply@envato.com" href="#">noreply@topapp.com</a>
							</li>
						</ul>
					</div>
				</div>
				
				<div class="form-column col-lg-6 col-md-12 col-sm-12">
					<div class="inner-column">
						<div class="section-title style-three">
							<div class="title"><span>Co</span>ntact</div>
							<h2>Contact with our support <br/> during <span>emer</span>g<span>enc</span>y!</h2>
						</div>

						<div class="default-form">
							<form method="post" action="sendemail.php" id="contact-form" novalidate="novalidate">
								<div class="row clearfix">
									
									<div class="col-lg-6 col-md-6 col-sm-12 form-group">
										<input type="text" name="username" placeholder="Full Name *" required=""/>
									</div>
									
									<div class="col-lg-6 col-md-6 col-sm-12 form-group">
										<input type="text" name="lastname" placeholder="Last Name *" required=""/>
									</div>
									
									<div class="col-lg-6 col-md-6 col-sm-12 form-group">
										<input type="email" name="email" placeholder="Your mail *" required=""/>
									</div>
									
									<div class="col-lg-6 col-md-6 col-sm-12 form-group">
										<input type="text" name="phone" placeholder="Phone number *" required=""/>
									</div>
									
									<div class="col-lg-12 col-md-12 col-sm-12 form-group">
										<textarea name="message" placeholder="Message..."></textarea>
									</div>
								
									<div class="col-lg-12 col-md-12 col-sm-12 form-group">
										<button class="theme-btn submit-btn" type="submit" name="submit-form"><span class="txt"> <i class="fa fa-arrow-circle-right"></i> &nbsp; Send now</span></button>
									</div>
									
								</div>
							</form>
								
						</div>
						
					</div>
				</div>
				
			</div>
		</div>
	</div>
    )
}

export default ContactUs;