<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Users Table</h3>

            <div class="card-tools">
              <button class="btn btn-primary" data-toggle="modal" data-target="#addNew">
                <i class="fas fa-user-plus fa-faw"></i>
                Add New User
              </button>
            </div>
          </div>
          <!-- /.box-header -->
          <div class="card-body table-responsive no-padding">
            <table class="table table-hover">
              <tbody>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Type</th>
                  <th>Registered At</th>
                  <th>Actions</th>
                </tr>
                <tr v-for="user in users" :key="user.id">
                  <td>{{ user.id }}</td>
                  <td>{{ user.name }}</td>
                  <td>{{ user.email }}</td>
                  <td>{{ user.type | upText }}</td>
                  <td>{{ user.created_at | myDate }}</td>
                  <td>
                    <a href="#" class="btn btn-primary">
                      <i class="fas fa-edit"></i>
                    </a>

                    <a href="#" class="btn btn-danger" @click="deleteUser(user.id)">
                      <i class="fas fa-trash"></i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- /.box-body -->
        </div>
        <!-- /.box -->
      </div>
    </div>

    <!-- Modal Popup -->
    <div
      class="modal fade"
      id="addNew"
      tabindex="-1"
      role="dialog"
      aria-labelledby="addNewLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="addNewLabel">Add New User</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form @submit.prevent="createUser">
            <div class="modal-body">
              <div class="form-group">
                <input
                  v-model="form.name"
                  type="text"
                  name="name"
                  class="form-control"
                  placeholder="Enter Name"
                  :class="{
                                        'is-invalid': form.errors.has('name')
                                    }"
                />
                <has-error :form="form" field="name"></has-error>
              </div>

              <div class="form-group">
                <input
                  v-model="form.email"
                  type="email"
                  name="email"
                  class="form-control"
                  placeholder="Email Address"
                  :class="{
                                        'is-invalid': form.errors.has('email')
                                    }"
                />
                <has-error :form="form" field="email"></has-error>
              </div>
              <div class="form-group">
                <textarea
                  id="bio"
                  cols="5"
                  rows="5"
                  v-model="form.bio"
                  type="text"
                  name="bio"
                  class="form-control"
                  placeholder="Bio"
                  :class="{
                                        'is-invalid': form.errors.has('bio')
                                    }"
                ></textarea>
                <has-error :form="form" field="bio"></has-error>
              </div>
              <div class="form-group">
                <select
                  name="type"
                  id="type"
                  v-model="form.type"
                  class="form-control"
                  :class="{
                                        'is-invalid': form.errors.has('type')
                                    }"
                >
                  <option value>Select User Row</option>
                  <option value="admin">Admin Role</option>
                  <option value="user">Standard User</option>
                  <option value="author">Author</option>
                </select>
                <has-error :form="form" field="type"></has-error>
              </div>

              <div class="form-group">
                <label>Password</label>
                <input
                  v-model="form.password"
                  type="password"
                  name="password"
                  class="form-control"
                  :class="{
                                        'is-invalid': form.errors.has(
                                            'password'
                                        )
                                    }"
                />
                <has-error :form="form" field="password"></has-error>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary">Create</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: {},
      form: new Form({
        name: "",
        email: "",
        password: "",
        type: "",
        bio: "",
        photo: "",
      }),
    };
  },
  methods: {
    deleteUser(id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        //   Send AJAX request to the server
        if (result.value) {
          this.form
            .delete("api/user/" + id)
            .then(() => {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              // will fire an event to update the data in the table
              Fire.$emit("UserReload");
            })
            .catch(() => {
              Swal("Failed!!", "Something went wrong somewhere.", "warning");
            });
        }
      });
    },
    loadUsers() {
      axios.get("api/user").then(({ data }) => (this.users = data.data));
    },
    createUser() {
      // to initialize the progress bar
      this.$Progress.start();
      // to submit form to database
      this.form
        .post("api/user")
        .then(() => {
          // Used to fire an event immediately a new user is created and stored to display them to the user on the browser
          Fire.$emit("UserReload");
          // to close the modal after user has been created
          $("#addNew").modal("hide");
          // to show the toast notification after user is created works with sweetalert
          Toast.fire({
            icon: "success",
            title: "User Created successfully",
          });
          // to end the process of the progress bar
          this.$Progress.finish();
        })
        .catch(() => {});
    },
  },
  created() {
    this.loadUsers();
    Fire.$on("UserReload", () => {
      this.loadUsers();
    });
  },
};
</script>
