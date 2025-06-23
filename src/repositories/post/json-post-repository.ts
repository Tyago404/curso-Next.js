import { PostModel } from '@/models/post/post-model';
import { PostRepository } from './post-repository';
import { resolve } from 'path';
import { readFile } from 'fs/promises';

const ROOT_DIR = process.cwd();
const JSON_POSTS_FILE_PATH = resolve(
  ROOT_DIR,
  'src',
  'db',
  'seed',
  'posts.json',
);

export class JsonPostRepository implements PostRepository {
  private async readFromDisk():Promise<PostModel[]>{
    const jsonContent = await readFile(JSON_POSTS_FILE_PATH, 'utf-8') //readFile para ler um arquivo e retornar os dados em uma string
    const parsedJson = JSON.parse(jsonContent)
    const {posts} = parsedJson; //para pegar os posts depois do parse, desestruturados 
    return posts
  }

  async findAll(): Promise<PostModel[]> {
   const posts = await this.readFromDisk();
  return posts;
  }

  async findById(id: string): Promise<PostModel> {
    const posts = await this.findAll();
    const post = posts.find(post => post.id === id);

    if(!post) throw new Error('Post não encontrado')

    return post 
  }
}

export const postRepository:PostRepository = new JsonPostRepository();


//uma forma de fazer testes postRepository.findAll().then(jsonContent => console.log(jsonContent))
//ou:
(async ()=>{

  // const posts = await postRepository.findAll(); //Para encontrar todos os posts
  const posts = await postRepository.findById('99f8add4-7684-4c16-a316-616271db199e') //para encontrar apenas 1 post

  console.log(posts)

})() // ()para executar tudo