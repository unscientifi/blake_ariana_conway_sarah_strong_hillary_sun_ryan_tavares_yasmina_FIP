export default {
    template: `
    <footer class="page-footer text-center justify-content-center" id="mainFooter">
            <div class="col-12">
              <router-link class="navbar-brand d-block d-sm-inline" to="/">projectplay</router-link>
              <div class="footer-copyright">Copyright &copy;2020</div>
              <div id="footerLinks">
                <a href="https://www.instagram.com/" target="_blank" id="socialMedia"><img src="images/instagram.svg" alt="Image of Instagram Icon" title="Project Play Instagram"></a>
                <router-link id="adminLink" to="/login">admin login</router-link>
              </div>
            </div>
        </footer>
    `,
}