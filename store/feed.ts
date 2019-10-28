import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'

@Module({ stateFactory: true, namespaced: true, name: 'feed' })
export default class Feed extends VuexModule {
  posts: string[] = []

  @Mutation
  addPost(post: string) {
    this.posts = [...this.posts, post]
  }

  @Action({ rawError: true })
  async loadPosts(str: string) {
    this.addPost(str)
  }
}
