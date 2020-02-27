export default {
    template: `
    <footer class="page-footer text-center" id="mainFooter">
            <div class="col-12">
              <div class="footer-copyright">Copyright &copy;2020</div>
              <router-link class="navbar-brand " to="/">projectplay</router-link>
              <div id="footerLinks">
                <a href="https://www.instagram.com/" target="_blank" id="socialMedia"><img src="images/instagram.svg" alt="Image of Instagram Icon" title="Project Play Instagram"></a>
                <router-link id="adminLink" to="/">admin login</router-link>
              </div>
            </div>
        </footer>
    `,
}