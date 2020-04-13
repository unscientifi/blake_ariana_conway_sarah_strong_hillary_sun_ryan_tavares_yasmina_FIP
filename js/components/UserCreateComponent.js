export default {
    template: `
    <section>
        
     <h2>Create User</h2>


    <ul>
        <li>
            <router-link class="nav-link" to="/userhome">Back</router-link>
        </li>
        <li>
            <router-link class="nav-link" v-on:click="logout()" to="/">Sign Out</router-link>
        </li>
     </ul>

     <form>
            <label>First name:</label>
            <input type="text"><br><br>

            <label>Username:</label>
            <input type="text"><br><br>

            <label>Password:</label>
            <input  type="text" ><br><br>

            <label>Email:</label>
            <input type="text"><br><br>

            <button v-on:click.prevent="create()" type="submit" class="btn btn-primary">Create Account</button>
    </form>

    


    </section>
    `,
    
   

    methods: {
      create() {
          let url = `./admin/admin_createuser.php?edituser=true`;

          fetch(url)
            .then(res => res.json())
            .then(data => {this.userList = data})
          .catch(function(error) {
            console.error(error);
          });
        }
      }



        }
