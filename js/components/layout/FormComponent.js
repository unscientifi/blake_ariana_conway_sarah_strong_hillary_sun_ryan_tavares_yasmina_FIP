export default {
    template: `
    <section class="container-xl" id="contactSection">
          <div class="row">
            <div class="col-12 col-lg-6" id="contactInfo">
                <h2>Have questions? No worries. We're here for you.</h2>
                <p>Have questions, concerns, or just want to chat? Use the form to contact us.</p>
                <p>Your privacy is important to us. The information you provide will be used only for delivering educational services. We protect your personal information and adhere to all legislative requirements with respect to protecting privacy.</p>
            </div>
            <div class="col-12 col-lg-6" id="contactForm">
              <form action="..." method="POST">
                <div class="form-group">
                  <label for="email">Email</label>
                  <input id="email" class="form-control" name="email" type="email">
                  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>

                <div class="form-group">
                  <label for="project">How did you hear about project play?</label>
                  <input id="project" class="form-control" name="project" type="text">
                </div>

                <div class="form-group">
                  <label for="message">Message</label>
                  <textarea id="message" class="form-control" name="message" rows="5" type="text"></textarea>
                </div>

                <button type="submit" class="btn btn-outline-primary">send message</button>
              </form>
            </div>
          </div>

    </section>
    `,
}