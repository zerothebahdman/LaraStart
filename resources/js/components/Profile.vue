<style>
.widget-user-header {
    background-size: cover;
    background-position: center center;
    /* height: 250px !important; */
}
</style>
<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12 mt-4">
                <div class="card card-widget widget-user">
                    <!-- Add the bg color to the header using any of the bg-* classes -->
                    <div
                        class="widget-user-header text-white"
                        style="background-image:url('./img/photo2.png'); text-align: center;"
                    >
                        <h3 class="widget-user-username">
                            {{ this.form.name }}
                        </h3>
                        <h5 class="widget-user-desc">
                            Account Type: {{ this.form.type }}
                        </h5>
                    </div>
                    <div class="widget-user-image">
                        <img
                            class="img-circle"
                            :src="profilePhoto()"
                            alt="User Avatar"
                        />
                    </div>
                    <div class="card-footer">
                        <div class="row">
                            <div class="col-sm-4 border-right">
                                <div class="description-block">
                                    <h5 class="description-header">3,200</h5>
                                    <span class="description-text">SALES</span>
                                </div>
                                <!-- /.description-block -->
                            </div>
                            <!-- /.col -->
                            <div class="col-sm-4 border-right">
                                <div class="description-block">
                                    <h5 class="description-header">13,000</h5>
                                    <span class="description-text"
                                        >FOLLOWERS</span
                                    >
                                </div>
                                <!-- /.description-block -->
                            </div>
                            <!-- /.col -->
                            <div class="col-sm-4">
                                <div class="description-block">
                                    <h5 class="description-header">35</h5>
                                    <span class="description-text"
                                        >PRODUCTS</span
                                    >
                                </div>
                                <!-- /.description-block -->
                            </div>
                            <!-- /.col -->
                        </div>
                        <!-- /.row -->
                    </div>
                </div>
                <section class="content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-3">
                                <!-- Profile Image -->
                                <div class="card card-primary card-outline">
                                    <div class="card-body box-profile">
                                        <div class="text-center">
                                            <img
                                                class="profile-user-img img-fluid img-circle"
                                                :src="profilePhoto()"
                                                alt="User profile picture"
                                            />
                                        </div>

                                        <h3
                                            class="profile-username text-center"
                                        >
                                            {{ this.form.name }}
                                        </h3>

                                        <p class="text-muted text-center">
                                            {{ this.form.type }}
                                        </p>

                                        <ul
                                            class="list-group list-group-unbordered mb-3"
                                        >
                                            <li class="list-group-item">
                                                <b>Followers</b>
                                                <a class="float-right">1,322</a>
                                            </li>
                                            <li class="list-group-item">
                                                <b>Following</b>
                                                <a class="float-right">543</a>
                                            </li>
                                            <li class="list-group-item">
                                                <b>Friends</b>
                                                <a class="float-right"
                                                    >13,287</a
                                                >
                                            </li>
                                        </ul>
                                    </div>
                                    <!-- /.card-body -->
                                </div>
                                <!-- /.card -->
                            </div>
                            <!-- /.col -->
                            <div class="col-md-9">
                                <div class="card">
                                    <div class="card-header p-2">
                                        <ul class="nav nav-pills">
                                            <li class="nav-item">
                                                <a
                                                    class="nav-link active"
                                                    href="#activity"
                                                    data-toggle="tab"
                                                    >Activity</a
                                                >
                                            </li>
                                            <li class="nav-item">
                                                <a
                                                    class="nav-link"
                                                    href="#settings"
                                                    data-toggle="tab"
                                                    >Settings</a
                                                >
                                            </li>
                                        </ul>
                                    </div>
                                    <!-- /.card-header -->
                                    <div class="card-body">
                                        <div class="tab-content">
                                            <div
                                                class="tab-pane active"
                                                id="activity"
                                            >
                                                <h2>Display Users Activity</h2>
                                            </div>

                                            <div class="tab-pane" id="settings">
                                                <form class="form-horizontal">
                                                    <div class="form-group row">
                                                        <label
                                                            for="inputName"
                                                            class="col-sm-2 col-form-label"
                                                            >Name</label
                                                        >
                                                        <div class="col-sm-10">
                                                            <input
                                                                type="email"
                                                                v-model="
                                                                    form.name
                                                                "
                                                                class="form-control"
                                                                id="inputName"
                                                                placeholder="Name"
                                                                :class="{
                                                                    'is-invalid': form.errors.has(
                                                                        'name'
                                                                    )
                                                                }"
                                                            />
                                                            <has-error
                                                                :form="form"
                                                                field="name"
                                                            ></has-error>
                                                        </div>
                                                    </div>
                                                    <div class="form-group row">
                                                        <label
                                                            for="inputEmail"
                                                            class="col-sm-2 col-form-label"
                                                            >Email</label
                                                        >
                                                        <div class="col-sm-10">
                                                            <input
                                                                type="email"
                                                                v-model="
                                                                    form.email
                                                                "
                                                                class="form-control"
                                                                id="inputEmail"
                                                                placeholder="Email"
                                                                :class="{
                                                                    'is-invalid': form.errors.has(
                                                                        'email'
                                                                    )
                                                                }"
                                                            />
                                                            <has-error
                                                                :form="form"
                                                                field="email"
                                                            ></has-error>
                                                        </div>
                                                    </div>
                                                    <div class="form-group row">
                                                        <label
                                                            for="inputBio"
                                                            class="col-sm-2 col-form-label"
                                                            >Bio</label
                                                        >
                                                        <div class="col-sm-10">
                                                            <textarea
                                                                class="form-control"
                                                                v-model="
                                                                    form.bio
                                                                "
                                                                id="inputBio"
                                                                placeholder="Bio"
                                                                :class="{
                                                                    'is-invalid': form.errors.has(
                                                                        'bio'
                                                                    )
                                                                }"
                                                            ></textarea>
                                                            <has-error
                                                                :form="form"
                                                                field="bio"
                                                            ></has-error>
                                                        </div>
                                                    </div>
                                                    <div class="form-group row">
                                                        <label
                                                            for="inputProfilePhoto"
                                                            class="col-sm-2 col-form-label"
                                                            >Profile
                                                            Photo</label
                                                        >
                                                        <div class="col-sm-10">
                                                            <input
                                                                type="file"
                                                                @change="
                                                                    updateProfileImage
                                                                "
                                                                class="form-control-file"
                                                                id="inputProfilePhoto"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div class="form-group row">
                                                        <label
                                                            for="inputPassword"
                                                            class="col-sm-2 col-form-label"
                                                            >Password (Leave
                                                            empty if you are not
                                                            changing it)</label
                                                        >
                                                        <div class="col-sm-10">
                                                            <input
                                                                v-model="
                                                                    form.password
                                                                "
                                                                type="password"
                                                                class="form-control"
                                                                id="inputPassword"
                                                                placeholder="Password"
                                                                :class="{
                                                                    'is-invalid': form.errors.has(
                                                                        'password'
                                                                    )
                                                                }"
                                                            />
                                                            <has-error
                                                                :form="form"
                                                                field="password"
                                                            ></has-error>
                                                        </div>
                                                    </div>
                                                    <div class="form-group row">
                                                        <div
                                                            class="offset-sm-2 col-sm-10"
                                                        >
                                                            <button
                                                                type="submit"
                                                                @click.prevent="
                                                                    updateInfo
                                                                "
                                                                class="btn btn-primary"
                                                            >
                                                                Update
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <!-- /.tab-pane -->
                                        </div>
                                        <!-- /.tab-content -->
                                    </div>
                                    <!-- /.card-body -->
                                </div>
                                <!-- /.nav-tabs-custom -->
                            </div>
                            <!-- /.col -->
                        </div>
                        <!-- /.row -->
                    </div>
                    <!-- /.container-fluid -->
                </section>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: new Form({
                id: "",
                name: "",
                email: "",
                password: "",
                type: "",
                bio: "",
                photo: ""
            })
        };
    },
    mounted() {
        console.log("Component mounted.");
    },
    methods: {
        profilePhoto() {
            let photo =
                this.form.photo.length > 200
                    ? this.form.photo
                    : "img/profile/" + this.form.photo;
            return photo;
        },
        updateInfo() {
            this.$Progress.start();
            this.form
                .put("api/profile")
                .then(() => {
                    this.$Progress.finish();
                })
                .catch(() => {
                    this.$Progress.fail();
                });
        },
        updateProfileImage(e) {
            let file = e.target.files[0];
            let reader = new FileReader();
            if (file["size"] < 2111775) {
                reader.onloadend = file => {
                    // console.log("RESULT", reader.result);
                    this.form.photo = reader.result;
                };
                reader.readAsDataURL(file);
            } else {
                Swal.fire({
                    icon: "warning",
                    type: "error",
                    title: "Oops....",
                    text:
                        "You are uploading a large file max size should be 2MB"
                });
            }
        }
    },
    created() {
        axios.get("api/profile").then(({ data }) => this.form.fill(data));
    }
};
</script>
