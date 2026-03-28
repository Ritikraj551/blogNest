import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";

function Home() {
  const [posts, setPosts] = useState([]);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    appwriteService.getAllPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-16">
        <Container>
          <div className="rounded-4xl border border-slate-800 bg-slate-900/75 p-12 shadow-2xl shadow-slate-950/30">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-3xl font-semibold text-slate-100 sm:text-4xl">
                {authStatus
                  ? "No posts yet. Add one now!"
                  : "Login to read posts"}
              </h1>
              <p className="mt-4 text-slate-400">
                {authStatus
                  ? "Create your first story and share your thoughts with the community."
                  : "Sign in to explore posts from creators and start reading now."}
              </p>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full py-16">
      <Container>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {posts.map((post) => (
            <div key={post.$id} className="p-2">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
