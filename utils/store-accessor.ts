import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import feed from '~/store/feed'

let feedStore: feed

function initialiseStores(store: Store<any>): void {
  feedStore = getModule(feed, store)
}

export { initialiseStores, feedStore }
