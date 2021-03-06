/* tslint:disable */
/* eslint-disable */
/**
 * Gitea API.
 * This documentation describes the Gitea API.
 *
 * OpenAPI spec version: 1.15.0+dev-49-gaee5ef005
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
 * ContentsResponse contains information about a repo's entry's (dir, file, symlink, submodule) metadata and content
 * @export
 * @interface ContentsResponse
 */
export interface ContentsResponse {
    /**
     * 
     * @type {FileLinksResponse}
     * @memberof ContentsResponse
     */
    _links?: any;
    /**
     * `content` is populated when `type` is `file`, otherwise null
     * @type {string}
     * @memberof ContentsResponse
     */
    content?: any;
    /**
     * 
     * @type {string}
     * @memberof ContentsResponse
     */
    download_url?: any;
    /**
     * `encoding` is populated when `type` is `file`, otherwise null
     * @type {string}
     * @memberof ContentsResponse
     */
    encoding?: any;
    /**
     * 
     * @type {string}
     * @memberof ContentsResponse
     */
    git_url?: any;
    /**
     * 
     * @type {string}
     * @memberof ContentsResponse
     */
    html_url?: any;
    /**
     * 
     * @type {string}
     * @memberof ContentsResponse
     */
    name?: any;
    /**
     * 
     * @type {string}
     * @memberof ContentsResponse
     */
    path?: any;
    /**
     * 
     * @type {string}
     * @memberof ContentsResponse
     */
    sha?: any;
    /**
     * 
     * @type {number}
     * @memberof ContentsResponse
     */
    size?: any;
    /**
     * `submodule_git_url` is populated when `type` is `submodule`, otherwise null
     * @type {string}
     * @memberof ContentsResponse
     */
    submodule_git_url?: any;
    /**
     * `target` is populated when `type` is `symlink`, otherwise null
     * @type {string}
     * @memberof ContentsResponse
     */
    target?: any;
    /**
     * `type` will be `file`, `dir`, `symlink`, or `submodule`
     * @type {string}
     * @memberof ContentsResponse
     */
    type?: any;
    /**
     * 
     * @type {string}
     * @memberof ContentsResponse
     */
    url?: any;
}
