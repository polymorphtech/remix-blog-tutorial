import { prisma } from "~/db.server";

/*
interface Post {
    slug: string;
    title: string;
    markdown: string;
  }*/
  

  export async function getPosts() {
    return prisma.post.findMany();
  }

  /*
  export async function getPosts(): Promise<Array<Post>> {
    return [
      {
        slug: "my-first-post",
        title: "My First Post",
      },
      {
        slug: "90s-mixtape",
        title: "A Mixtape I Made Just For You",
      },
    ];
  }
  */

  export async function getPost(slug: string) {
    return prisma.post.findUnique({ where: { slug } });
  }

  export async function createPost(post: { title: string; slug: string; markdown: string; }) {
    return prisma.post.create({ data: post });
  }