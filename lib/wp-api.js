import { request } from "graphql-request";

export async function getPosts() {
  const query = `
    {
      posts {
        nodes {
          id
          title
          content
        }
      }
    }
  `;
  const data = await request("http://mysite.local/graphql", query);
  return data.posts.nodes;
}
