/**
 * use this free API to retrieve a list of works to display in the list
 * the json returned from this API has an items array. each item has a 'title' field and a 'publisher' field.
 * render both these fields in the list items.
 *
 *
 * documentation for the API:
 *  https://github.com/CrossRef/rest-api-doc#api-overview
 *
 * api endpoint to use to retrieve data. this will return 100 rows:
 *  https://api.crossref.org/works?rows=100
 */

export interface Works{
    title: string;
    publisher:string;
}


export class ApiService{

    public retrieveWorks(): Works[] {
        // you may use libraries (axios,or standard fetch) to load data
        // after loading data, project to the given interface.


        // this will fetch 100 rows of data from API
        //  https://api.crossref.org/works?rows=100
        return [] as Works[];


    }


}