/**
 * use this free API to retrieve a list of works to display in the list
 * the json returned from this API has an items array. each item has a 'title' field and a 'publisher' field.
 * render both these fields in the list items.
 *
 * the API returns 20 items per page. hit the API 5 times to build a list of 100 items to append onto your
 * virtualized list
 *
 * documentation for the API:
 *  https://github.com/CrossRef/rest-api-doc#api-overview
 *
 * api endpoint to use to retrieve data:
 *  https://api.crossref.org/works?
 */

export interface Works{
    title: string;
    publisher:string;
}


export class ApiService{


    /**
     * page over the endpoint to accumulate 100 Works items
     */
    public retrieveWorks(): Works[] {
        return [];

    }


}