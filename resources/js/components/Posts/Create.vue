<template>
    <div>
        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Title</label>
                <input type="text" class="form-control" id="title" aria-describedby="titleHelp">
                <div id="titleHelp" class="form-text">Your title goes here.</div>
            </div>
            <div class="mb-3">
                <label for="text" class="form-label">Post text</label>
                <textarea rows="10" class="form-control"></textarea>
            </div>
            
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>
    export default {
        
    }
</script>