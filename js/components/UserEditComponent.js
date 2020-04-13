export default {

    template: `
    <section>
        
     <h2>Edit User</h2>


    <ul>
        <li>
            <router-link class="nav-link" to="/userhome">Back</router-link>
        </li>
        <li>
            <router-link class="nav-link" v-on:click="logout()" to="/">Sign Out</router-link>
        </li>
     </ul>

     
    <form>
            <label>First Name:</label>
            <input type="text" name="fname" value=""><br><br>

            <label>Username:</label>
            <input type="text" name="username" value=""><br><br>

            <label>Password:</label>
            <input type="text" name="password" value=""><br><br>

            <label>Email:</label>
            <input  type="text" name="email" value=""><br><br>

            <button v-on:click.prevent="edit()" type="submit" class="btn btn-primary">Edit Account</button>
    </form>

  

    </section>
    `,
    
   


    methods: {
        edit() {
            if (this.input.username != "" && this.input.password != "") {

            let formData = new FormData();

                formData.append("username", this.input.username);
                formData.append("password", this.input.password);
                formData.append("fname", this.input.fname);
                formData.append("email", this.input.email);

            let url = `./admin/scripts/edituser.php?edituser=true`;
  
            fetch(url, {
                method: 'POST',
                body: formData
            })
                .then(res => res.json())
                .then(data => {
                    if (typeof data != "object") { // means that we're not getting a user object back
                        console.warn(data);
                        // just for testing
                        alert("authentication failed, please try again");
                    } else {
                        this.$emit("authenticated", true, data);
                        this.$router.replace({ name: "userhome" });
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            console.log("A username and password must be present");
        }

        }
    }
}
