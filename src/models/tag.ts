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
 * Tag represents a repository tag
 * @export
 * @interface Tag
 */
export interface Tag {
    /**
     * 
     * @type {CommitMeta}
     * @memberof Tag
     */
    commit?: any;
    /**
     * 
     * @type {string}
     * @memberof Tag
     */
    id?: any;
    /**
     * 
     * @type {string}
     * @memberof Tag
     */
    name?: any;
    /**
     * 
     * @type {string}
     * @memberof Tag
     */
    tarballUrl?: any;
    /**
     * 
     * @type {string}
     * @memberof Tag
     */
    zipballUrl?: any;
}