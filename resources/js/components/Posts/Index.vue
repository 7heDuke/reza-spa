<template>
<div>
    <table class="table table-hover
    ">
    <caption>List of posts</caption>
        <thead class="table">
            <tr>
                <th scope="col" class="col-1 text-center">#</th>
                <th scope="col" class="col-3 text-center">Title</th>
                <th scope="col" class="col-4 text-center">Post Content</th>
                <th scope="col" class="col-2 text-center">Created at</th>
                <th scope="col" class="col-2 text-center">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="post in posts.data" v-bind:key="post.id">
                <th scope="row" class="text-center">{{ post.id }}</th>
                <td>{{ post.title }}</td>
                <!-- <td>{{ post.post_text.substring(0, 200) }} ...</td> -->
                <td v-html="post.post_text"></td>
                <td class="text-center">{{ post.created_at }}</td>
                <td class="text-center">
                    <router-link class="btn btn-primary" :to="{ name: 'posts.edit', params: {id: post.id} }">Edit</router-link>
                    <button @click="delete_post(post.id)" class="btn btn-link text-danger">Delete</button>

                </td>
            </tr>
        </tbody>
    </table>
    <pagination :data="posts" @pagination-change-page="getResults"></pagination>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                posts:{}
            }
        },
        mounted() {
            this.getResults();
        },
        methods: {
            getResults(page = 1) {
                axios.get('/api/posts?page=' + page).then(response => {
                this.posts = response.data;
                });
            },

            delete_post(post_id) {
                this.$swal({
                    title: 'Are you sure?',
                    text: "You won't be able to restore post!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: 'secondary',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.value) {
                        axios.delete('/api/posts/' + post_id)
                            .then(response => {
                                this.$swal({icon: 'success', title: 'Post deleted successfully'});
                                this.getResults();
                            }).catch(error => {
                            this.$swal({ icon: 'error', title: 'Error happened'});
                        });
                    }
                })
            }
        }
    }
</script>