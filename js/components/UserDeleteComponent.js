export default {
    template: `
    <section>
        
     <h2>Delete User</h2>


    <ul>
        <li>
            <router-link class="nav-link" to="/userhome">Back</router-link>
        </li>
        <li>
            <router-link class="nav-link" v-on:click="logout()" to="/">Sign Out</router-link>
        </li>
     </ul>

            <button v-on:click.prevent="" type="submit" class="btn btn-primary">Delete Account</button>


  


    </section>
    `,
    
   


  
        }
