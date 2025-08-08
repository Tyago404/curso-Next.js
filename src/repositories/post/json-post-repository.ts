import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";

const ROOT_DIR = process.cwd();

export class JsonPostRepository implements PostRepository {
  private async readFromDisk(){}

  async findAll(): Promise<PostModel[]> {}
}

export const postRepository = new JsonPostRepository();

//utilizando npx tsx .\src\repositories\post\json-post-repository.ts você consegue executar este arquivo, ou configurar no code runner
console.log(ROOT_DIR)

