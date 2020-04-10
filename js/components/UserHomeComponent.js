export default {
    template: `
    <section>
        
     <h2>Welcome!</h2>


    <ul>
        <li>
            <router-link class="nav-link" to="/">Edit User</router-link>
        </li>
        <li>
            <router-link class="nav-link" to="/">Create User</router-link>
        </li>
        <li>
            <router-link class="nav-link" to="/">Delete User</router-link>
        </li>
        <li>
            <router-link class="nav-link" v-on:click="logout()" to="/">Sign Out</router-link>
        </li>
     </ul>
    

    </section>
    `,
    

}

