function SubscribeSection() {
    return (
        <>
            <div class="subscribe-section">
                <div class="patern-layer-one"></div>
                <div class="container">
                    <div class="section-title centered style-four">
                        <div class="title"><span>Su</span>bscription</div>
                        <h2>Always know what’s happening in the <br /> world of applications. Recieve all <br /> latest p<span>ost in</span> y<span>our inbox.</span></h2>
                    </div>
                    
                    <div class="subscribe-form">
                        <form method="post" action="contact.html">
                            <div class="form-group">
                                <input type="email" name="email" value="" placeholder="your mail address..." required="" />
                                <button type="submit" class="theme-btn btn-style-two">Subscrib now</button>
                            </div>
                        </form>
                    </div>
                    <div class="email">* Your mail address will be fully secure . We don’t share!</div>
                </div>
	        </div>
        </>
    )
}

export default SubscribeSection;