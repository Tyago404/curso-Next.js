import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";

const ROOT_DIR = process.cwd();

export class JsonPostRepository implements PostRepository{
  private async readFromDisk(){}
  async findAll(): Promise<PostModel[]> {
    
  }
}

export const postRepository = new JsonPostRepository();

/*
Instalamos 'npm i -D tsx'
para executar e fazer testes do nosso código via terminal 

para executar o código temos que digitar: npx tsx .\src\arquivo\arquivo.x
aqui estamos verificando o que temos dentro de process.cwd()
console.log(ROOT_DIR)

instalamos também a extensão code runner
*/