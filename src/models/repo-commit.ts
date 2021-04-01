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
 * 
 * @export
 * @interface RepoCommit
 */
export interface RepoCommit {
    /**
     * 
     * @type {CommitUser}
     * @memberof RepoCommit
     */
    author?: any;
    /**
     * 
     * @type {CommitUser}
     * @memberof RepoCommit
     */
    committer?: any;
    /**
     * 
     * @type {string}
     * @memberof RepoCommit
     */
    message?: any;
    /**
     * 
     * @type {CommitMeta}
     * @memberof RepoCommit
     */
    tree?: any;
    /**
     * 
     * @type {string}
     * @memberof RepoCommit
     */
    url?: any;
}
