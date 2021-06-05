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
                <td>{{ post.post_text }}</td>
                <td class="text-center">{{ post.created_at }}</td>
                <td>
                    <router-link :to="{ name: 'posts.edit', params: {id: post.id} }">Edit</router-link>
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
            }
        }
    }
</script>