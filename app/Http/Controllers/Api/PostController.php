<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StorePostRequest;
use App\Http\Resources\PostResource;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        return PostResource::collection(Post::paginate(5));
    }


    public function store(StorePostRequest $request) 
    {
        sleep (1);

        $post = Post::create($request->validated());

        return new PostResource($post);
    }

    public function show(Post $post)
    {
        return new PostResource($post);
    }
    
    public function update(Post $post, StorePostRequest $request)
    {
        $post->update($request->validated());

        return new PostResource($post);
    }
}
