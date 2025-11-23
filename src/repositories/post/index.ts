import { DrizzlePostRepository } from "./drizzle-repository";
import { PostRepository } from "./post-repository";

export const postRepository: PostRepository = new DrizzlePostRepository();
