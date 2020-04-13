export default {
    template: `
    <section>
        
     <h2>Dashboard</h2>


    <ul>
        <li>
            <router-link class="nav-link" to="/useredit">Edit User</router-link>
        </li>
        <li>
            <router-link class="nav-link" to="/usercreate">Create User</router-link>
        </li>
        <li>
            <router-link class="nav-link" to="/userdelete">Delete User</router-link>
        </li>
        <li>
            <router-link class="nav-link" v-on:click="logout()" to="/">Sign Out</router-link>
        </li>

     </ul>
    

    </section>
    `,
    

}
