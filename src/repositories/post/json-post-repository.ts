import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { resolve } from "path";
import { readFile } from "fs/promises";

const ROOT_DIR = process.cwd();
const JSON_FILE_PATH = resolve(ROOT_DIR, "src", "db", "seeds", "posts.json");

export class JsonPostRepository implements PostRepository {

  private async readFromDisk():Promise<PostModel[]> {
    const jsonContent = await readFile(JSON_FILE_PATH, 'utf-8');
    const parsedJson = JSON.parse(jsonContent);
    const {posts} = parsedJson;
    return posts
  }

  async findAll(): Promise<PostModel[]> {
    const posts =  await this.readFromDisk();
    return posts
    }

    async findById(id: string): Promise<PostModel> {
      const posts = await this.findAll();
      const post = posts.find(post=> post.id === id);

      if(!post) throw new Error('Post não encontrado!');

      return post
    }
}

export const postRepository: PostRepository = new JsonPostRepository();

//FindAll
(async ()=>{
  const posts = await postRepository.findAll();
    posts.forEach(post => console.log(post.id))
});

//FindById
(async ()=>{
  const post = await postRepository.findById('afa086e4-53e4-492d-acf2-7c2966d83fcd');
  console.log(post)
})()

