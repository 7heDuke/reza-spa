<template>
    <div>
        <form @submit.prevent="submit_form">
            <div class="mb-3">
                <label for="title" class="form-label">Title</label>
                <input type="text" v-model="fields.title" class="form-control" aria-describedby="titleHelp">
                <div id="titleHelp" class="form-text">Your eye-cathcing title goes here.</div>
                
                <div class="alert alert-warning d-flex align-items-center alert-dismissible fade show" role="alert" v-if="errors && errors.title">
                    <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
                        <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                        </symbol>
                    </svg>
                    <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Warning:"><use xlink:href="#exclamation-triangle-fill"/></svg>
                    <div>
                        {{ errors.title[0] }}
                    </div>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                <!-- <div class="alert alert-danger" v-if="errors && errors.title">
                    {{ errors.title[0] }}
                </div> -->
            </div>
            <div class="mb-3">
                <label for="text" class="form-label">Post text</label>
                <textarea v-model="fields.post_text" rows="10" class="form-control"></textarea>
                <div id="textHelp" class="form-text">Your winning contents goes here.</div>

                <div class="alert alert-warning d-flex align-items-center alert-dismissible fade show" role="alert" v-if="errors && errors.post_text">
                    <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
                        <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                        </symbol>
                    </svg>
                    <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Warning:"><use xlink:href="#exclamation-triangle-fill"/></svg>
                    <div>
                        {{ errors.post_text[0] }}
                    </div>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>
            
            <input type="submit" class="btn btn-primary" :value="form_submitting ? 'Saving post...' : 'Publish'" :disabled="form_submitting" >
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                fields: {
                    title: '',
                    post_text: ''
                },
                errors: {},
                form_submitting: false,
            }
        },

        methods: {
            submit_form() {
                this.form_submitting = true;
                axios.post('/api/posts', this.fields)
                .then(response => {
                    this.$swal({icon: 'success', title: 'Post published'});
                    this.$router.push('/');
                    this.form_submitting = false;
                }).catch(error => {
                    this.$swal({icon: 'error', title: 'Something is wrong'});
                    if (error.response.status === 422) {
                        this.errors = error.response.data.errors;
                    }
                this.form_submitting = false;
                });
            }
        }
    }
</script>