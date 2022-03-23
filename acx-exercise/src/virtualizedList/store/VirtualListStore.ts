import {action, computed, makeObservable, observable} from "mobx";
import {Works} from "../../services/ApiService";

export class VirtualListStore{

    /**
     * observable list of type Works (see APiService.ts)
     *
     */
    @observable private data: Works[] = [];


    constructor() {
        makeObservable(this)
    }


    /**
     * adds an item onto data list
     *
     * <finish the implementation of this>
     * @param item
     */
    @action
    public appendItem(item: Works) {


    }

    @action
    public extend(items: Works[]) {


    }


    /**
     * this is the method that will determine what is visible in the
     * viewport. a virtualized list only shows a slice of the full array
     * to prevent lag when rendering large arrays
     *
     * <finish the implementation of this getter>
     */
    @computed get visibleItems(): Works[] {

        return [];
    }



}