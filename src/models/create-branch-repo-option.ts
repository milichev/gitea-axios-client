/* tslint:disable */
/* eslint-disable */
/**
 * Gitea API.
 * This documentation describes the Gitea API.
 *
 * OpenAPI spec version: 1.14.0&#43;dev-693-g487f2ee41
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
 * CreateBranchRepoOption options when creating a branch in a repository
 * @export
 * @interface CreateBranchRepoOption
 */
export interface CreateBranchRepoOption {
    /**
     * Name of the branch to create
     * @type {string}
     * @memberof CreateBranchRepoOption
     */
    newBranchName: any;
    /**
     * Name of the old branch to create from
     * @type {string}
     * @memberof CreateBranchRepoOption
     */
    oldBranchName?: any;
}