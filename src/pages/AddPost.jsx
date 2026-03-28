import React from "react";
import { Container, PostForm } from "../components";
function AddPost() {
  return (
    <div className="w-full py-16">
      <Container>
        <div className="rounded-4xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/30">
          <PostForm />
        </div>
      </Container>
    </div>
  );
}

export default AddPost;
